/* ==============================
   WebAcademy — AI Mentor Widget
   Powered by smart responses
   Музаффар Хаётов
   ============================== */

const AI_KNOWLEDGE = {
  // ─── Pattern → response (RU) ───
  patterns_ru: [
    {
      match: ['html', 'тег', 'теги', 'элемент'],
      response: `📖 **HTML** — это язык разметки, который создаёт структуру веб-страниц.

💡 **Аналогия:** HTML — это как скелет тела. CSS — одежда, а JavaScript — мышцы, которые двигают тело.

💻 **Пример:**
\`\`\`html
<h1>Заголовок страницы</h1>
<p>Это абзац текста.</p>
<a href="https://example.com">Ссылка</a>
\`\`\`

✅ **Попробуй сам!** Создай HTML-страницу с заголовком, двумя абзацами и ссылкой.

➡️ После HTML изучи CSS — чтобы сделать страницу красивой!`
    },
    {
      match: ['css', 'стиль', 'стили', 'дизайн', 'цвет', 'шрифт'],
      response: `📖 **CSS** — это язык стилей, который делает HTML красивым.

💡 **Аналогия:** Если HTML — это голые стены дома, то CSS — это обои, мебель и освещение!

💻 **Пример:**
\`\`\`css
h1 {
  color: purple;       /* цвет текста */
  font-size: 32px;     /* размер шрифта */
  text-align: center;  /* выравнивание */
}
\`\`\`

✅ **Попробуй!** Измени цвет заголовка на \`#7C3AED\` и добавь \`font-family: Arial\`.

➡️ Следующий шаг — Flexbox для расположения элементов!`
    },
    {
      match: ['javascript', 'js', 'переменная', 'переменные', 'let', 'const', 'var'],
      response: `📖 **JavaScript** — язык программирования, который делает сайты интерактивными!

💡 **Аналогия:** Переменная — это ящик с этикеткой. \`let name = "Алишер"\` — ящик с именем \`name\`, внутри — "Алишер".

💻 **Пример:**
\`\`\`javascript
let name = "Алишер";   // можно изменить
const age = 14;         // нельзя изменить

console.log(\`Привет, \${name}! Тебе \${age} лет.\`);
// → Привет, Алишер! Тебе 14 лет.
\`\`\`

✅ **Мини-задача:** Создай переменные: твоё имя, возраст, любимый предмет. Выведи через шаблонную строку.

⚠️ Используй \`let\` и \`const\` — **не** \`var\`!`
    },
    {
      match: ['функция', 'функции', 'function', 'def'],
      response: `📖 **Функция** — это именованный блок кода, который можно вызвать несколько раз.

💡 **Аналогия:** Функция — это рецепт. Написал один раз — готовь сколько угодно раз с разными ингредиентами!

💻 **Пример:**
\`\`\`javascript
// Обычная функция
function greet(name) {
  return \`Привет, \${name}! 👋\`;
}

// Стрелочная функция (современный стиль)
const greet = (name) => \`Привет, \${name}! 👋\`;

console.log(greet("Малика")); // Привет, Малика! 👋
\`\`\`

✅ **Попробуй!** Напиши функцию \`getGrade(score)\`, которая по оценке возвращает "Отлично", "Хорошо" или "Учись лучше".`
    },
    {
      match: ['цикл', 'циклы', 'for', 'while', 'forEach'],
      response: `📖 **Цикл** — это повторение действия много раз, пока выполняется условие.

💡 **Аналогия:** Цикл — как будильник, который звонит каждый день в 7:00. Он повторяется снова и снова.

💻 **Пример:**
\`\`\`javascript
// for — когда знаем сколько раз
for (let i = 1; i <= 5; i++) {
  console.log(\`Урок \${i}\`);
}
// Выведет: Урок 1, Урок 2, Урок 3, Урок 4, Урок 5

// Перебор массива
const lessons = ["HTML", "CSS", "JS"];
lessons.forEach(lesson => {
  console.log(\`📚 \${lesson}\`);
});
\`\`\`

✅ **Задача:** Напиши цикл, выводящий таблицу умножения на 7 (от 7×1 до 7×10).`
    },
    {
      match: ['условие', 'условия', 'if', 'else', 'switch'],
      response: `📖 **Условный оператор** позволяет программе принимать решения.

💡 **Аналогия:** \`if/else\` — как светофор. Зелёный — идёшь, красный — стоишь!

💻 **Пример:**
\`\`\`javascript
let score = 85;

if (score >= 90) {
  console.log("🏆 Отлично!");
} else if (score >= 75) {
  console.log("👍 Хорошо!");
} else {
  console.log("💪 Старайся больше!");
}

// Краткий способ (тернарный оператор)
let result = score >= 75 ? "Сдал ✅" : "Не сдал ❌";
\`\`\`

✅ **Мини-задача:** Какой результат выдаст код при \`score = 92\`? Попробуй сам!`
    },
    {
      match: ['массив', 'массивы', 'array', 'список'],
      response: `📖 **Массив** — это упорядоченный список значений в одной переменной.

💡 **Аналогия:** Массив — как список покупок в магазине: [молоко, хлеб, яблоки].

💻 **Пример:**
\`\`\`javascript
let fruits = ["яблоко", "банан", "апельсин"];

console.log(fruits[0]);      // яблоко (индексы с 0!)
console.log(fruits.length);  // 3

fruits.push("виноград");     // добавить в конец
fruits.pop();                // удалить последний

// Перебор
fruits.forEach(fruit => console.log("🍎", fruit));

// map — создать новый массив
let big = fruits.map(f => f.toUpperCase()); // ["ЯБЛОКО", ...]
\`\`\`

✅ **Попробуй!** Создай массив из 5 любимых игр и отфильтруй те, что содержат букву 'а'.`
    },
    {
      match: ['dom', 'document', 'html элемент', 'найти элемент', 'изменить'],
      response: `📖 **DOM** (Document Object Model) — это представление HTML-страницы в виде объектов, которыми управляет JavaScript.

💡 **Аналогия:** DOM — как пульт от телевизора. Нажимаешь кнопки (JS) — что-то меняется на экране (HTML).

💻 **Пример:**
\`\`\`javascript
// Найти элемент
const title = document.getElementById("title");
const btn = document.querySelector(".btn");

// Изменить
title.textContent = "Новый заголовок!";
title.style.color = "purple";

// Событие при нажатии
btn.addEventListener("click", () => {
  alert("Кнопка нажата! 🎉");
});
\`\`\`

✅ **Задача:** Сделай кнопку, которая при клике меняет цвет фона страницы.`
    },
    {
      match: ['flexbox', 'flex', 'расположение', 'выравнивание', 'по центру'],
      response: `📖 **Flexbox** — CSS-инструмент для гибкого расположения элементов.

💡 **Аналогия:** Flexbox — как организатор на полке. Ты говоришь ему правила, а он сам расставляет предметы!

💻 **Пример:**
\`\`\`css
.container {
  display: flex;
  justify-content: center;  /* по горизонтали */
  align-items: center;      /* по вертикали */
  gap: 20px;               /* расстояние между */
}
\`\`\`

✅ **Попробуй!** Создай 3 карточки в ряд с gap: 16px и justify-content: space-between.

> 🔑 Самый частый паттерн: \`display:flex; justify-content:center; align-items:center\` — это центрирует всё идеально!`
    },
    {
      match: ['ошибка', 'не работает', 'помоги', 'не понимаю', 'зачем', 'почему'],
      response: `😊 Не переживай — ошибки это нормально! Даже опытные разработчики их делают каждый день.

Давай разберёмся вместе! Расскажи мне:

**1️⃣** Что именно ты пытаешься сделать?
**2️⃣** Какой код ты написал?
**3️⃣** Какая ошибка появляется?

💡 **Совет:** Когда что-то не работает, сначала открой **DevTools** (F12) и посмотри в раздел **Console** — там будет описание ошибки красным цветом!

Пиши подробнее — я помогу! 🚀`
    },
    {
      match: ['сертификат', 'certificate', 'диплом'],
      response: `🏆 **Сертификат WebAcademy** — это твоя награда за труд!

Чтобы получить сертификат от Музаффара Хаётова, нужно:
- ✅ Пройти **15+ уроков** из 19
- ✅ Завершить хотя бы один полный курс (HTML, CSS или JS)
- ✅ Набрать **60%+** в финальном тесте

После этого перейди на страницу **Сертификат** — там можно скачать и распечатать именной документ! 📄

💪 Ты уже начал — самый трудный шаг позади!`
    },
    {
      match: ['привет', 'здравствуй', 'хай', 'hi', 'hello', 'salom', 'assalomu'],
      response: `Привет! 👋 Рад тебя видеть в WebAcademy!

Я твой AI Ментор — помогаю разобраться с:
- 🌐 **HTML** — структура страниц
- 🎨 **CSS** — красивый дизайн
- ⚡ **JavaScript** — интерактивность

О чём хочешь спросить? Задавай любой вопрос о программировании! 🚀`
    },
    {
      match: ['локалстораж', 'localstorage', 'сохранить', 'данные'],
      response: `📖 **localStorage** — это хранилище данных прямо в браузере. Данные сохраняются даже после перезагрузки!

💡 **Аналогия:** localStorage — как блокнот, который лежит у пользователя. Ты пишешь в него — и он помнит написанное.

💻 **Пример:**
\`\`\`javascript
// Сохранить
localStorage.setItem("name", "Алишер");

// Прочитать
const name = localStorage.getItem("name"); // "Алишер"

// Сохранить объект (через JSON)
const user = { name: "Малика", age: 14 };
localStorage.setItem("user", JSON.stringify(user));

// Прочитать объект
const user2 = JSON.parse(localStorage.getItem("user"));
console.log(user2.name); // "Малика"
\`\`\`

✅ **Попробуй!** Сохрани своё имя в localStorage и выводи его при загрузке страницы.`
    },
  ],

  // ─── Uzbek patterns ───
  patterns_uz: [
    {
      match: ['html', 'teg', 'teglar', 'element'],
      response: `📖 **HTML** — veb-sahifalar tuzilmasini yaratadigan belgilash tili.

💡 **Qiyos:** HTML — tana skeleti kabi. CSS — kiyim, JavaScript esa harakat qiladigan muskullar!

💻 **Misol:**
\`\`\`html
<h1>Sahifa sarlavhasi</h1>
<p>Bu matn paragraf.</p>
<a href="#">Havola</a>
\`\`\`

✅ **O'zingiz sinab ko'ring!** Sarlavha, ikki paragraf va havoladan iborat HTML sahifa yarating.`
    },
    {
      match: ['css', 'stil', 'dizayn', 'rang', 'shrift'],
      response: `📖 **CSS** — HTML'ni chiroyli ko'rsatadigan stil tili.

💡 **Qiyos:** Agar HTML — bo'sh devorlar bo'lsa, CSS — devor qog'ozi, mebel va yoritishdir!

💻 **Misol:**
\`\`\`css
h1 {
  color: purple;       /* matn rangi */
  font-size: 32px;     /* shrift o'lchami */
  text-align: center;  /* tekislash */
}
\`\`\`

✅ **Sinab ko'ring!** Sarlavha rangini \`#7C3AED\` ga o'zgartiring.`
    },
    {
      match: ['javascript', 'js', 'o\'zgaruvchi', 'let', 'const'],
      response: `📖 **JavaScript** — saytlarni interaktiv qiladigan dasturlash tili!

💡 **Qiyos:** O'zgaruvchi — yorlig'i bo'lgan quti. \`let name = "Alisher"\` — ichida "Alisher" bo'lgan "name" qutisi.

💻 **Misol:**
\`\`\`javascript
let name = "Alisher";  // o'zgartiriladi
const age = 14;         // o'zgartirilmaydi

console.log(\`Salom, \${name}! Yoshingiz \${age}.\`);
\`\`\`

✅ **Mini-vazifa:** O'z ismi, yoshi va sevimli fani uchun o'zgaruvchilar yarating.`
    },
    {
      match: ['salom', 'assalomu', 'xayr', 'yordam'],
      response: `Salom! 👋 WebAcademy'ga xush kelibsiz!

Men sizning AI Mentoringizman — quyidagilarda yordam beraman:
- 🌐 **HTML** — sahifalar tuzilmasi
- 🎨 **CSS** — chiroyli dizayn
- ⚡ **JavaScript** — interaktivlik

Dasturlash haqida istalgan savol bering! 🚀`
    },
    {
      match: ['xato', 'ishlamayapti', 'tushunmayapman', 'yordam'],
      response: `😊 Xavotir olmang — xatolar odatiy holat! Tajribali dasturchilar ham har kuni xato qilishadi.

Birgalikda hal qilamiz! Menga ayting:

**1️⃣** Nima qilmoqchi edingiz?
**2️⃣** Qanday kod yozdingiz?
**3️⃣** Qanday xato chiqdi?

💡 **Maslahat:** Ishlamasa, **F12** bosing va **Console** bo'limiga qarang — xato qizil rangda ko'rinadi!`
    },
  ],

  getResponse(message, lang = 'ru') {
    const lower = message.toLowerCase();
    const patterns = lang === 'uz' ? this.patterns_uz : this.patterns_ru;

    for (const pattern of patterns) {
      if (pattern.match.some(kw => lower.includes(kw))) {
        return pattern.response;
      }
    }

    // Default response
    if (lang === 'uz') {
      return `🤔 Qiziqarli savol! Bu mavzu bo'yicha ko'proq ma'lumot bering, yoki quyidagilardan birini so'rang:\n\n- HTML teglari\n- CSS stillari\n- JavaScript o'zgaruvchilari\n- Funksiyalar\n- Tsikllar\n- DOM\n\nNimani o'rganmoqchisiz? 😊`;
    }
    return `🤔 Хороший вопрос! Расскажи подробнее, или спроси о:\n\n- HTML тегах\n- CSS стилях\n- JavaScript переменных\n- Функциях\n- Циклах\n- DOM\n- Flexbox\n- localStorage\n\nЧто именно ты хочешь изучить? 😊`;
  }
};

