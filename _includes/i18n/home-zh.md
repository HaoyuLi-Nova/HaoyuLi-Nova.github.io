<span class='anchor' id='about-me'></span>

本人为 [武汉大学](https://www.whu.edu.cn/) **计算机科学与技术**专业本科生，现于武汉学习。研究兴趣涵盖 **世界模型**、**扩散模型**、**多模态学习**、**高效推理**、**具身智能** 与 **医疗人工智能**（含联邦学习与医疗场景下的隐私保护）。曾在武汉大学 MARS 实验室担任科研助理，并在哈尔滨工业大学智能接口技术中心远程实习。

联系方式：**haoyuli404@outlook.com** · **+86-158-2700-2669**

<span class='anchor' id='-news'></span>

# 🔥 动态

- *2026.04*：&nbsp;📝 多项工作审稿中，包括 *PsycheAgents* / *PsyCare*（npj Digital Medicine）等，详见下方发表论文。
- *2025.10*：&nbsp;🏆 获评武汉大学 **优秀学生干部**、**三好学生**。
- *2025*：&nbsp;🥇 **全国大学生计算机系统能力大赛** 全国三等奖；**中国大学生计算机设计大赛** 中南赛区一等奖；**全国大学生数学竞赛** 湖北赛区二等奖；**美国大学生数学建模竞赛（MCM/ICM）** Honorable Mention。

<span class='anchor' id='-publications'></span>

# 📝 发表论文

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TGRS</div><img src='{{ "/images/Mamba_Framework.png" | relative_url }}' alt="S3Mamba-Pan 框架：FDFM、GSA、DSMM 与 ADR 用于全色锐化" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**S3Mamba-Pan: Spectral-Spatial-Scale Mamba for Pansharpening**

李浩宇（第三作者），等。

*IEEE Transactions on Geoscience and Remote Sensing*（**已录用**）。

- **框架概览：** 低分辨率多光谱（MS）与高分辨率全色（PAN）经 **FDFM**（基于 DWT 的频域分解）、**GSA** 进行全局光谱建模与锚点特征提取，重复堆叠的 **DSMM** 模块（多尺度 Mamba，含空间与状态空间分支），以及 **ADR**（IDWT + 通道融合）预测 **高分辨率 MS（HRMS）**。
- **效率：** 实验中推理速度约较 Transformer 基线 **2.6×**。

</div>
</div>

- **PsycheAgents: A Multi-Modal Agentic Framework for Psychiatric Differential Diagnosis** — 李浩宇（第一作者），等。**npj Digital Medicine**（*审稿中*）。
- **PsyCare: A Multi-dimensional Multimodal Benchmark for Major Psychiatric Disorder Recognition** — 李浩宇（第二作者），等。**npj Digital Medicine**（*审稿中*）。
- **Rectified Flow for Electronic Health Record Synthesis** — 李浩宇（第一作者），等（*已投稿 npj Digital Medicine*）。
- **Membership Inference Attacks in Re-identification** — 李浩宇（第一作者），等（*已投稿 IJCV*）。

<span class='anchor' id='-honors-and-awards'></span>

# 🎖 荣誉与奖项

- *2025* &nbsp;武汉大学 **优秀学生干部**  
- *2025* &nbsp;武汉大学 **三好学生**  
- *2025* &nbsp;**全国大学生计算机系统能力大赛** 全国三等奖  
- *2025* &nbsp;**中国大学生计算机设计大赛** 中南赛区一等奖  
- *2025* &nbsp;**全国大学生数学竞赛** 湖北赛区二等奖  
- *2025* &nbsp;**美国大学生数学建模竞赛（MCM/ICM）** Honorable Mention  

<span class='anchor' id='-educations'></span>

# 📖 教育背景

- *2023 年 9 月 – 2027 年 6 月（预计）*，**计算机科学与技术 工学学士**，[武汉大学](https://www.whu.edu.cn/)，武汉  
  - **GPA：** 92.08 / 100  
  - **部分课程：** 数据结构（97）、算法设计与分析（92）、计算机图形学（92）、软件构造基础（94）、高等数学（96）、概率论与数理统计（92）

<span class='anchor' id='-research-experience'></span>

# 🔬 科研经历

- **武汉大学 MARS 实验室** — *科研助理* · 2025 年 4 月 – 至今 · 武汉 · 导师：叶茫教授  
  - **多中心联邦学习（精神医学方向）：** 拓扑感知联邦原型方法；在非独立同分布场景下采用无监督聚类原型缓解 “奇美拉原型” 问题；在多模态基准上取得较强结果。  
  - **PsycheAgents：** 面向鉴别诊断的多模态智能体框架；层次化推理受临床会诊流程启发。  
  - **PsyCare：** 共同构建多维度精神医学基准；临床数据发布于 **Harvard Dataverse**，支持隐私保护下的医疗 AI 研究。  
  - **隐私与安全：** 多模态重识别中的成员推断；分析并缓解分布式场景下的跨模态泄露。

- **哈尔滨工业大学 智能接口技术中心** — *远程科研实习* · 2025 年 12 月 – 至今 · 远程 · 导师：赵铁军教授  
  - **S3Mamba-Pan：** 全色锐化框架 FDFM / GSA / DSMM / ADR（见上文 IEEE TGRS 图示）。  
  - **临床时序生成：** 实现基于整流流（rectified flow）的扩散模型，用于高保真临床数据合成。

<span class='anchor' id='-projects'></span>

# 💼 项目

- **[SURS: Structured Ultrasound Reporting System](https://github.com/HaoyuLi-Nova/SURS)** — *2025 年 12 月 – 至今* · 独立开发 · .NET 9、WPF、QuestPDF、MVVM  
  - 面向临床的高并发报告工作流；符合 **O-RADS** 的模板；解耦的 MVVM 模块；基于 **QuestPDF** 的一键报告生成。

- **[CyberMars: Intelligent CyberDog Robotics Control](https://github.com/HaoyuLi-Nova/CyberMars)** — *2025 年 6 月 – 8 月* · 核心开发 · Python、ROS、强化学习、计算机视觉  
  - 小米 CyberDog 自主导航与避障；**LCMT** 通信；视觉模块（车道线、二维码/标记检测）；系统能力赛道 **全国三等奖**。

<span class='anchor' id='-leadership-service'></span>

# 🌟 学生工作与志愿服务

- **班长**，武汉大学 · 2023 年 9 月 – 至今 — 负责 **31** 人班级事务；协调教学与行政工作；组织 **16+** 场覆盖班级、院际与校际的主题活动。  
- **外联部部委**（2024–2025）— 促成 **2** 次正式校企对接；策划联合活动累计覆盖 **5000+** 人次。  
- 获评 **优秀学生干部**、**优秀志愿者** 等与工作与志愿服务相关的荣誉。

<span class='anchor' id='-skills'></span>

# 🛠 技能

- **语言：** 中文（母语）、英文（流利）  
- **编程：** Python、Java、C#、C++、SQL、Go  
- **工具与框架：** PyTorch、scikit-learn、Linux、Git、ROS、Docker  
- **开发环境：** PyCharm、VS Code、GoLand、IntelliJ IDEA Ultimate
