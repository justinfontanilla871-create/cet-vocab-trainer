const wordBanks = {
  cet4: [
    ["abandon", "放弃；抛弃", "She decided to abandon the old plan."],
    ["ability", "能力；才能", "Practice improves your ability to listen."],
    ["absolute", "绝对的；完全的", "The rule is not absolute."],
    ["absorb", "吸收；理解", "Good readers absorb ideas quickly."],
    ["academic", "学术的；学院的", "Academic writing needs clear logic."],
    ["access", "接近；使用权", "Students need access to useful tools."],
    ["accident", "事故；意外", "The accident delayed the bus."],
    ["accompany", "陪伴；伴随", "Confidence should accompany preparation."],
    ["accomplish", "完成；实现", "You can accomplish more with a plan."],
    ["accurate", "准确的", "Accurate spelling matters in dictation."],
    ["achieve", "达到；完成", "Small steps help you achieve the goal."],
    ["adapt", "适应；改编", "You need to adapt to a new schedule."],
    ["adequate", "足够的；合格的", "Adequate sleep improves memory."],
    ["advance", "前进；进步", "Your English will advance through review."],
    ["advantage", "优势；有利条件", "A rich vocabulary is an advantage."],
    ["affect", "影响", "Stress can affect exam performance."],
    ["afford", "买得起；承担得起", "Many students cannot afford expensive courses."],
    ["agreement", "协议；一致", "They reached an agreement after discussion."],
    ["alternative", "可替代的；选择", "Online practice is an alternative to paper lists."],
    ["analyze", "分析", "Analyze your mistakes after practice."],
    ["anxiety", "焦虑", "Exam anxiety is common."],
    ["apparent", "明显的", "The answer became apparent later."],
    ["approach", "方法；接近", "Choose a practical approach."],
    ["appropriate", "合适的", "Use appropriate words in writing."],
    ["arrange", "安排；整理", "Arrange your time before the exam."],
    ["assume", "假设；认为", "Do not assume every word is difficult."],
    ["attempt", "尝试；企图", "Make another attempt."],
    ["attitude", "态度", "A calm attitude helps."],
    ["available", "可获得的；有空的", "The material is available online."],
    ["aware", "意识到的", "Be aware of common traps."],
    ["balance", "平衡", "Keep a balance between speed and accuracy."],
    ["benefit", "好处；受益", "Review brings long-term benefit."],
    ["budget", "预算；安排", "Budget your time in the reading section."],
    ["capacity", "能力；容量", "Memory capacity improves with training."],
    ["challenge", "挑战", "Dictation is a useful challenge."],
    ["circumstance", "情况；环境", "Study methods depend on circumstances."],
    ["combine", "结合", "Combine listening with spelling."],
    ["comfort", "安慰；舒适", "Preparation gives comfort."],
    ["comment", "评论；意见", "Leave a comment if you need the link."],
    ["communicate", "交流；传达", "Words help people communicate."],
    ["compare", "比较", "Compare your answer with the correct one."],
    ["compete", "竞争", "Students compete for better scores."],
    ["complex", "复杂的", "Break complex tasks into parts."],
    ["concentrate", "集中注意力", "Concentrate on one word at a time."],
    ["condition", "条件；状况", "Good conditions improve learning."],
    ["confidence", "信心", "Correct answers build confidence."],
    ["confirm", "确认", "Confirm the spelling before submitting."],
    ["conflict", "冲突；矛盾", "There is no conflict between speed and review."],
    ["consider", "考虑", "Consider practicing every day."],
    ["constant", "持续的；不变的", "Constant practice works."],
    ["consumer", "消费者", "Consumers prefer useful products."],
    ["contain", "包含", "This bank contains high-frequency words."],
    ["context", "上下文；背景", "Guess meaning from context."],
    ["contrast", "对比", "Contrast similar words."],
    ["convenient", "方便的", "The website is convenient for review."],
    ["cooperate", "合作", "Students cooperate in study groups."],
    ["create", "创造；创建", "Create your own review routine."],
    ["culture", "文化", "Culture is a common translation topic."],
    ["curious", "好奇的", "Curious learners ask better questions."],
    ["decline", "下降；拒绝", "Scores may decline without review."],
    ["define", "定义", "Define the word in your own language."],
    ["deliver", "递送；发表", "Deliver your ideas clearly."],
    ["demand", "需求；要求", "There is strong demand for exam tools."],
    ["depend", "依靠；取决于", "Success depends on daily action."],
    ["describe", "描述", "Describe the picture in English."],
    ["design", "设计", "The design is simple and focused."],
    ["detail", "细节", "Pay attention to details."],
    ["determine", "决定；确定", "Your habits determine the result."],
    ["develop", "发展；培养", "Develop a review habit."],
    ["device", "设备；装置", "Use any device to practice."],
    ["difference", "差异", "Notice the difference between words."],
    ["difficult", "困难的", "Difficult words need more review."],
    ["direction", "方向；说明", "Read the directions carefully."],
    ["discuss", "讨论", "Discuss the topic with classmates."],
    ["efficient", "高效的", "Efficient review saves time."],
    ["effort", "努力", "Effort matters more than panic."],
    ["emphasize", "强调", "Teachers emphasize basic vocabulary."],
    ["encourage", "鼓励", "Progress will encourage you."],
    ["environment", "环境", "A quiet environment helps listening."],
    ["essential", "必要的；本质的", "Vocabulary is essential."],
    ["evidence", "证据", "Use evidence in an essay."],
    ["exchange", "交换；交流", "Exchange notes with friends."],
    ["expand", "扩大；扩展", "Expand your vocabulary steadily."],
    ["expect", "期待；预计", "Expect mistakes and learn from them."],
    ["experience", "经历；经验", "Experience makes exams less scary."],
    ["explain", "解释", "Explain the meaning aloud."],
    ["express", "表达", "Express your opinion clearly."],
    ["failure", "失败", "Failure is feedback."],
    ["feature", "特征；功能", "The wrong-book feature is useful."],
    ["focus", "集中；焦点", "Focus on high-frequency words first."],
    ["frequent", "频繁的；常见的", "Frequent review prevents forgetting."],
    ["function", "功能；作用", "Each function supports practice."],
    ["generate", "生成；产生", "Generate a check-in text."],
    ["graduate", "毕业；毕业生", "Many graduates remember CET exams."],
    ["habit", "习惯", "A daily habit beats last-minute panic."],
    ["improve", "提高；改善", "Dictation can improve spelling."],
    ["include", "包括", "The list includes common CET words."],
    ["increase", "增加", "Increase the goal slowly."],
    ["individual", "个人；个体的", "Every individual learns differently."],
    ["influence", "影响", "Vocabulary influences reading speed."],
    ["information", "信息", "Find useful information quickly."],
    ["instead", "代替；反而", "Practice instead of only collecting files."],
    ["instruction", "说明；指导", "Follow the instruction on the screen."],
    ["intend", "打算", "I intend to finish fifty words today."],
    ["interest", "兴趣；利益", "Interest keeps learning alive."],
    ["knowledge", "知识", "Knowledge grows through use."],
    ["limit", "限制；限度", "Set a clear time limit."],
    ["manage", "管理；设法做到", "Manage your review plan."],
    ["method", "方法", "This method trains active recall."],
    ["mistake", "错误", "Mistakes enter the wrong book."],
    ["necessary", "必要的", "Review is necessary."],
    ["opportunity", "机会", "This product has an opportunity."],
    ["ordinary", "普通的", "Ordinary days create results."],
    ["perform", "表现；执行", "You will perform better with practice."],
    ["practice", "练习", "Practice makes words familiar."],
    ["pressure", "压力", "Pressure is normal before exams."],
    ["process", "过程", "Learning is a process."],
    ["purpose", "目的", "The purpose is active spelling."],
    ["quality", "质量", "Quality matters more than quantity."],
    ["realize", "意识到；实现", "You may realize your weak words."],
    ["recommend", "推荐", "Recommend the tool to a friend."],
    ["reduce", "减少", "Review reduces anxiety."],
    ["regular", "有规律的；常规的", "Regular practice is powerful."],
    ["relevant", "相关的", "Choose relevant exam words."],
    ["repeat", "重复", "Repeat the word after the audio."],
    ["require", "需要；要求", "The exam requires speed."],
    ["resource", "资源", "A focused resource is easier to use."],
    ["result", "结果", "Your result will appear after submission."],
    ["review", "复习；回顾", "Review wrong words tonight."],
    ["solution", "解决方案", "A simple solution can sell well."],
    ["standard", "标准", "Use standard pronunciation."],
    ["strategy", "策略", "A clear strategy saves time."],
    ["submit", "提交", "Submit your answer."],
    ["support", "支持", "The tool supports local progress."],
    ["target", "目标", "Set a realistic target."],
    ["translate", "翻译", "Translate the sentence into English."],
    ["valuable", "有价值的", "Active recall is valuable."],
    ["various", "各种各样的", "Try various modes."],
    ["weakness", "弱点", "The wrong book shows your weakness."]
  ],
  cet6: [
    ["abstract", "抽象的；摘要", "The article discusses an abstract concept."],
    ["accumulate", "积累", "Words accumulate through daily practice."],
    ["acknowledge", "承认；致谢", "She acknowledged her mistake."],
    ["administration", "管理；行政部门", "The administration announced a new policy."],
    ["advocate", "提倡；拥护者", "Many experts advocate lifelong learning."],
    ["allocate", "分配", "Allocate more time to weak sections."],
    ["ambiguous", "模糊的；有歧义的", "The sentence is ambiguous."],
    ["anticipate", "预期；期待", "Anticipate possible questions."],
    ["approximately", "大约", "The task takes approximately ten minutes."],
    ["argument", "论点；争论", "A strong argument needs evidence."],
    ["assessment", "评估", "Self-assessment improves learning."],
    ["assistance", "帮助；援助", "Students may need assistance."],
    ["authentic", "真实的；可靠的", "Authentic examples are useful."],
    ["authority", "权威；当局", "The authority released a notice."],
    ["barrier", "障碍", "Fear is a common barrier."],
    ["capacity", "容量；能力", "Attention capacity is limited."],
    ["category", "类别", "Put similar words into one category."],
    ["civilization", "文明", "Civilization is a translation topic."],
    ["clarify", "澄清；阐明", "Clarify the meaning before memorizing."],
    ["coherent", "连贯的", "A coherent essay reads smoothly."],
    ["collapse", "倒塌；崩溃", "The plan may collapse without action."],
    ["commitment", "承诺；投入", "Daily practice needs commitment."],
    ["complicated", "复杂的", "Do not make the process complicated."],
    ["comprehensive", "全面的", "A comprehensive review covers all modes."],
    ["conclude", "总结；推断", "Conclude your essay clearly."],
    ["consequence", "后果；结果", "Every choice has consequences."],
    ["considerable", "相当大的", "The method saves considerable time."],
    ["consistent", "一致的；持续的", "Consistent review matters."],
    ["construct", "建造；构建", "Construct a sentence with the word."],
    ["consume", "消耗；消费", "Do not consume too much time collecting files."],
    ["controversial", "有争议的", "The topic is controversial."],
    ["conventional", "传统的；常规的", "Conventional word lists can be boring."],
    ["coordinate", "协调", "Coordinate your study schedule."],
    ["crucial", "关键的", "Spelling is crucial in dictation."],
    ["cultivate", "培养", "Cultivate a habit of review."],
    ["decline", "下降；拒绝", "Attention may decline after midnight."],
    ["demonstrate", "证明；展示", "Demonstrate your understanding."],
    ["derive", "获得；源于", "Meaning can derive from context."],
    ["detect", "发现；察觉", "Detect patterns in your mistakes."],
    ["dimension", "方面；维度", "Vocabulary has many dimensions."],
    ["discipline", "纪律；学科", "Discipline beats panic."],
    ["distinct", "明显不同的", "These words have distinct meanings."],
    ["diverse", "多样的", "Use diverse examples."],
    ["document", "文件；记录", "Document your progress."],
    ["domestic", "国内的；家庭的", "Domestic tourism is often discussed."],
    ["dominant", "占主导的", "The dominant idea is clear."],
    ["efficient", "高效的", "Efficient tools reduce wasted time."],
    ["eliminate", "消除；淘汰", "Eliminate careless mistakes."],
    ["emerge", "出现；显现", "Problems emerge during practice."],
    ["enhance", "提高；增强", "Review can enhance memory."],
    ["equivalent", "等同的；等价物", "Find the Chinese equivalent."],
    ["evaluate", "评价；评估", "Evaluate your accuracy."],
    ["evolution", "演变；进化", "Language evolution never stops."],
    ["exception", "例外", "There are exceptions to the rule."],
    ["excessive", "过度的", "Excessive pressure harms performance."],
    ["explicit", "明确的", "Make your answer explicit."],
    ["facilitate", "促进；使便利", "The website facilitates review."],
    ["foundation", "基础", "Words are the foundation."],
    ["framework", "框架", "A framework makes writing easier."],
    ["fundamental", "基本的；根本的", "Fundamental words appear often."],
    ["generate", "产生；生成", "Generate examples for each word."],
    ["global", "全球的", "Global issues appear in reading."],
    ["hypothesis", "假设", "The hypothesis needs testing."],
    ["identify", "识别；确认", "Identify your weak words."],
    ["implement", "实施；执行", "Implement the plan today."],
    ["implication", "含义；影响", "The implication is worth noticing."],
    ["incentive", "激励；刺激", "A clear goal is an incentive."],
    ["inevitable", "不可避免的", "Some mistakes are inevitable."],
    ["innovation", "创新", "Innovation can happen in small tools."],
    ["insight", "洞察", "Mistakes provide insight."],
    ["integrate", "整合", "Integrate listening and spelling."],
    ["intense", "强烈的；紧张的", "Intense review should stay focused."],
    ["interpret", "解释；理解", "Interpret the sentence from context."],
    ["investigate", "调查；研究", "Investigate why you forgot it."],
    ["mechanism", "机制", "The memory mechanism needs repetition."],
    ["motivation", "动机", "Visible progress builds motivation."],
    ["objective", "目标；客观的", "Set an objective for the day."],
    ["obstacle", "障碍", "The biggest obstacle is delay."],
    ["obtain", "获得", "Obtain feedback immediately."],
    ["phenomenon", "现象", "The phenomenon is common among students."],
    ["potential", "潜力；潜在的", "This product has potential."],
    ["precise", "精确的", "Use precise spelling."],
    ["priority", "优先事项", "High-frequency words are the priority."],
    ["procedure", "程序；步骤", "Follow the procedure."],
    ["proportion", "比例；部分", "A large proportion of errors are spelling errors."],
    ["pursue", "追求", "Pursue progress, not perfection."],
    ["radical", "彻底的；激进的", "A radical change is unnecessary."],
    ["reliable", "可靠的", "Reliable review beats random files."],
    ["represent", "代表；表示", "The word may represent an idea."],
    ["resolve", "解决；决定", "Resolve one weakness today."],
    ["resource", "资源", "The resource should be focused."],
    ["restrict", "限制", "Restrict your daily list to useful words."],
    ["retain", "保持；记住", "Active recall helps retain words."],
    ["reveal", "揭示", "Wrong answers reveal weak memory."],
    ["significant", "重要的；显著的", "The improvement is significant."],
    ["sophisticated", "复杂的；老练的", "Sophisticated words need examples."],
    ["specific", "具体的；特定的", "Use a specific goal."],
    ["stimulate", "刺激；激发", "Challenges stimulate memory."],
    ["substantial", "大量的；实质的", "You can make substantial progress."],
    ["sufficient", "足够的", "Sufficient practice is necessary."],
    ["sustain", "维持；支撑", "Sustain the habit for a week."],
    ["tendency", "趋势；倾向", "You may have a tendency to skip hard words."],
    ["theoretical", "理论的", "Theoretical advice is not enough."],
    ["transform", "转变", "Transform a word list into practice."],
    ["ultimate", "最终的；根本的", "The ultimate goal is passing the exam."],
    ["underestimate", "低估", "Do not underestimate spelling."],
    ["undertake", "承担；从事", "Undertake a short daily challenge."],
    ["valid", "有效的；合理的", "The answer is valid."],
    ["verify", "核实；验证", "Verify the spelling."],
    ["vital", "至关重要的", "Review is vital before the exam."]
  ]
};

