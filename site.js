const translations = {
  en: {
    "nav.framework": "Framework",
    "nav.evaluation": "Evaluation",
    "nav.enrichment": "Enrichment",
    "nav.access": "Trial",
    "hero.subtitle": "仿真技术驱动的具身数据转换工具链，支持模型评测与人机对齐的数据合成。",
    "hero.report": "Technical Report",
    "framework.title": "JoyAI-Sim Framework",
    "framework.p1":
      "To address the widely recognized challenges of evaluation efficiency and data bottlenecks in embodied AI, we propose the JoyAI-Sim simulation data transformation toolchain, Robot ⇌ Simulation ⇌ Human, built upon the embodied data pyramid. This toolchain supports both a top-down Robot → Simulation → Human service for efficient model evaluation and a bottom-up Human → Simulation → Robot service for data enrichment.",
    "framework.p2":
      "The two transformation pipelines connect, at one end, scarce robot data that closely reflects real-world deployment, and at the other end, abundant human data that is not tied to a specific robot embodiment. Together, they enable bidirectional integration of data and evaluation. Through the JD Cloud JoyBuilder platform, JoyAI-Sim provides developers with a one-stop embodied simulation service.",
    "evaluation.title": "Efficient model evaluation based on simulation tool chain",
    "evaluation.p1":
      "Through the Robot → Simulation → Human simulation toolchain, model evaluation can be conducted more efficiently than on physical robots. Real robot tasks are used to define deployment-oriented goals, while digital twins enable scalable simulation-based evaluation and trajectory synthesis. Human embodied feedback is further introduced to assess the naturalness of simulated actions, thereby forming a closed-loop evaluation pipeline that connects physical robot evaluation, simulation evaluation, and human perception.",
    "robotsim.title": "Robot → Simulation",
    "robotsim.p1":
      "Using real robot tasks as anchors, task semantics, object assets, scene layouts, robot embodiments, camera configurations, control interfaces, and success criteria are mapped into digital twins to construct simulation evaluation environments that are reproducible, parallelizable, and diagnosable. JoyAI-Sim builds a Sim-Ready asset library for household scenarios by integrating 3D reconstruction techniques. The library covers 295 fine-grained categories and 53,661 asset instances, and supports adjustments across multiple simulators along dimensions such as robot states, object layouts, instance variations, backgrounds, language instructions, and lighting.",
    "robotsim.p2":
      "The simulation environments are further grounded through scene-specific asset construction and alignment. JoyAI-Sim reconstructs study-room and living-room household settings as digital twins, so that real-robot evaluation targets, object arrangements, and deployment constraints can be faithfully replayed in simulation.",
    "robotsim.alignTitle": "Robot-to-Sim Alignment Example",
    "robotsim.alignP":
      "This paired rollout uses a real robot task as the anchor and shows the corresponding digital twin alignment. The side-by-side view makes the evaluation setting reproducible and easier to diagnose across object layout, camera viewpoint, and robot embodiment.",
    "simhuman.title": "Simulation → Human",
    "simhuman.p1":
      "In simulation, robot trajectories are generated or augmented using FSM+IK, IKFlow, and reinforcement learning, with human embodied feedback further introduced to assess trajectory naturalness. Human operators simulate the execution of these trajectories to identify unreasonable patterns in approach strategies, phase transitions, and motion smoothness. This makes it possible to filter out trajectories that are physically feasible but inconsistent with human motion intuition, thereby improving the quality of both simulation-based evaluation and synthetic data.",
    "simhuman.p2":
      "This flow illustrates how simulated robot trajectories are projected into human-hand space for first-person replay and inspection. Human embodied feedback then becomes a practical filter for rejecting awkward yet executable trajectories before they are reused for evaluation or training.",
    "simhuman.feedbackTitle": "Human Embodied Feedback",
    "simhuman.feedbackP":
      "Synchronized VR recordings expose the human-in-the-loop stage directly: operators inspect approach strategies, contact timing, and motion smoothness, then filter behaviors that are physically feasible but awkward under embodied human judgment.",
    "simhuman.approach": "Approach Check",
    "simhuman.transition": "Phase Transition",
    "simhuman.contact": "Contact Plausibility",
    "simhuman.smooth": "Motion Smoothness",
    "enrichment.title": "Data Enrichment Service Based on the Simulation Toolchain",
    "enrichment.p1":
      "Through the Human → Simulation → Robot simulation toolchain, JoyAI-Sim provides a data enrichment service. Using first-person human demonstration videos as the data source, the toolchain leverages hand motion recovery, scene reconstruction, and digital twin construction to transform human behaviors that are originally independent of any robot embodiment into tasks that can be executed and verified in simulation. It then generates trajectories, states, and action data for robot learning through robot trajectory retargeting, physical feasibility filtering, simulation randomization, and robot-view rendering. In this way, it builds a value-added pipeline that connects human demonstration data, simulation data, and robot data.",
    "enrichment.p2":
      "In the Human → Simulation stage, hand trajectories, grasp/release events, object interaction relationships, and scene geometry are extracted from human egocentric videos. A simulation-executable digital twin environment is then constructed, transforming human videos from purely visual records into simulation instances with spatial structure, interaction relationships, and task semantics.",
    "enrichment.p3":
      "In the Simulation → Robot stage, robot embodiment adaptation and physical feasibility validation are performed in the simulation environment. Actions involving joint-limit violations, collisions, unreachable poses, or unreasonable contacts are filtered out. Meanwhile, by varying factors such as object positions, container layouts, object combinations, colors and materials, lighting, and backgrounds, diverse yet physically feasible robot trajectories and observation videos can be derived from the same human demonstration.",
    "enrichment.p4":
      "Ultimately, large-scale, low-cost human behavior data is transformed into high-value training resources that are verifiable, extensible, and usable for robot learning.",
    "generalization.title": "Simulation Generalization Examples",
    "generalization.p":
      "Before robot-view observations are exported, the simulator can vary visual conditions while preserving the task structure. Lighting and material randomization provide controlled diversity for downstream robot learning without changing the underlying trajectory.",
    "generalization.light": "Lighting Generalization",
    "generalization.texture": "Texture Generalization",
    "generalization.normal": "Normal",
    "generalization.bright": "Bright",
    "generalization.low": "Low light",
    "output.title": "Simulation-to-Robot Output",
    "output.p":
      "The resulting output is not just a visualization artifact: it is a robot-centered, multi-view observation stream prepared for downstream robot learning. This sample shows the training-ready visual output after simulation retargeting and robot-view rendering.",
    "trial.title": "Trial and Access",
    "trial.p": "You are welcome to experience the JoyAI-Sim embodied simulation service through the JD Cloud JoyBuilder platform:",
    "trial.create": "Create a simulation service",
    "trial.manage": "Manage a simulation service",
    "trial.view": "View a simulation service",
    "trial.connect": "Connect to a simulation service",
    "trial.mount": "Mount cloud-based simulation assets",
    "trial.practice": "Embodied simulation data augmentation practice case",
    "trial.market": "Data trading platform",
    "authors.title": "Authors",
    "authors.p": "Author list, affiliations, and contribution notes will be added here.",
    "citation.title": "Citation",
    "citation.p": "Please cite the arXiv technical report using the following BibTeX entry.",
    "footer.report": "Technical Report",
    "footer.framework": "JoyAI-Sim Framework",
    "footer.evaluation": "Efficient model evaluation",
    "footer.enrichment": "Data enrichment service",
    "footer.toolchain": "Toolchain",
    "footer.evalLink": "Robot-Simulation-Human",
    "footer.enrichLink": "Human-Simulation-Robot",
    "footer.github": "GitHub",
    "footer.trial": "Trial",
    "footer.create": "Create simulation service",
    "footer.market": "Data trading platform",
    "copy.default": "Copy",
    "copy.success": "Copied",
    "copy.fail": "Copy failed",
  },
  zh: {
    "nav.framework": "框架",
    "nav.evaluation": "测评",
    "nav.enrichment": "增值服务",
    "nav.access": "试用入口",
    "hero.subtitle": "仿真技术驱动的具身数据转换工具链，支持模型评测与人机对齐的数据合成。",
    "hero.report": "技术报告",
    "framework.title": "JoyAI-Sim 框架",
    "framework.p1":
      "为应对具身智能领域普遍存在的测评效率与数据瓶颈问题，我们提出基于具身数据金字塔的 JoyAI-Sim 仿真数据转换工具链 Robot ⇌ Simulation ⇌ Human。该工具链同时支持自顶向下的 Robot → Simulation → Human 高效模型测评服务，以及自底向上的 Human → Simulation → Robot 数据增值服务。",
    "framework.p2":
      "这两条转换链路一端连接稀缺但贴近真实部署的机器人数据，另一端连接丰富但与具体本体无关的人类数据，最终实现数据与测评的双向贯通。依托京东云 JoyBuilder 平台，JoyAI-Sim 为开发者提供一站式具身仿真服务。",
    "evaluation.title": "基于仿真工具链的高效模型测评",
    "evaluation.p1":
      "通过 Robot → Simulation → Human 仿真工具链，可实现比真机更高效的模型测评。以真实机器人任务定义部署目标，借助数字孪生实现可规模化的仿真评测与轨迹合成，并引入人类具身反馈检验仿真动作的自然度，从而构建一条贯通真机测评、仿真测评与人类感知的闭环评测链路。",
    "robotsim.title": "Robot → Simulation",
    "robotsim.p1":
      "以真实机器人任务为锚点，将任务语义、物体资产、场景布局、机器人本体、相机配置、控制接口和成功判据映射到数字孪生中，构建可复现、可并行、可诊断的仿真评测环境。JoyAI-Sim 通过综合运用 3D 重建技术构建面向家居场景的 Sim-Ready 资产库，覆盖 295 个细粒度类别、53,661 个资产实例，并支持在多个仿真器中沿机器人状态、物体布局、实例变化、背景、语言指令和光照等维度进行调整。",
    "robotsim.p2":
      "仿真环境进一步通过场景级资产构建与对齐获得真实锚定。JoyAI-Sim 重建了书房与客厅等家居场景数字孪生，使真实机器人测评目标、物体摆放与部署约束能够在仿真中被忠实复现。",
    "robotsim.alignTitle": "Robot-to-Sim 对齐示例",
    "robotsim.alignP":
      "该对齐示例以真实机器人任务为锚点，展示其对应的数字孪生场景。并排视图使我们能够在物体布局、相机视角和机器人本体层面更稳定地复现实验设置，并更容易进行诊断。",
    "simhuman.title": "Simulation → Human",
    "simhuman.p1":
      "在仿真中，我们结合 FSM+IK、IKFlow 和强化学习生成或扩增机器人轨迹，并进一步引入人类具身反馈评估轨迹自然度。操作者通过模拟执行这些轨迹，识别接近策略、阶段过渡与动作平滑性中的不合理模式，从而筛除虽然物理可行但不符合人类运动直觉的轨迹，提升仿真测评与合成数据质量。",
    "simhuman.p2":
      "该流程展示了如何将仿真生成的机器人轨迹投影到人手空间中进行第一视角回放与检查。这样的人类具身反馈机制，使我们能够在轨迹被重新用于测评或训练之前，筛除那些看似可执行但动作别扭的样本。",
    "simhuman.feedbackTitle": "人类具身反馈",
    "simhuman.feedbackP":
      "多路同步的 VR 录像直接展示了 human-in-the-loop 阶段：操作者检查接近策略、接触时机和动作平滑性，并筛除那些虽然物理可行但不符合人类具身判断的行为。",
    "simhuman.approach": "接近策略检查",
    "simhuman.transition": "阶段切换",
    "simhuman.contact": "接触合理性",
    "simhuman.smooth": "动作平滑性",
    "enrichment.title": "基于仿真工具链的数据增值服务",
    "enrichment.p1":
      "通过 Human → Simulation → Robot 仿真工具链，JoyAI-Sim 提供数据增值服务。以第一人称人类示范视频作为数据源，借助手部运动恢复、场景重建与数字孪生构建，将原本与机器人本体无关的人类行为转化为可在仿真中执行和验证的任务；再通过机器人轨迹重定向、物理可行性筛选、仿真随机化与机器人视角渲染，生成可用于机器人学习的轨迹、状态和动作数据，从而构建一条贯通人类示范数据、仿真数据与机器人数据的增值链路。",
    "enrichment.p2":
      "在人类到仿真阶段，我们从第一视角视频中提取手部轨迹、抓取/释放事件、物体交互关系与场景几何结构，并构建可在仿真中执行的数字孪生环境，使人类视频从单纯视觉记录转化为空间结构、交互关系和任务语义兼备的仿真实例。",
    "enrichment.p3":
      "在仿真到机器人阶段，我们在仿真环境中完成机器人本体适配与物理可行性验证，筛除关节越界、碰撞、不可达姿态和不合理接触。同时，通过改变物体位置、容器布局、物体组合、颜色材质、光照和背景等因素，从同一条人类示范派生出多样但仍物理可行的机器人轨迹与观测视频。",
    "enrichment.p4":
      "最终，大规模低成本的人类行为数据被转化为可验证、可扩展、可直接用于机器人学习的高价值训练资源。",
    "generalization.title": "仿真泛化示例",
    "generalization.p":
      "在导出机器人视角观测之前，仿真器可以在保持任务结构不变的前提下改变视觉条件。光照和材质随机化为下游机器人学习提供了可控的多样性，而不会改变底层轨迹本身。",
    "generalization.light": "光照泛化",
    "generalization.texture": "纹理泛化",
    "generalization.normal": "正常光照",
    "generalization.bright": "明亮光照",
    "generalization.low": "弱光",
    "output.title": "Simulation-to-Robot 输出",
    "output.p":
      "最终结果并不只是一个可视化演示，而是一组以机器人为中心的多视角观测流，可直接用于下游机器人学习。这个样例展示了仿真重定向与机器人视角渲染之后的训练就绪视觉输出。",
    "trial.title": "试用与入口",
    "trial.p": "欢迎通过京东云 JoyBuilder 平台体验 JoyAI-Sim 具身仿真服务：",
    "trial.create": "创建仿真服务",
    "trial.manage": "管理仿真服务",
    "trial.view": "查看仿真服务",
    "trial.connect": "连接仿真服务",
    "trial.mount": "挂载云端仿真资产",
    "trial.practice": "具身仿真数据增强实践案例",
    "trial.market": "数据交易平台",
    "authors.title": "作者",
    "authors.p": "作者列表、机构信息与贡献说明将在此处补充。",
    "citation.title": "引用",
    "citation.p": "请使用下面的 BibTeX 条目引用该 arXiv 技术报告。",
    "footer.report": "技术报告",
    "footer.framework": "JoyAI-Sim 框架",
    "footer.evaluation": "高效模型测评",
    "footer.enrichment": "数据增值服务",
    "footer.toolchain": "工具链",
    "footer.evalLink": "Robot-Simulation-Human",
    "footer.enrichLink": "Human-Simulation-Robot",
    "footer.github": "GitHub",
    "footer.trial": "试用入口",
    "footer.create": "创建仿真服务",
    "footer.market": "数据交易平台",
    "copy.default": "复制",
    "copy.success": "已复制",
    "copy.fail": "复制失败",
  },
};

