/* ==============================
   WebAcademy — AI Mentor Widget
   Powered by Claude (Anthropic)
   ============================== */

const SYSTEM_PROMPT = `You are WebAcademy's AI Mentor — an expert programming tutor built on Claude by Anthropic.

## ROLE
You are a patient, encouraging, and knowledgeable programming tutor on a full-stack coding education platform. Your mission: guide students from absolute beginners to job-ready developers across all major programming languages.

## CORE TEACHING PRINCIPLES
1. Hint before solving — Socratic method; never give the full solution immediately
   → Ask "What do you think the first step could be?" before helping
2. Why over how — explain the reasoning, not just the syntax
3. Real-world analogies — functions = cooking recipes, arrays = shopping lists, classes = blueprints for houses, APIs = restaurant menus
4. Micro-validation — end every concept with a comprehension check or mini-task
5. Break it down — when stuck: "Let's break this into 3 smaller steps..."
6. Celebrate milestones — every working "Hello World" is a genuine achievement
7. Runnable examples — every explanation includes a short, working, copyable code block

## PLATFORM CURRICULUM (72 weeks total)

### Beginner Track — 16 weeks
Module 1 (1 wk): PC & Internet basics — HTTP, CLI, JSON, DevTools
Module 2 (4 wk): HTML & CSS — tags, Flexbox, Grid, responsive, animations
Module 3 (4 wk): JavaScript basics — variables, DOM, events, arrays, localStorage
Module 4 (4 wk): Python basics — syntax, data structures, files, modules, error handling
Module 5 (1 wk): Git & GitHub — commits, branches, pull requests, Git Flow
Module 6 (2 wk): Project — personal website deployed on GitHub Pages

### Intermediate Track — 24 weeks
Module 7 (3 wk): JavaScript ES6+ & async — Promises, async/await, fetch API
Module 8 (6 wk): React.js — components, hooks, Router, context, Zustand
Module 9 (2 wk): TypeScript
Module 10 (3 wk): Python OOP & libraries — NumPy, Pandas
Module 11 (4 wk): Backend Node.js + Express — REST, JWT
Module 12 (3 wk): Databases SQL + PostgreSQL — Prisma ORM
Module 13 (2 wk): REST API & integrations — Stripe, WebSocket, Redis
Module 14 (3 wk): Full-stack project — React + Node.js + PostgreSQL

### Advanced Track — 32 weeks
Module 15 (8 wk): Algorithms & Data Structures — Big O, trees, graphs, DP
Module 16 (4 wk): System Design — scaling, caching, microservices
Module 17 (4 wk): DevOps Docker + CI/CD
Module 18 (3 wk): Cloud AWS/GCP
Module 19 (6 wk): AI/ML with Python — PyTorch, OpenAI API, LangChain
Module 20 (4 wk): Final product & demo day
Module 21 (3 wk): Interview prep — LeetCode, system design, mock interviews

## RESPONSE FORMATS

### Concept explanation:
📖 Concept — clear 2-3 sentence explanation
💡 Analogy — relatable everyday comparison
💻 Code — short (5-15 lines), commented, runnable example
✅ Try it! — one specific mini-challenge
➡️ Next — what concept follows (optional)

### Code review:
✅ What you did well
🐛 Issues — explain WHY it's a problem
💡 Suggestions
📊 Score: Correctness X/5 | Code style X/5 | Efficiency X/5

### Coding challenge:
📝 Problem — with 2-3 input/output examples
🔍 Hint 1 — gentle nudge
🔍 Hint 2 — stronger hint if requested
💻 Solution — fully commented
⏱️ Complexity — Time and Space O(?)

## DIFFICULTY CALIBRATION
Beginner: No jargon. Max encouragement. Code ≤ 10 lines. Explain every line.
Intermediate: Design patterns, best practices, trade-offs.
Advanced: Performance, architecture, production considerations.

## LANGUAGE & LOCALIZATION
- Always respond in the SAME LANGUAGE the student writes in
- Full support: Russian (ru), English (en), Uzbek (uz)
- Technical terms: use English term, add translation in parentheses on first use
- Code comments: always write in the student's preferred language

## IMPORTANT RULES
✅ Never make a student feel stupid — "Great question! That's a common point of confusion"
✅ Off-topic: gently redirect back to programming
✅ Frustrated student: acknowledge feelings FIRST, then solve
✅ Homework/exam help: guide through thought process, never just give the answer
✅ Burnout signals: recommend a break first
✅ Privacy: don't request unnecessary personal information`;

