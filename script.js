// hi hacker, obviously when we publish it the lemmas will be on sql lol

function isTalysh(text) {
  return /[əçşğöüı]/i.test(text);
}

const dictionary = {
  en: {
    "water": { canonical: "water", pronunciation: "/ˈwɔː.tər/", topic: "nature", forms: ["water"], senses: [{ pos: "noun", definition: "clear liquid essential for life", translation: "ow", examples: [{ en: "Drink clean water.", tly: "Saf ow bixor." }, { en: "The well has fresh water.", tly: "Çeşmədə təzə ow he." }], derivatives: [{ word: "water bottle", translation: "ow qabı" }], grammar: { plural: "water" } }] },
    "go": { canonical: "go", pronunciation: "/ɡoʊ/", topic: "action", forms: ["go", "goes", "went", "gone", "going"], senses: [{ pos: "verb", definition: "move from one place to another", translation: "çə", examples: [{ en: "I go to school.", tly: "Mən məktəbə çəm." }, { en: "He went to the market.", tly: "Əl bazarə çə." }], derivatives: [{ word: "goer", translation: "çəyən" }], grammar: { past: "çə", present: "çəm/çəs/çə", future: "çəyəm" } }] },
    "good": { canonical: "good", pronunciation: "/ɡʊd/", topic: "evaluation", senses: [{ pos: "adjective", definition: "of high quality or desirable", translation: "xub", examples: [{ en: "This is good food.", tly: "Ə çəmən xub he." }, { en: "She is a good person.", tly: "Ə xub şəxs he." }], derivatives: [{ word: "goodness", translation: "xubiyət" }], grammar: { comparative: "behtar", superlative: "ən behtar" } }] },
    "thank you": { canonical: "thank you", pronunciation: "/θæŋk juː/", topic: "social", senses: [{ pos: "fixed expression", definition: "expression of gratitude", translation: "məmnunəm", examples: [{ en: "Thank you for your help.", tly: "Köməyət üçün məmnunəm." }, { en: "Say thank you!", tly: "Məmnunəm bəgə!" }], derivatives: [], grammar: {} }] },
    "house": { canonical: "house", pronunciation: "/haʊs/", topic: "housing", forms: ["house", "houses"], senses: [{ pos: "noun", definition: "building for living", translation: "xanə", examples: [{ en: "My house is big.", tly: "Mənə xanəm qılə he." }, { en: "They built a new house.", tly: "Yəni xanə bənədən." }], derivatives: [{ word: "household", translation: "xanədar" }], grammar: { plural: "xanəyən" } }] },
    "eat": { canonical: "eat", pronunciation: "/iːt/", topic: "food", forms: ["eat", "eats", "ate", "eaten", "eating"], senses: [{ pos: "verb", definition: "consume food", translation: "xordən", examples: [{ en: "We eat rice.", tly: "Əmən birinç xordən." }, { en: "He ate bread.", tly: "Nən çörək xord." }], derivatives: [{ word: "eater", translation: "xordən" }], grammar: { past: "xord", present: "xordəm/xordəs/xordə", future: "xordəyəm" } }] },
    "big": { canonical: "big", pronunciation: "/bɪɡ/", topic: "size", senses: [{ pos: "adjective", definition: "of considerable size", translation: "qılə", examples: [{ en: "A big tree.", tly: "Qılə dərəxt." }, { en: "The city is big.", tly: "Şəhər qılə he." }], derivatives: [{ word: "bigness", translation: "qıləlik" }], grammar: { comparative: "qılətər", superlative: "ən qılə" } }] },
    "hello": { canonical: "hello", pronunciation: "/həˈloʊ/", topic: "social", senses: [{ pos: "fixed expression", definition: "greeting", translation: "salam", examples: [{ en: "Hello, how are you?", tly: "Salam, çi xəbər?" }, { en: "Say hello to her.", tly: "Ələ salam bəgə." }], derivatives: [], grammar: {} }] },
    "book": { canonical: "book", pronunciation: "/bʊk/", topic: "education", forms: ["book", "books"], senses: [{ pos: "noun", definition: "collection of written pages", translation: "kitob", examples: [{ en: "Read this book.", tly: "Ə kitobə xəndə." }, { en: "I have many books.", tly: "Məndə çənd kitob he." }], derivatives: [{ word: "notebook", translation: "dəftər" }], grammar: { plural: "kitobən" } }] },
    "fire": { canonical: "fire", pronunciation: "/faɪər/", forms: ["fire", "fires", "fired", "firing"], senses: [{ pos: "noun", topic: "nature", definition: "burning material that produces heat and light", translation: "ot", examples: [{ en: "Be careful with the fire.", tly: "Otə dəqət bəgə." }, { en: "The fire is warm.", tly: "Ot isti he." }], derivatives: [{ word: "campfire", translation: "otaq ot" }], grammar: { plural: "otən" } }, { pos: "verb", topic: "employment", definition: "dismiss someone from a job", translation: "işdən çıxardən", examples: [{ en: "They fired him for being late.", tly: "Gec qalədə işdən çıxardən." }, { en: "She was fired last week.", tly: "Ə həftəyən qılə işdən çıxardə bə." }], derivatives: [{ word: "firing", translation: "işdən çıxarəş" }], grammar: { past: "fired", pastParticiple: "fired", presentParticiple: "firing", thirdPerson: "fires" } }] }
  },
  tly: {
    "ow": { canonical: "ow", pronunciation: "/ow/", topic: "nature", cefr: "A1", forms: ["ow", "owi", "owə"], senses: [{ pos: "noun", definition: "clear liquid essential for life", translation: "water", examples: [{ en: "Water is life.", tly: "Ow həyat he." }, { en: "Give me water.", tly: "Mənə ow bəgə." }], derivatives: [{ word: "ow qabı", translation: "water bottle" }], grammar: { accusative: "owi", plural: "owə" } }] },
    "çə": { canonical: "çə", pronunciation: "/tʃə/", topic: "action", cefr: "A1", forms: ["çə", "çəm", "çəs", "çəyəm"], senses: [{ pos: "verb", definition: "move from one place to another", translation: "go", examples: [{ en: "Go home!", tly: "Xanəyə çə!" }, { en: "I will go tomorrow.", tly: "Fərdə çəyəm." }], derivatives: [{ word: "çəyən", translation: "goer" }], grammar: { firstPerson: "çəm", secondPerson: "çəs", thirdPerson: "çə", future: "çəyəm" } }] },
    "xub": { canonical: "xub", pronunciation: "/xub/", topic: "evaluation", cefr: "A1", senses: [{ pos: "adjective", definition: "of high quality or desirable", translation: "good", examples: [{ en: "Good morning!", tly: "Səbəh xub!" }, { en: "This is good.", tly: "Ə xub he." }], derivatives: [{ word: "xubiyət", translation: "goodness" }], grammar: { comparative: "behtar", superlative: "ən behtar" } }] },
    "məmnunəm": { canonical: "məmnunəm", pronunciation: "/məmnunəm/", topic: "social", cefr: "A1", senses: [{ pos: "fixed expression", definition: "expression of gratitude", translation: "thank you", examples: [{ en: "Thank you very much.", tly: "Çənd məmnunəm." }, { en: "You're welcome.", tly: "Xoş gəlmişsiniz." }], derivatives: [], grammar: {} }] },
    "xanə": { canonical: "xanə", pronunciation: "/xanə/", topic: "housing", cefr: "A1", forms: ["xanə", "xanəyə", "xanəyən"], senses: [{ pos: "noun", definition: "building for living", translation: "house", examples: [{ en: "My house is here.", tly: "Mənə xanəm inə he." }, { en: "Build a house.", tly: "Xanə bənə." }], derivatives: [{ word: "xanədar", translation: "household" }], grammar: { dative: "xanəyə", plural: "xanəyən" } }] },
    "xordən": { canonical: "xordən", pronunciation: "/xordən/", topic: "food", cefr: "A1", forms: ["xordən", "xord", "xordəm", "xordəyəm"], senses: [{ pos: "verb", definition: "consume food", translation: "eat", examples: [{ en: "Eat your food.", tly: "Çəmənə xordə." }, { en: "I ate bread.", tly: "Mən çörək xord." }], derivatives: [{ word: "xordən", translation: "eater" }], grammar: { past: "xord", firstPerson: "xordəm", future: "xordəyəm" } }] },
    "qılə": { canonical: "qılə", pronunciation: "/qɪlə/", topic: "size", cefr: "A1", senses: [{ pos: "adjective", definition: "of considerable size", translation: "big", examples: [{ en: "Big mountain.", tly: "Qılə kuh." }, { en: "She is big.", tly: "Ə qılə he." }], derivatives: [{ word: "qıləlik", translation: "bigness" }], grammar: { comparative: "qılətər", superlative: "ən qılə" } }] },
    "salam": { canonical: "salam", pronunciation: "/salam/", topic: "social", cefr: "A1", senses: [{ pos: "fixed expression", definition: "greeting", translation: "hello", examples: [{ en: "Hello, friend!", tly: "Salam, dost!" }, { en: "Say hello.", tly: "Salam bəgə." }], derivatives: [], grammar: {} }] },
    "kitob": { canonical: "kitob", pronunciation: "/kitob/", topic: "education", cefr: "A1", forms: ["kitob", "kitobə", "kitobən"], senses: [{ pos: "noun", definition: "collection of written pages", translation: "book", examples: [{ en: "This book is interesting.", tly: "Ə kitob maraqlı he." }, { en: "I read a book.", tly: "Mən kitob xəndəm." }], derivatives: [{ word: "dəftər", translation: "notebook" }], grammar: { accusative: "kitobə", plural: "kitobən" } }] },
    "ot": { canonical: "ot", pronunciation: "/ot/", topic: "nature", cefr: "A2", forms: ["ot", "oti", "otən"], senses: [{ pos: "noun", definition: "burning material that produces heat and light", translation: "fire", examples: [{ en: "The fire is out.", tly: "Ot sönd." }, { en: "Make a fire.", tly: "Ot bənə." }], derivatives: [{ word: "otaq ot", translation: "campfire" }], grammar: { accusative: "oti", plural: "otən" } }] }
  }
};

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const directionBtns = document.querySelectorAll('.direction-btn');
const randomBtn = document.getElementById('randomBtn');
const exerciseBtn = document.getElementById('exerciseBtn');
const filterModal = document.getElementById('filterModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const exerciseModal = document.getElementById('exerciseModal');
const closeExerciseModal = document.getElementById('closeExerciseModal');
const virtualKeyboard = document.getElementById('virtualKeyboard');
const keyboardToggleBtn = document.getElementById('keyboardToggleBtn');
let currentDirection = 'en-tly';

function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function handleTranslationClick(translationWord) {
  const newDirection = currentDirection === 'en-tly' ? 'tly-en' : 'en-tly';
  directionBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.direction === newDirection));
  currentDirection = newDirection;
  searchInput.value = translationWord.trim();
  showResult(translationWord.trim(), newDirection);
  resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showResult(lemma, forcedDirection = null) {
  const direction = forcedDirection || currentDirection;
  const q = lemma.toLowerCase().trim();

  const dict = direction === 'en-tly' ? dictionary.en : dictionary.tly;
  let entry = dict[q];

  if (entry) {
    resultsContainer.innerHTML = renderEntry(q, entry, direction);
    attachEventListeners();
    return;
  }

  for (let word in dict) {
    if (dict[word].forms?.map(f => f.toLowerCase()).includes(q)) {
      resultsContainer.innerHTML = renderEntry(word, dict[word], direction);
      attachEventListeners();
      return;
    }
  }

  const examples = [];
  for (let word in dict) {
    const entry = dict[word];
    (entry.senses || []).forEach(sense => {
      sense.examples.forEach(ex => {
        const text = direction === 'en-tly' ? ex.en : ex.tly;
        if (text.toLowerCase().includes(q)) {
          examples.push({ lemma: word, exampleText: ex[direction === 'en-tly' ? 'en' : 'tly'], translationText: ex[direction === 'en-tly' ? 'tly' : 'en'] });
        }
      });
    });
  }

  if (examples.length) {
    const html = examples.map(i => `
      <div class="example-match-item">
        <div class="example-original">${escapeHtml(i.exampleText).replace(new RegExp(`(${escapeHtml(q)})`, 'gi'), '<span class="lemma-highlight">$1</span>')}</div>
        <div class="example-translation">${escapeHtml(i.translationText)}</div>
        <button class="goto-lemma-btn" data-word="${i.lemma}">View "${i.lemma}"</button>
      </div>`).join('');
    resultsContainer.innerHTML = `<div class="no-result"><p>No direct entry, but found in examples:</p><div class="examples-in-context">${html}</div></div>`;
    attachExampleMatchListeners();
  } else {
    resultsContainer.innerHTML = `<div class="no-result">No entry found for "${escapeHtml(lemma)}"</div>`;
  }
}