const feedbackVideos = Array.from(document.querySelectorAll(".feedback-grid video"));
const langButtons = Array.from(document.querySelectorAll("[data-lang-value]"));
const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));

const syncFeedbackGrid = () => {
  if (!feedbackVideos.length) return;
  feedbackVideos.forEach((video) => {
    video.muted = true;
    if (video.readyState >= 1) video.currentTime = Math.min(1.4, Math.max(0, video.duration - 0.2));
    const playPromise = video.play();
    if (playPromise) playPromise.catch(() => {});
  });
};

const applyLanguage = (lang) => {
  const next = translations[lang] ? lang : "en";
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  document.body.dataset.lang = next;
  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[next][key]) node.textContent = translations[next][key];
  });
  langButtons.forEach((button) => {
    const active = button.dataset.langValue === next;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.textContent = translations[next]["copy.default"];
  });
  window.localStorage.setItem("joyai-sim-lang", next);
};

window.addEventListener("load", () => {
  syncFeedbackGrid();
  const savedLang = window.localStorage.getItem("joyai-sim-lang") || "en";
  applyLanguage(savedLang);
});

feedbackVideos.forEach((video) => {
  video.addEventListener("loadedmetadata", syncFeedbackGrid, { once: true });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langValue);
  });
});

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const currentLang = document.body.dataset.lang || "en";
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.innerText);
      button.textContent = translations[currentLang]["copy.success"];
    } catch {
      button.textContent = translations[currentLang]["copy.fail"];
    }
    window.setTimeout(() => {
      const latestLang = document.body.dataset.lang || "en";
      button.textContent = translations[latestLang]["copy.default"];
    }, 1600);
  });
});