if (window.importedWordBanks) {
  Object.assign(wordBanks, window.importedWordBanks);
}

const stateKey = "cet-vocab-trainer-state-v1";
const today = new Date().toISOString().slice(0, 10);
let state = JSON.parse(localStorage.getItem(stateKey) || "{}");
let currentLevel = state.level || (wordBanks.cet4_pdf ? "cet4_pdf" : "cet4");
let currentExam = bankExam(currentLevel);
let currentMode = state.mode || "dictation";
let queue = [];
let current = null;
let answered = false;
let speechToken = 0;
let currentAudio = null;
const audioCache = new Map();
const maxCachedAudio = 48;

const els = {
  examButtons: document.querySelectorAll(".segment[data-exam]"),
  levelSelect: document.querySelector("#levelSelect"),
  modeSelect: document.querySelector("#modeSelect"),
  dailyGoal: document.querySelector("#dailyGoal"),
  todayDone: document.querySelector("#todayDone"),
  accuracy: document.querySelector("#accuracy"),
  wrongCount: document.querySelector("#wrongCount"),
  streak: document.querySelector("#streak"),
  goalLabel: document.querySelector("#goalLabel"),
  progressBar: document.querySelector("#progressBar"),
  questionType: document.querySelector("#questionType"),
  promptText: document.querySelector("#promptText"),
  speakBtn: document.querySelector("#speakBtn"),
  phonetic: document.querySelector("#phonetic"),
  answerForm: document.querySelector("#answerForm"),
  answerInput: document.querySelector("#answerInput"),
  choices: document.querySelector("#choices"),
  feedback: document.querySelector("#feedback"),
  skipBtn: document.querySelector("#skipBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  currentWord: document.querySelector("#currentWord"),
  currentMeaning: document.querySelector("#currentMeaning"),
  currentExample: document.querySelector("#currentExample"),
  wrongbookTitle: document.querySelector("#wrongbookTitle"),
  wrongList: document.querySelector("#wrongList"),
  wordList: document.querySelector("#wordList"),
  searchInput: document.querySelector("#searchInput"),
  practiceWrongBtn: document.querySelector("#practiceWrongBtn"),
  shareBtn: document.querySelector("#shareBtn"),
  shareDialog: document.querySelector("#shareDialog"),
  shareText: document.querySelector("#shareText"),
  copyShareBtn: document.querySelector("#copyShareBtn"),
  closeShareBtn: document.querySelector("#closeShareBtn")
};

const allLevelOptions = [...els.levelSelect.options].map(option => ({
  value: option.value,
  label: option.textContent,
  exam: option.dataset.exam || bankExam(option.value)
}));

function bankExam(level) {
  if (level.startsWith("cet_common")) return "common";
  return level.startsWith("cet6") ? "cet6" : "cet4";
}

function examLabel(exam = currentExam) {
  if (exam === "common") return "通用";
  return exam === "cet6" ? "六级" : "四级";
}

function cleanMeaning(value) {
  return String(value || "").replace(/\s*·\s*考频\d+次\s*$/, "");
}

function levelLabel(level = currentLevel) {
  const option = allLevelOptions.find(item => item.value === level);
  return option ? option.label.replace(/^PDF\s*/, "") : level;
}

function reviewText(wordItem = current, isCorrect = false) {
  if (!wordItem) return "完成一次作答后显示音标、词库和错词状态。";
  const previousWrong = state.wrong[wordItem.word]?.count || 0;
  const wrongText = isCorrect
    ? "本次答对，未加入错词本"
    : `已加入错词本${previousWrong ? `，累计错 ${previousWrong} 次` : ""}`;
  const phoneticText = wordItem.phonetic ? `音标：[${wordItem.phonetic}]` : "音标：暂无";
  return `${phoneticText} · 词库：${levelLabel(wordItem.level)} · ${wrongText}`;
}

function examWrongWords() {
  return Object.values(state.wrong).filter(item => bankExam(item.level || currentLevel) === currentExam);
}

function preferredLevel(exam) {
  if (exam === "cet6") return wordBanks.cet6_pdf ? "cet6_pdf" : "cet6_1000";
  if (exam === "common") return wordBanks.cet_common_200 ? "cet_common_200" : "cet_common_core_scan";
  return wordBanks.cet4_pdf ? "cet4_pdf" : "cet4_700";
}

function renderLevelOptions() {
  els.levelSelect.innerHTML = "";
  allLevelOptions
    .filter(option => option.exam === currentExam && wordBanks[option.value])
    .forEach(option => {
      const node = document.createElement("option");
      node.value = option.value;
      node.textContent = option.label;
      node.dataset.exam = option.exam;
      els.levelSelect.appendChild(node);
    });

  if (!wordBanks[currentLevel] || bankExam(currentLevel) !== currentExam) {
    currentLevel = preferredLevel(currentExam);
  }
  els.levelSelect.value = currentLevel;
  els.examButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.exam === currentExam);
  });
  els.wrongbookTitle.textContent = `${examLabel()}错词本`;
}