function renderEntry(lemma, entry, direction) {
  let sensesHtml = '';

  const renderSense = (sense, index = 0) => {
    const examplesHtml = (sense.examples || []).map(ex => `
      <li class="example-item">
        <span class="example-original">${escapeHtml(ex.en)}</span>
        <span class="example-translation">${escapeHtml(ex.tly)}</span>
      </li>`).join('');

    let grammarHtml = '';
    if (sense.grammar && Object.keys(sense.grammar).length) {
      grammarHtml = `<ul class="grammar-list">`;
      for (let k in sense.grammar) grammarHtml += `<li class="grammar-item"><span class="grammar-label">${k}:</span> ${escapeHtml(sense.grammar[k])}</li>`;
      grammarHtml += `</ul>`;
    }

    const derivativesHtml = (sense.derivatives || []).map(d => {
      const has = hasLemma(d.word, direction);
      return `<div class="derivative-item">
        <span class="${has ? 'derivative-word linkable' : 'derivative-word'}" ${has ? `data-word="${d.word}"`.replace(/"/g, '&quot;') : ''}>${escapeHtml(d.word)}</span>
        <div class="derivative-translation">${escapeHtml(d.translation)}</div>
      </div>`;
    }).join('');

    const pos = sense.pos || entry.pos;
    const topic = sense.topic || entry.topic;
    let tags = '';
    if (pos) tags += `<button class="pos" onclick="showFilterList('pos','${pos}')">${pos}</button>`;
    if (topic) tags += `<button class="topic-tag" onclick="showFilterList('topic','${topic}')">${topic}</button>`;

    const number = entry.senses?.length > 1 ? `<span class="sense-number">${index + 1}.</span>` : '';
    const def = entry.senses?.length > 1 ? `<span class="sense-definition">${escapeHtml(sense.definition)}</span>` : '';

    return `
      <div class="sense-item">
        <div class="tags-container">${tags}</div>
        ${number}${def}
        <div class="translation" data-translation="${escapeHtml(sense.translation)}">${escapeHtml(sense.translation)}</div>
        <div class="section-title">Examples</div>
        <ul class="examples-list">${examplesHtml}</ul>
        <div class="section-title">Grammar</div>${grammarHtml}
        <div class="section-title">Derivatives</div>
        <div class="derivatives-list">${derivativesHtml}</div>
      </div>`;
  };

  if (entry.senses && entry.senses.length > 1) {
    sensesHtml = entry.senses.map((s, i) => renderSense(s, i)).join('');
  } else {
    const sense = entry.senses ? entry.senses[0] : entry;
    sensesHtml = renderSense(sense);
  }

  let cefrHtml = '';
  if (entry.cefr && currentDirection === 'tly-en') {
    cefrHtml = `<div class="tags-container" style="position:absolute;right:0;top:0;"><button class="level-tag" onclick="showFilterList('cefr','${entry.cefr}')">${entry.cefr.toUpperCase()}</button></div>`;
  }

  return `<div class="entry" style="position:relative;">
    ${cefrHtml}
    <div class="headword">${escapeHtml(entry.canonical)}</div>
    <div class="pronunciation">${escapeHtml(entry.pronunciation)}</div>
    ${sensesHtml}
  </div>`;
}