/* ─── AI Mentor Widget ─── */
window.aiMentor = {
  isOpen: false,
  history: [],

  init() {
    this.injectWidget();
    this.bindEvents();
  },

  injectWidget() {
    const widget = document.createElement('div');
    widget.id = 'ai-mentor-widget';
    widget.innerHTML = `
      <!-- Toggle Button -->
      <button class="ai-toggle-btn" id="ai-toggle-btn" aria-label="AI Ментор">
        <span class="ai-toggle-icon">🤖</span>
        <span class="ai-toggle-label" data-i18n="ai.title">AI Ментор</span>
        <span class="ai-badge" id="ai-badge">1</span>
      </button>

      <!-- Chat Window -->
      <div class="ai-chat-window" id="ai-chat-window">
        <div class="ai-chat-header">
          <div class="ai-header-info">
            <div class="ai-avatar">🤖</div>
            <div>
              <div class="ai-header-title" data-i18n="ai.title">AI Ментор</div>
              <div class="ai-header-status">
                <span class="ai-status-dot"></span>
                <span data-i18n="ai.subtitle">Спроси что угодно о программировании</span>
              </div>
            </div>
          </div>
          <button class="ai-close-btn" id="ai-close-btn">✕</button>
        </div>

        <div class="ai-messages" id="ai-messages"></div>

        <div class="ai-quick-btns" id="ai-quick-btns"></div>

        <div class="ai-chat-input">
          <input type="text" class="ai-input" id="ai-input"
            data-i18n="ai.placeholder" data-i18n-attr="placeholder"
            placeholder="Задай вопрос...">
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
  },

  addGreeting() {
    const lang = window.i18n?.lang || localStorage.getItem('wa_lang') || 'ru';
    const greeting = lang === 'uz'
      ? 'Salom! Men WebAcademy AI Mentoriman. HTML, CSS va JavaScript\'ni tushunishga yordam beraman. Nima so\'ramoqchisiz? 🚀'
      : 'Привет! Я AI Ментор WebAcademy. Помогаю разобраться с HTML, CSS и JavaScript. О чём хочешь спросить? 🚀';
    this.addMessage(greeting, 'ai');
  },

  addQuickButtons() {
    const lang = window.i18n?.lang || localStorage.getItem('wa_lang') || 'ru';
    const btns = lang === 'uz'
      ? ['HTML nima?', 'CSS qanday ishlaydi?', 'JS o\'zgaruvchilar', 'Flexbox', 'Xato tuzatish']
      : ['Что такое HTML?', 'Как работает CSS?', 'JS переменные', 'Flexbox', 'Исправить ошибку'];

    const container = document.getElementById('ai-quick-btns');
    if (!container) return;
    container.innerHTML = btns.map(b =>
      `<button class="ai-quick-btn" onclick="aiMentor.sendMessage('${b}')">${b}</button>`
    ).join('');
  },

  bindEvents() {
    document.getElementById('ai-toggle-btn')?.addEventListener('click', () => this.toggle());
    document.getElementById('ai-close-btn')?.addEventListener('click', () => this.close());
    document.getElementById('ai-send-btn')?.addEventListener('click', () => this.sendFromInput());
    document.getElementById('ai-input')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendFromInput();
    });
  },

  toggle() {
    this.isOpen ? this.close() : this.open();
  },

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

  sendMessage(text) {
    if (!this.isOpen) this.open();
    this.addMessage(text, 'user');

    // Show typing indicator
    const thinkingId = this.addThinking();

    // Simulate AI response delay (800-1800ms)
    setTimeout(() => {
      const lang = window.i18n?.lang || localStorage.getItem('wa_lang') || 'ru';
      const response = AI_KNOWLEDGE.getResponse(text, lang);
      this.removeThinking(thinkingId);
      this.addMessage(response, 'ai');
    }, 800 + Math.random() * 1000);
  },

  addMessage(text, type) {
    const container = document.getElementById('ai-messages');
    if (!container) return;

    const msg = document.createElement('div');
    msg.className = `ai-message ai-message-${type}`;

    // Convert markdown-like formatting
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

  removeThinking(id) {
    document.getElementById(id)?.remove();
  },

  scrollToBottom() {
    const c = document.getElementById('ai-messages');
    if (c) c.scrollTop = c.scrollHeight;
  },

  updateLang() {
    this.addQuickButtons();
  }
};

document.addEventListener('DOMContentLoaded', () => window.aiMentor.init());
