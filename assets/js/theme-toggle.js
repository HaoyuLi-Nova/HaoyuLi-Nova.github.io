(function () {
  var STORAGE_KEY = 'haoyu-theme';
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function pageLang() {
    var lang = (document.documentElement.lang || 'en').toLowerCase();
    return lang.indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function updateThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f1117' : '#ffffff');
  }

  function syncButton(theme) {
    var dark = theme === 'dark';
    var lang = pageLang();
    var labelKey = dark ? 'data-label-to-light-' : 'data-label-to-dark-';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    btn.setAttribute('aria-label', btn.getAttribute(labelKey + lang) || '');
    document.documentElement.classList.toggle('theme-is-dark', dark);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) { /* ignore */ }
    updateThemeColor(theme);
    syncButton(theme);
  }

  btn.addEventListener('click', function () {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  });

  window.addEventListener('i18n-lang-changed', function () {
    syncButton(currentTheme());
  });

  syncButton(currentTheme());
})();