function initState() {
  state = {
    level: currentLevel,
    exam: currentExam,
    mode: currentMode,
    dailyGoal: state.dailyGoal || 50,
    wrong: state.wrong || {},
    stats: state.stats || {},
    streak: state.streak || 0,
    lastStudyDate: state.lastStudyDate || ""
  };
  if (!state.stats[today]) {
    state.stats[today] = { done: 0, correct: 0, total: 0 };
  }
  if (state.lastStudyDate && state.lastStudyDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = state.lastStudyDate === yesterday ? state.streak : 0;
  }
  save();
}

function save() {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function bank() {
  return wordBanks[currentLevel].map(([word, meaning, example, phonetic]) => ({ word, meaning, example, phonetic, level: currentLevel }));
}

function resetQueue(source = bank()) {
  queue = shuffle(source);
}

function normalize(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function audioPath(word) {
  return `audio/${encodeURIComponent(word.toLowerCase())}.wav`;
}

function audioKey(word) {
  return word.toLowerCase();
}

function getCachedAudio(word) {
  const key = audioKey(word);
  if (audioCache.has(key)) {
    const cached = audioCache.get(key);
    audioCache.delete(key);
    audioCache.set(key, cached);
    return cached;
  }
  const audio = new Audio(audioPath(word));
  audio.preload = "auto";
  audioCache.set(key, audio);
  if (audioCache.size > maxCachedAudio) {
    const oldestKey = audioCache.keys().next().value;
    const oldest = audioCache.get(oldestKey);
    if (oldest && oldest !== currentAudio) {
      oldest.pause();
      oldest.removeAttribute("src");
      oldest.load();
    }
    audioCache.delete(oldestKey);
  }
  return audio;
}

function preloadAudio(word) {
  if (!word) return;
  const audio = getCachedAudio(word);
  if (audio.readyState === 0) {
    try {
      audio.load();
    } catch (error) {
      // Some mobile browsers ignore programmatic preload; playback still works on touch.
    }
  }
}

function stopSpeech() {
  speechToken += 1;
  if (currentAudio) {
    currentAudio.pause();
    try {
      currentAudio.currentTime = 0;
    } catch (error) {
      // The audio may not have metadata yet; safe to ignore before the next play.
    }
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function speak(word) {
  stopSpeech();
  const token = speechToken;
  currentAudio = getCachedAudio(word);
  try {
    currentAudio.currentTime = 0;
  } catch (error) {
    // Metadata can still be loading on mobile; play() will start from the beginning.
  }
  const playPromise = currentAudio.play();
  if (!playPromise) return;
  playPromise.catch(() => {
    if (token !== speechToken) return;
    if (!("speechSynthesis" in window)) {
      els.feedback.textContent = "当前浏览器不能直接朗读，请用手机系统浏览器打开，或确认 audio 文件已生成。";
      els.feedback.className = "feedback bad";
      return;
    }
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.86;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  });
}

function bindSpeakButton(button, wordGetter) {
  let spokeOnPointer = 0;
  const play = event => {
    const word = wordGetter();
    if (!word) return;
    if (event.type === "click" && Date.now() - spokeOnPointer < 700) return;
    if ((event.type === "pointerdown" || event.type === "touchstart") && Date.now() - spokeOnPointer < 120) return;
    if (event.type === "pointerdown" || event.type === "touchstart") {
      spokeOnPointer = Date.now();
    }
    speak(word);
  };
  button.addEventListener("pointerdown", play);
  button.addEventListener("touchstart", play, { passive: true });
  button.addEventListener("click", play);
}

function nextWord(options = {}) {
  const shouldFocusInput = Boolean(options.focusInput);
  if (queue.length === 0) resetQueue();
  current = queue.shift();
  answered = false;
  preloadAudio(current.word);
  queue.slice(0, 2).forEach(item => preloadAudio(item.word));
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.currentWord.textContent = "-";
  els.currentMeaning.textContent = "-";
  els.currentExample.textContent = "完成一次作答后显示音标、词库和错词状态。";
  els.answerInput.value = "";
  els.choices.innerHTML = "";

  if (currentMode === "dictation") {
    els.questionType.textContent = "听音默写";
    els.promptText.textContent = "听发音，默写英文";
    els.phonetic.textContent = current.phonetic ? `[${current.phonetic}]` : "点击播放，听完后输入英文单词";
    els.answerForm.hidden = false;
    els.choices.hidden = true;
    els.answerInput.placeholder = "输入英文单词";
  } else if (currentMode === "cn2en") {
    els.questionType.textContent = "看中文默写";
    els.promptText.textContent = current.meaning;
    els.phonetic.textContent = current.phonetic ? `[${current.phonetic}]` : "根据中文释义输入英文单词";
    els.answerForm.hidden = false;
    els.choices.hidden = true;
    els.answerInput.placeholder = "输入英文单词";
  } else {
    els.questionType.textContent = "看英文选义";
    els.promptText.textContent = current.word;
    els.phonetic.textContent = current.phonetic ? `[${current.phonetic}]` : "选择最接近的中文释义";
    els.answerForm.hidden = true;
    els.choices.hidden = false;
    renderChoices();
  }
  if (shouldFocusInput && (currentMode === "dictation" || currentMode === "cn2en")) {
    els.answerInput.focus();
  } else {
    els.answerInput.blur();
  }
}

function renderChoices() {
  const distractors = shuffle(bank().filter(item => item.word !== current.word)).slice(0, 3);
  const choices = shuffle([current, ...distractors]);
  choices.forEach(item => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = item.meaning;
    button.addEventListener("click", () => checkChoice(button, item.word === current.word));
    els.choices.appendChild(button);
  });
}

function showAnswer(isCorrect) {
  answered = true;
  const stats = state.stats[today];
  stats.total += 1;
  stats.done += 1;
  if (isCorrect) {
    stats.correct += 1;
    delete state.wrong[current.word];
  } else {
    state.wrong[current.word] = {
      word: current.word,
      meaning: cleanMeaning(current.meaning),
      example: current.example,
      level: current.level,
      count: (state.wrong[current.word]?.count || 0) + 1
    };
  }
  if (state.lastStudyDate !== today) {
    state.streak += 1;
    state.lastStudyDate = today;
  }
  els.feedback.textContent = isCorrect
    ? `答对了：${current.word}`
    : `答案是：${current.word} = ${cleanMeaning(current.meaning)}（已加入错词本）`;
  els.feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
  els.currentWord.textContent = current.word;
  els.currentMeaning.textContent = cleanMeaning(current.meaning);
  els.currentExample.textContent = reviewText(current, isCorrect);
  save();
  updateStats();
  renderWrongList();
}

function checkAnswer(value) {
  if (answered) return;
  showAnswer(normalize(value) === normalize(current.word));
}

function checkChoice(button, isCorrect) {
  if (answered) return;
  [...els.choices.children].forEach(child => {
    const shouldMark = child.textContent === current.meaning;
    child.classList.toggle("correct", shouldMark);
  });
  if (!isCorrect) button.classList.add("wrong");
  showAnswer(isCorrect);
}

function updateStats() {
  const stats = state.stats[today];
  const goal = Number(state.dailyGoal) || 50;
  const wrongCount = examWrongWords().length;
  const accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  els.todayDone.textContent = stats.done;
  els.accuracy.textContent = `${accuracy}%`;
  els.wrongCount.textContent = wrongCount;
  els.streak.textContent = state.streak;
  els.goalLabel.textContent = `${stats.done}/${goal}`;
  els.progressBar.style.width = `${Math.min(100, Math.round((stats.done / goal) * 100))}%`;
}

function renderWordList() {
  const query = normalize(els.searchInput.value || "");
  els.wordList.innerHTML = "";
  const items = bank().filter(item => !query || normalize(item.word).includes(query) || cleanMeaning(item.meaning).includes(query));
  items.forEach(item => els.wordList.appendChild(wordRow(item)));
  items.slice(0, 12).forEach(item => preloadAudio(item.word));
}

function renderWrongList() {
  els.wrongList.innerHTML = "";
  const wrongWords = examWrongWords();
  if (wrongWords.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = `${examLabel()}还没有错词。先去默写几轮，系统会自动记录。`;
    els.wrongList.appendChild(empty);
    return;
  }
  wrongWords
    .sort((a, b) => b.count - a.count)
    .forEach(item => els.wrongList.appendChild(wordRow(item, `错 ${item.count} 次`)));
}

function wordRow(item, meta = "") {
  const row = document.createElement("div");
  row.className = "word-row";
  const word = document.createElement("strong");
  word.textContent = item.word;
  const meaning = document.createElement("span");
  const displayMeaning = cleanMeaning(item.meaning);
  meaning.textContent = meta ? `${displayMeaning} · ${meta}` : displayMeaning;
  const button = document.createElement("button");
  button.className = "mini-btn";
  button.type = "button";
  button.title = "播放发音";
  button.textContent = "▶";
  bindSpeakButton(button, () => item.word);
  row.append(word, meaning, button);
  return row;
}

function switchView(view) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.view === view));
  document.querySelectorAll(".view").forEach(panel => panel.classList.toggle("active", panel.id === `${view}View`));
}