function attachEventListeners() {
  resultsContainer.querySelectorAll('.translation').forEach(el => {
    el.onclick = () => handleTranslationClick(el.getAttribute('data-translation') || el.textContent.trim());
  });

  resultsContainer.querySelectorAll('.derivative-word.linkable').forEach(el => {
    el.onclick = () => {
      const word = el.dataset.word;
      searchInput.value = word;
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  });
}

function attachExampleMatchListeners() {
  resultsContainer.querySelectorAll('.goto-lemma-btn').forEach(btn => {
    btn.onclick = () => {
      const word = btn.dataset.word;
      searchInput.value = word;
      showResult(word);
    };
  });
}

function getRandomWord() {
  const dict = currentDirection === 'en-tly' ? dictionary.en : dictionary.tly;
  const words = Object.keys(dict);
  return words[Math.floor(Math.random() * words.length)];
}

function hasLemma(word, direction) {
  const dict = direction === 'en-tly' ? dictionary.en : dictionary.tly;
  return !!dict[word.toLowerCase()];
}

function showFilterList(type, value) {
  filterModal.style.display = 'block';
  modalTitle.textContent = value.toUpperCase();
  const dict = currentDirection === 'en-tly' ? dictionary.en : dictionary.tly;
  const list = Object.keys(dict).filter(w => {
    const e = dict[w];
    if (type === 'pos') return (e.senses?.some(s => s.pos === value)) || e.pos === value;
    if (type === 'topic') return (e.senses?.some(s => s.topic === value)) || e.topic === value;
    if (type === 'cefr') return e.cefr === value;
  }).sort();
  modalBody.innerHTML = '<ul class="filter-word-list">' + list.map(w => `<li class="filter-word-item" data-word="${w}">${w}</li>`).join('') + '</ul>';
  modalBody.querySelectorAll('.filter-word-item').forEach(item => {
    item.onclick = () => {
      searchInput.value = item.dataset.word;
      showResult(item.dataset.word);
      filterModal.style.display = 'none';
    };
  });
}

function generateExercise() {
  const dict = currentDirection === 'en-tly' ? dictionary.en : dictionary.tly;
  const words = Object.keys(dict);
  const correctKey = words[Math.floor(Math.random() * words.length)];
  const entry = dict[correctKey];
  const sense = entry.senses ? entry.senses[0] : entry;
  const question = currentDirection === 'en-tly' ? sense.translation : correctKey;
  const correct = currentDirection === 'en-tly' ? correctKey : sense.translation;

  const wrongs = [];
  while (wrongs.length < 3) {
    const k = words[Math.floor(Math.random() * words.length)];
    if (k === correctKey) continue;
    const s = dict[k].senses ? dict[k].senses[0] : dict[k];
    const opt = currentDirection === 'en-tly' ? k : s.translation;
    if (!wrongs.includes(opt)) wrongs.push(opt);
  }

  const options = [correct, ...wrongs].sort(() => Math.random() - 0.5);
  const optsHtml = options.map(o => `<div class="answer-option">${escapeHtml(o)}</div>`).join('');

  exerciseModal.querySelector('.modal-body').innerHTML = `
    <div class="exercise-question">What is the ${currentDirection === 'en-tly' ? 'English' : 'Talysh'} word for: "${escapeHtml(question)}"?</div>
    <div class="answer-options">${optsHtml}</div>
    <div class="exercise-feedback" style="display:none;"></div>
    <div class="exercise-buttons">
      <button class="exercise-btn-modal next-btn">Next Question</button>
      <button class="exercise-btn-modal close-btn">Close</button>
    </div>`;

  exerciseModal.style.display = 'block';

  exerciseModal.querySelectorAll('.answer-option').forEach(opt => {
    opt.onclick = function () {
      exerciseModal.querySelectorAll('.answer-option').forEach(o => o.classList.remove('selected', 'correct', 'incorrect'));
      this.classList.add('selected');
      const ok = this.textContent.trim() === correct;
      this.classList.add(ok ? 'correct' : 'incorrect');
      if (!ok) exerciseModal.querySelectorAll('.answer-option').forEach(o => { if (o.textContent.trim() === correct) o.classList.add('correct'); });
      const fb = exerciseModal.querySelector('.exercise-feedback');
      fb.style.display = 'block';
      fb.innerHTML = ok ? '<h4>Correct!</h4><p>Well done!</p>' : `<h4>Incorrect</h4><p>The correct answer is: <strong>${escapeHtml(correct)}</strong></p>`;
      exerciseModal.querySelector('.next-btn').onclick = generateExercise;
      exerciseModal.querySelector('.close-btn').onclick = () => exerciseModal.style.display = 'none';
    };
  });
}

directionBtns.forEach(btn => btn.addEventListener('click', () => {
  directionBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentDirection = btn.dataset.direction;
  searchInput.value = '';
  resultsContainer.innerHTML = `<div class="about-section"><div class="section-title">About</div><p class="about-content">bla blabla bla</p></div>`;
}));

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim();
  q ? showResult(q) : resultsContainer.innerHTML = `<div class="about-section"><div class="section-title">About</div><p class="about-content">bla blabla bla</p></div>`;
});