/* ─── Local Fallback Patterns ─── */
const AI_KNOWLEDGE = {
  patterns_ru: [
    { match: ['привет', 'здравствуй', 'хай', 'hi', 'hello'],
      response: `Привет! 👋 Я AI Ментор WebAcademy.\n\nМогу помочь с:\n- 🌐 **HTML** — структура страниц\n- 🎨 **CSS** — дизайн и стили\n- ⚡ **JavaScript** — интерактивность\n\nО чём хочешь спросить? 🚀` },
    { match: ['html', 'тег', 'элемент'],
      response: `📖 **HTML** — язык разметки, основа каждого сайта.\n\n💡 **Аналогия:** HTML — скелет, CSS — одежда, JS — мышцы.\n\n\`\`\`html\n<h1>Заголовок</h1>\n<p>Абзац текста.</p>\n<a href="#">Ссылка</a>\n\`\`\`\n\n✅ **Попробуй!** Создай страницу с заголовком, двумя абзацами и ссылкой.` },
    { match: ['css', 'стиль', 'цвет', 'flexbox', 'flex'],
      response: `📖 **CSS** — язык стилей, делает HTML красивым.\n\n💡 Если HTML — стены дома, CSS — обои и мебель!\n\n\`\`\`css\nh1 { color: #7C3AED; font-size: 32px; text-align: center; }\n.box { display: flex; justify-content: center; align-items: center; }\n\`\`\`\n\n✅ Измени цвет на \`#7C3AED\` и добавь \`font-family: Arial\`.` },
    { match: ['javascript', 'js', 'переменная', 'функция', 'массив', 'цикл'],
      response: `📖 **JavaScript** — язык программирования для интерактивности.\n\n💡 Переменная — ящик с этикеткой!\n\n\`\`\`javascript\nlet name = "Алишер";\nconst greet = (n) => \`Привет, \${n}! 👋\`;\nconsole.log(greet(name)); // Привет, Алишер! 👋\n\`\`\`\n\n✅ Напиши функцию, которая по оценке возвращает "Отлично", "Хорошо" или "Старайся!"` },
    { match: ['ошибка', 'не работает', 'помоги', 'не понимаю'],
      response: `😊 Не переживай — ошибки это нормально!\n\nРасскажи мне:\n1️⃣ Что хочешь сделать?\n2️⃣ Какой код написал?\n3️⃣ Какая ошибка?\n\n💡 Открой **F12 → Console** — там ошибка будет красным!` },
  ],
  patterns_uz: [
    { match: ['salom', 'assalomu'],
      response: `Salom! 👋 WebAcademy AI Mentoriman.\n\nYordam beraman:\n- 🌐 **HTML**\n- 🎨 **CSS**\n- ⚡ **JavaScript**\n\nNima so'ramoqchisiz? 🚀` },
    { match: ['xato', 'ishlamayapti', 'tushunmayapman'],
      response: `😊 Xavotir olmang! Xatolar odatiy holat.\n\nAyting:\n1️⃣ Nima qilmoqchi edingiz?\n2️⃣ Qanday kod yozdingiz?\n3️⃣ Qanday xato chiqdi?\n\n💡 F12 → Console — xato qizil rangda ko'rinadi!` },
  ],
  getResponse(msg, lang) {
    const lower = msg.toLowerCase();
    const patterns = lang === 'uz' ? this.patterns_uz : this.patterns_ru;
    for (const p of patterns) {
      if (p.match.some(kw => lower.includes(kw))) return p.response;
    }
    return lang === 'uz'
      ? `🤔 Savol uchun rahmat! Ko'proq ma'lumot bering yoki HTML, CSS, JS haqida so'rang. 😊`
      : `🤔 Хороший вопрос! Расскажи подробнее или спроси об HTML, CSS, JavaScript, функциях, циклах, DOM. 😊`;
  }
};

/* ─── Claude API Call ─── */
async function callClaude(messages, apiKey) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages
    })
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  return data.content[0].text;
}