function generateShareText() {
  const stats = state.stats[today];
  const goal = Number(state.dailyGoal) || 50;
  const accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  return `四六级高频词默写打卡\n今日完成：${stats.done}/${goal} 个\n正确率：${accuracy}%\n错词数：${Object.keys(state.wrong).length}\n\n听音默写比只看词表更扎实，明天继续。`;
}

function selectShareText() {
  els.shareText.removeAttribute("readonly");
  els.shareText.focus();
  els.shareText.select();
  els.shareText.setSelectionRange(0, els.shareText.value.length);
  els.shareText.setAttribute("readonly", "readonly");
}

async function copyShareText() {
  const text = els.shareText.value;
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  selectShareText();
  return document.execCommand("copy");
}

function setCopyButtonText(text, delay = 1400) {
  els.copyShareBtn.textContent = text;
  window.clearTimeout(els.copyShareBtnResetTimer);
  els.copyShareBtnResetTimer = window.setTimeout(() => {
    els.copyShareBtn.textContent = "复制";
  }, delay);
}

initState();
renderLevelOptions();
els.modeSelect.value = currentMode;
els.dailyGoal.value = state.dailyGoal;
resetQueue();
nextWord();
updateStats();
renderWordList();
renderWrongList();

els.examButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentExam = button.dataset.exam;
    currentLevel = preferredLevel(currentExam);
    state.exam = currentExam;
    state.level = currentLevel;
    renderLevelOptions();
    resetQueue();
    nextWord({ focusInput: false });
    renderWordList();
    renderWrongList();
    updateStats();
    save();
  });
});

