(function () {
  var STORAGE_KEY = 'haoyu-bg-music-playing';
  var FADE_MS = 400;
  var TARGET_VOLUME = 0.28;

  var audio = document.getElementById('bg-music-audio');
  var btn = document.getElementById('bg-music-toggle');
  var root = document.getElementById('bg-music-root');
  if (!audio || !btn || !root) return;

  root.hidden = false;
  audio.preload = 'auto';

  var fadeTimer = null;
  var preferredPlaying = false;

  try {
    preferredPlaying = localStorage.getItem(STORAGE_KEY) === '1';
  } catch (e) {
    preferredPlaying = false;
  }

  function pageLang() {
    var lang = (document.documentElement.lang || 'en').toLowerCase();
    return lang.indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function labelKey(playing) {
    var lang = pageLang();
    return playing
      ? 'data-label-pause-' + lang
      : 'data-label-play-' + lang;
  }

  function setPlayingState(playing) {
    btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    btn.setAttribute('aria-label', btn.getAttribute(labelKey(playing)) || '');
    root.classList.toggle('is-playing', playing);
  }

  function setPreferredPlaying(playing) {
    preferredPlaying = playing;
    try {
      localStorage.setItem(STORAGE_KEY, playing ? '1' : '0');
    } catch (e) { /* ignore */ }
  }

  function clearFade() {
    if (fadeTimer) {
      window.clearInterval(fadeTimer);
      fadeTimer = null;
    }
  }

  function fadeTo(target, done) {
    clearFade();
    var start = audio.volume;
    var steps = 12;
    var step = 0;
    fadeTimer = window.setInterval(function () {
      step += 1;
      audio.volume = start + (target - start) * (step / steps);
      if (step >= steps) {
        clearFade();
        audio.volume = target;
        if (done) done();
      }
    }, FADE_MS / steps);
  }

  function playMusic(markPreferred) {
    if (markPreferred) setPreferredPlaying(true);
    audio.volume = 0;
    var p = audio.play();
    if (p && typeof p.then === 'function') {
      p.then(function () {
        fadeTo(TARGET_VOLUME, function () {
          setPlayingState(true);
        });
      }).catch(function () {
        setPlayingState(false);
      });
    } else {
      fadeTo(TARGET_VOLUME, function () {
        setPlayingState(true);
      });
    }
  }

  function pauseMusic() {
    setPreferredPlaying(false);
    clearFade();
    fadeTo(0, function () {
      audio.pause();
      setPlayingState(false);
    });
  }

  function toggle() {
    if (!audio.paused) {
      pauseMusic();
    } else {
      playMusic(true);
    }
  }

  btn.addEventListener('click', toggle);

  audio.addEventListener('ended', function () {
    /* loop attribute handles repeat; guard for browsers */
    audio.currentTime = 0;
    audio.play();
  });

  function syncAriaLabel() {
    var playing = !audio.paused;
    btn.setAttribute('aria-label', btn.getAttribute(labelKey(playing)) || '');
  }

  function attemptResume() {
    if (!preferredPlaying || !audio.paused) return;
    var p = audio.play();
    if (p && typeof p.then === 'function') {
      p.then(function () {
        audio.volume = TARGET_VOLUME;
        setPlayingState(true);
      }).catch(function () {
        // Browser may still block autoplay after tab discard.
        setPlayingState(false);
      });
    } else {
      audio.volume = TARGET_VOLUME;
      setPlayingState(true);
    }
  }

  window.addEventListener('i18n-lang-changed', syncAriaLabel);
  document.addEventListener('DOMContentLoaded', syncAriaLabel);
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) attemptResume();
  });
  window.addEventListener('focus', attemptResume);
  window.addEventListener('pageshow', attemptResume);

  setPlayingState(!audio.paused);
  if (preferredPlaying) {
    setTimeout(attemptResume, 80);
  }
})();