/* ─── API Key Management ─── */
const API_KEY_STORAGE = 'wa_claude_api_key';
function getApiKey() { return localStorage.getItem(API_KEY_STORAGE) || ''; }
function setApiKey(key) { localStorage.setItem(API_KEY_STORAGE, key); }

/* ─── AI Mentor Widget ─── */
window.aiMentor = {
  isOpen: false,
  messages: [],

  init() {
    this.injectWidget();
    this.bindEvents();
  },

  injectWidget() {
    const widget = document.createElement('div');
    widget.id = 'ai-mentor-widget';
    widget.innerHTML = `
      <button class="ai-toggle-btn" id="ai-toggle-btn" aria-label="AI Ментор">
        <span class="ai-toggle-icon">🤖</span>
        <span class="ai-toggle-label">AI Ментор</span>
        <span class="ai-badge" id="ai-badge">1</span>
      </button>

      <div class="ai-chat-window" id="ai-chat-window">
        <div class="ai-chat-header">
          <div class="ai-header-info">
            <div class="ai-avatar">🤖</div>
            <div>
              <div class="ai-header-title">AI Ментор</div>
              <div class="ai-header-status">
                <span class="ai-status-dot"></span>
                <span id="ai-status-text">Спроси что угодно о программировании</span>
              </div>
            </div>
          </div>
          <div class="ai-header-actions">
            <button class="ai-key-btn" id="ai-key-btn" title="Настройки API">🔑</button>
            <button class="ai-close-btn" id="ai-close-btn">✕</button>
          </div>
        </div>

        <div id="ai-api-panel" class="ai-api-panel" style="display:none">
          <p>Введи Claude API ключ для умных ответов:</p>
          <input type="password" id="ai-api-input" placeholder="sk-ant-..." />
          <button id="ai-api-save">💾 Сохранить</button>
          <a href="https://console.anthropic.com" target="_blank">Получить ключ →</a>
        </div>

        <div class="ai-messages" id="ai-messages"></div>
        <div class="ai-quick-btns" id="ai-quick-btns"></div>

        <div class="ai-chat-input">
          <input type="text" class="ai-input" id="ai-input" placeholder="Задай вопрос...">
          <button class="ai-send-btn" id="ai-send-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(widget);
    this.addGreeting();
    this.addQuickButtons();
    this.updateStatusIndicator();
  },

  updateStatusIndicator() {
    const key = getApiKey();
    const statusEl = document.getElementById('ai-status-text');
    if (statusEl) {
      statusEl.textContent = key
        ? '✅ Claude AI подключён'
        : '⚠️ Локальный режим (без API ключа)';
    }
  },

  addGreeting() {
    const lang = window.i18n?.lang || localStorage.getItem('wa_lang') || 'ru';
    const msg = lang === 'uz'
      ? 'Salom! 👋 Men WebAcademy AI Mentoriman. HTML, CSS va JavaScript bo\'yicha savol bering! 🚀'
      : 'Привет! 👋 Я AI Ментор WebAcademy. Задавай любые вопросы по программированию! 🚀';
    this.addMessage(msg, 'ai');
  },

  addQuickButtons() {
    const lang = window.i18n?.lang || localStorage.getItem('wa_lang') || 'ru';
    const btns = lang === 'uz'
      ? ['HTML nima?', 'CSS qanday ishlaydi?', 'JS o\'zgaruvchilar', 'Flexbox', 'Xato tuzatish']
      : ['Что такое HTML?', 'Как работает CSS?', 'JS переменные', 'Flexbox', 'Исправить ошибку'];
    const c = document.getElementById('ai-quick-btns');
    if (c) c.innerHTML = btns.map(b =>
      `<button class="ai-quick-btn" onclick="aiMentor.sendMessage('${b}')">${b}</button>`
    ).join('');
  },

  bindEvents() {
    document.getElementById('ai-toggle-btn')?.addEventListener('click', () => this.toggle());
    document.getElementById('ai-close-btn')?.addEventListener('click', () => this.close());
    document.getElementById('ai-send-btn')?.addEventListener('click', () => this.sendFromInput());
    document.getElementById('ai-input')?.addEventListener('keypress', e => {
      if (e.key === 'Enter') this.sendFromInput();
    });
    document.getElementById('ai-key-btn')?.addEventListener('click', () => {
      const panel = document.getElementById('ai-api-panel');
      if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        const inp = document.getElementById('ai-api-input');
        if (inp) inp.value = getApiKey();
      }
    });
    document.getElementById('ai-api-save')?.addEventListener('click', () => {
      const val = document.getElementById('ai-api-input')?.value?.trim();
      if (val) {
        setApiKey(val);
        document.getElementById('ai-api-panel').style.display = 'none';
        this.updateStatusIndicator();
        this.addMessage('✅ API ключ сохранён! Теперь я использую настоящий Claude AI.', 'ai');
      }
    });
  },

  toggle() { this.isOpen ? this.close() : this.open(); },

  open() {
    this.isOpen = true;
    document.getElementById('ai-chat-window')?.classList.add('open');
    document.getElementById('ai-toggle-btn')?.classList.add('active');
    document.getElementById('ai-badge')?.remove();
    document.getElementById('ai-input')?.focus();
    this.scrollToBottom();
  },

  close() {
    this.isOpen = false;
    document.getElementById('ai-chat-window')?.classList.remove('open');
    document.getElementById('ai-toggle-btn')?.classList.remove('active');
  },

  sendFromInput() {
    const input = document.getElementById('ai-input');
    const text = input?.value?.trim();
    if (!text) return;
    input.value = '';
    this.sendMessage(text);
  },

  async sendMessage(text) {
    if (!this.isOpen) this.open();
    this.addMessage(text, 'user');

    const thinkingId = this.addThinking();
    const lang = window.i18n?.lang || localStorage.getItem('wa_lang') || 'ru';
    const apiKey = getApiKey();

    try {
      let response;
      if (apiKey) {
        // Add to conversation history
        this.messages.push({ role: 'user', content: text });
        // Keep last 10 messages for context
        const recentMessages = this.messages.slice(-10);
        response = await callClaude(recentMessages, apiKey);
        this.messages.push({ role: 'assistant', content: response });
      } else {
        // Fallback to local patterns with delay
        await new Promise(r => setTimeout(r, 600 + Math.random() * 800));
        response = AI_KNOWLEDGE.getResponse(text, lang);
      }
      this.removeThinking(thinkingId);
      this.addMessage(response, 'ai');
    } catch (err) {
      this.removeThinking(thinkingId);
      const errMsg = err.message?.includes('401')
        ? '❌ Неверный API ключ. Нажми 🔑 и проверь ключ.'
        : err.message?.includes('429')
        ? '⏳ Слишком много запросов. Подожди минуту и попробуй снова.'
        : `⚠️ Ошибка соединения. Использую локальный режим.\n\n${AI_KNOWLEDGE.getResponse(text, lang)}`;
      this.addMessage(errMsg, 'ai');
    }
  },

  addMessage(text, type) {
    const container = document.getElementById('ai-messages');
    if (!container) return;
    const msg = document.createElement('div');
    msg.className = `ai-message ai-message-${type}`;
    const formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
        `<pre class="ai-code"><code>${code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>`)
      .replace(/\n/g, '<br>');
    msg.innerHTML = `
      ${type === 'ai' ? '<div class="ai-msg-avatar">🤖</div>' : ''}
      <div class="ai-msg-bubble">${formatted}</div>
    `;
    container.appendChild(msg);
    this.scrollToBottom();
    return msg;
  },

  addThinking() {
    const container = document.getElementById('ai-messages');
    const id = 'thinking-' + Date.now();
    const lang = window.i18n?.lang || localStorage.getItem('wa_lang') || 'ru';
    const label = lang === 'uz' ? "O'ylamoqda..." : 'Думаю...';
    const el = document.createElement('div');
    el.className = 'ai-message ai-message-ai ai-thinking';
    el.id = id;
    el.innerHTML = `
      <div class="ai-msg-avatar">🤖</div>
      <div class="ai-msg-bubble">
        <span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span>
        <span class="ai-thinking-label">${label}</span>
      </div>`;
    container?.appendChild(el);
    this.scrollToBottom();
    return id;
  },

  removeThinking(id) { document.getElementById(id)?.remove(); },

  scrollToBottom() {
    const c = document.getElementById('ai-messages');
    if (c) c.scrollTop = c.scrollHeight;
  },

  updateLang() { this.addQuickButtons(); }
};

document.addEventListener('DOMContentLoaded', () => window.aiMentor.init());