randomBtn.addEventListener('click', () => { const w = getRandomWord(); searchInput.value = w; showResult(w); });
exerciseBtn.addEventListener('click', generateExercise);

keyboardToggleBtn.addEventListener('click', () => {
  const hidden = virtualKeyboard.style.display === 'none' || !virtualKeyboard.style.display;
  virtualKeyboard.style.display = hidden ? 'block' : 'none';
  keyboardToggleBtn.textContent = hidden ? 'Hide Keyboard' : 'Show Keyboard';
});

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const action = key.dataset.action;
    const ch = key.textContent.trim();
    key.classList.add('key-active');
    setTimeout(() => key.classList.remove('key-active'), 150);
    if (action === 'backspace') searchInput.value = searchInput.value.slice(0, -1);
    else if (action === 'space') searchInput.value += ' ';
    else if (ch) searchInput.value += ch;
    searchInput.focus();
    searchInput.dispatchEvent(new Event('input'));
  });
});

closeModal.onclick = () => filterModal.style.display = 'none';
closeExerciseModal.onclick = () => exerciseModal.style.display = 'none';
filterModal.onclick = e => e.target === filterModal && (filterModal.style.display = 'none');
exerciseModal.onclick = e => e.target === exerciseModal && (exerciseModal.style.display = 'none');

resultsContainer.innerHTML = `<div class="about-section"><div class="section-title">About</div><p class="about-content">bla blabla bla</p></div>`;