els.levelSelect.addEventListener("change", event => {
  currentLevel = event.target.value;
  currentExam = bankExam(currentLevel);
  state.exam = currentExam;
  state.level = currentLevel;
  renderLevelOptions();
  resetQueue();
  nextWord({ focusInput: false });
  renderWordList();
  renderWrongList();
  updateStats();
  save();
});

els.modeSelect.addEventListener("change", event => {
  currentMode = event.target.value;
  state.mode = currentMode;
  nextWord({ focusInput: false });
  save();
});

els.dailyGoal.addEventListener("change", event => {
  state.dailyGoal = Math.max(5, Math.min(200, Number(event.target.value) || 50));
  event.target.value = state.dailyGoal;
  save();
  updateStats();
});

els.answerForm.addEventListener("submit", event => {
  event.preventDefault();
  checkAnswer(els.answerInput.value);
});

bindSpeakButton(els.speakBtn, () => current && current.word);
els.skipBtn.addEventListener("click", () => {
  if (!answered) showAnswer(false);
});
els.nextBtn.addEventListener("click", () => {
  nextWord({ focusInput: true });
  if (currentMode === "dictation" || currentMode === "en2cn") {
    speak(current.word);
  }
});
els.searchInput.addEventListener("input", renderWordList);
els.practiceWrongBtn.addEventListener("click", () => {
  const wrongWords = examWrongWords();
  if (wrongWords.length === 0) return;
  currentLevel = wrongWords[0].level || preferredLevel(currentExam);
  state.exam = currentExam;
  state.level = currentLevel;
  renderLevelOptions();
  queue = shuffle(wrongWords);
  switchView("practice");
  nextWord({ focusInput: false });
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

els.shareBtn.addEventListener("click", () => {
  els.shareText.value = generateShareText();
  els.shareDialog.showModal();
});

els.closeShareBtn.addEventListener("click", () => els.shareDialog.close());
els.copyShareBtn.addEventListener("click", async () => {
  try {
    const copied = await copyShareText();
    setCopyButtonText(copied ? "已复制" : "已选中，长按复制", copied ? 1400 : 2400);
  } catch (error) {
    selectShareText();
    setCopyButtonText("已选中，长按复制", 2400);
  }
});
