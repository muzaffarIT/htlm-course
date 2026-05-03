/* ==============================
   WebAcademy — i18n Engine
   Музаффар Хаётов
   Supports: RU, UZ
   ============================== */

const TRANSLATIONS = {
  ru: {
    // NAV
    'nav.courses':   'Курсы',
    'nav.features':  'О платформе',
    'nav.author':    'Автор',
    'nav.login':     'Войти',
    'nav.cabinet':   'Личный кабинет',
    'nav.register':  'Начать бесплатно',

    // HERO
    'hero.badge':    '🎓 Платформа от Музаффара Хаётова',
    'hero.title':    'Стань веб-разработчиком',
    'hero.title2':   'уже сегодня!',
    'hero.subtitle': 'Интерактивные онлайн-уроки по HTML, CSS и JavaScript для школьников 1–11 класса. С нуля до первого сайта!',
    'hero.start':    '🚀 Начать бесплатно',
    'hero.courses':  '📚 Посмотреть курсы',
    'hero.scroll':   'Листай вниз',

    // STATS
    'stats.students':  '👧 Студентов',
    'stats.lessons':   '📚 Уроков',
    'stats.courses':   '🎯 Курса',
    'stats.certs':     '🏆 Сертификатов',

    // COURSES SECTION
    'courses.label':    '📖 Программа обучения',
    'courses.title':    'Три курса для полного старта',
    'courses.subtitle': 'Каждый урок — минимум 30 минут практики с живым редактором кода и тестами',
    'courses.html.title':   'HTML — Основы',
    'courses.css.title':    'CSS — Дизайн',
    'courses.js.title':     'JavaScript — Логика',
    'courses.start':    'Начать курс →',
    'courses.hours':    'ч',
    'courses.lessons.label': 'уроков',

    // FEATURES
    'features.label':     '✨ Преимущества',
    'features.title':     'Почему дети выбирают нас?',
    'features.subtitle':  'Мы создали платформу специально для школьников — понятно, интересно и эффективно',
    'features.editor.title':    'Живой редактор кода',
    'features.editor.text':     'Пиши код прямо в браузере и сразу видишь результат. Никаких лишних программ!',
    'features.quiz.title':      'Тесты после каждого урока',
    'features.quiz.text':       '10 вопросов в конце урока помогают закрепить знания и проверить понимание.',
    'features.progress.title':  'Отслеживание прогресса',
    'features.progress.text':   'Личный кабинет показывает, сколько уроков пройдено и что осталось изучить.',
    'features.cert.title':      'Сертификат об окончании',
    'features.cert.text':       'После прохождения 15+ уроков получи именной сертификат от Музаффара Хаётова.',
    'features.tasks.title':     'Практические задания',
    'features.tasks.text':      'В каждом уроке — реальные задачи, которые нужно выполнить самостоятельно.',
    'features.zero.title':      'С нуля до результата',
    'features.zero.text':       'Курс рассчитан на полных новичков. Уже после 5 уроков ты сделаешь свой первый сайт!',

    // CTA
    'cta.label':   '🎯 Начни прямо сейчас',
    'cta.title':   'Готов стать разработчиком?',
    'cta.text':    'Регистрация бесплатная. Никаких скачиваний — всё в браузере!',
    'cta.btn':     '🚀 Создать аккаунт бесплатно',

    // AUTHOR
    'author.label': '👨‍💻 Об авторе',
    'author.title': 'Кто создал эту платформу?',
    'author.name':  'Музаффар Хаётов',
    'author.role':  '🎓 Преподаватель веб-разработки',
    'author.bio':   'Опытный разработчик и педагог, который создал WebAcademy специально для того, чтобы школьники могли освоить программирование в интересном и понятном формате. Более 1200 учеников прошли обучение под его руководством.',

    // FOOTER
    'footer.tagline': 'Платформа веб-разработки для детей от',
    'footer.home':    'Главная',
    'footer.reg':     'Регистрация',
    'footer.login':   'Войти',
    'footer.cabinet': 'Кабинет',
    'footer.cert':    'Сертификат',
    'footer.copy':    '© 2025 WebAcademy by Музаффар Хаётов. Все права защищены.',

    // AUTH
    'auth.register.title':  'Создать аккаунт',
    'auth.register.sub':    'Начни учиться бесплатно уже сегодня',
    'auth.login.title':     'Добро пожаловать',
    'auth.login.sub':       'Войди в свой аккаунт',
    'auth.name':            'Имя',
    'auth.surname':         'Фамилия',
    'auth.email':           'Email',
    'auth.password':        'Пароль',
    'auth.grade':           'Класс',
    'auth.city':            'Город',
    'auth.btn.register':    'Зарегистрироваться',
    'auth.btn.login':       'Войти',
    'auth.switch.login':    'Уже есть аккаунт?',
    'auth.switch.register': 'Нет аккаунта?',

    // DASHBOARD
    'dash.welcome':     'Добро пожаловать,',
    'dash.lessons':     'уроков пройдено',
    'dash.streak':      'дней подряд',
    'dash.progress':    'прогресс',
    'dash.continue':    'Продолжить',

    // AI MENTOR
    'ai.title':         '🤖 AI Ментор',
    'ai.subtitle':      'Спроси что угодно о программировании',
    'ai.placeholder':   'Задай вопрос...',
    'ai.send':          'Отправить',
    'ai.greeting':      'Привет! Я AI Ментор WebAcademy. Я помогу тебе разобраться с HTML, CSS и JavaScript. О чём хочешь спросить?',
    'ai.thinking':      'Думаю...',

    // LESSON PAGE
    'lesson.back':       '← Кабинет',
    'lesson.complete':   '✅ Завершить урок',
    'lesson.completed':  '✅ Урок пройден',
    'lesson.next':       'Следующий урок →',
    'lesson.quiz.check': '✅ Проверить ответы',
    'lesson.quiz.great': '🎉 Отлично! Ты хорошо усвоил материал!',
    'lesson.quiz.ok':    '👍 Хорошо! Рекомендуем перечитать пропущенные темы.',
    'lesson.quiz.retry': '📖 Не расстраивайся! Прочитай урок ещё раз.',
    'lesson.run':        '▶ Запустить',
    'lesson.copy':       '📋 Копировать',
    'lesson.copied':     '✅ Скопировано!',
  },

  uz: {
    // NAV
    'nav.courses':   'Kurslar',
    'nav.features':  'Platforma haqida',
    'nav.author':    'Muallif',
    'nav.login':     'Kirish',
    'nav.cabinet':   'Shaxsiy kabinet',
    'nav.register':  'Bepul boshlash',

    // HERO
    'hero.badge':    '🎓 Muzaffar Xayotov platformasi',
    'hero.title':    'Veb-dasturchi bo\'ling',
    'hero.title2':   'buguniyoq!',
    'hero.subtitle': '1–11-sinf o\'quvchilari uchun HTML, CSS va JavaScript bo\'yicha interaktiv onlayn-darslar. Noldan birinchi saytgacha!',
    'hero.start':    '🚀 Bepul boshlash',
    'hero.courses':  '📚 Kurslarni ko\'rish',
    'hero.scroll':   'Pastga aylantiring',

    // STATS
    'stats.students':  '👧 O\'quvchilar',
    'stats.lessons':   '📚 Darslar',
    'stats.courses':   '🎯 Kurslar',
    'stats.certs':     '🏆 Sertifikatlar',

    // COURSES SECTION
    'courses.label':    '📖 O\'quv dasturi',
    'courses.title':    'To\'liq boshlash uchun uch kurs',
    'courses.subtitle': 'Har bir dars — jonli kod muharriri va testlar bilan kamida 30 daqiqa amaliyot',
    'courses.html.title':   'HTML — Asoslar',
    'courses.css.title':    'CSS — Dizayn',
    'courses.js.title':     'JavaScript — Mantiq',
    'courses.start':    'Kursni boshlash →',
    'courses.hours':    'soat',
    'courses.lessons.label': 'dars',

    // FEATURES
    'features.label':     '✨ Afzalliklar',
    'features.title':     'Nega bolalar bizni tanlaydi?',
    'features.subtitle':  'Biz platformani o\'quvchilar uchun maxsus yaratdik — tushunarli, qiziqarli va samarali',
    'features.editor.title':    'Jonli kod muharriri',
    'features.editor.text':     'To\'g\'ridan-to\'g\'ri brauzerda kod yozing va natijani darhol ko\'ring. Hech qanday qo\'shimcha dastur kerak emas!',
    'features.quiz.title':      'Har darsdan keyin test',
    'features.quiz.text':       'Dars oxiridagi 10 savol bilimni mustahkamlashga va tushunishni tekshirishga yordam beradi.',
    'features.progress.title':  'Jarayonni kuzatish',
    'features.progress.text':   'Shaxsiy kabinet nechta dars o\'tilganini va nima qolganini ko\'rsatadi.',
    'features.cert.title':      'Tugatish sertifikati',
    'features.cert.text':       '15+ dars o\'tgandan so\'ng Muzaffar Xayotovdan shaxsiy sertifikat oling.',
    'features.tasks.title':     'Amaliy topshiriqlar',
    'features.tasks.text':      'Har bir darsda — mustaqil bajarish kerak bo\'lgan haqiqiy vazifalar.',
    'features.zero.title':      'Noldan natijaga',
    'features.zero.text':       'Kurs mutlaq yangi boshlovchilar uchun mo\'ljallangan. Allaqachon 5 ta darsdan keyin birinchi saytingizni yaratasiz!',

    // CTA
    'cta.label':   '🎯 Hoziroq boshlang',
    'cta.title':   'Dasturchi bo\'lishga tayyormisiz?',
    'cta.text':    'Ro\'yxatdan o\'tish bepul. Hech narsa yuklab olishning hojati yo\'q — hammasi brauzerda!',
    'cta.btn':     '🚀 Bepul hisob yaratish',

    // AUTHOR
    'author.label': '👨‍💻 Muallif haqida',
    'author.title': 'Bu platformani kim yaratdi?',
    'author.name':  'Muzaffar Xayotov',
    'author.role':  '🎓 Veb-dasturlash o\'qituvchisi',
    'author.bio':   'Tajribali dasturchi va pedagog, o\'quvchilar dasturlashni qiziqarli va tushunarli tarzda o\'rganishi uchun WebAcademy\'ni maxsus yaratgan. 1200 dan ortiq o\'quvchi uning rahbarligida ta\'lim olgan.',

    // FOOTER
    'footer.tagline': 'Muzaffar Xayotovdan bolalar uchun veb-dasturlash platformasi',
    'footer.home':    'Bosh sahifa',
    'footer.reg':     'Ro\'yxatdan o\'tish',
    'footer.login':   'Kirish',
    'footer.cabinet': 'Kabinet',
    'footer.cert':    'Sertifikat',
    'footer.copy':    '© 2025 WebAcademy by Muzaffar Xayotov. Barcha huquqlar himoyalangan.',

    // AUTH
    'auth.register.title':  'Hisob yaratish',
    'auth.register.sub':    'Bugun bepul o\'qishni boshlang',
    'auth.login.title':     'Xush kelibsiz',
    'auth.login.sub':       'Hisobingizga kiring',
    'auth.name':            'Ism',
    'auth.surname':         'Familiya',
    'auth.email':           'Email',
    'auth.password':        'Parol',
    'auth.grade':           'Sinf',
    'auth.city':            'Shahar',
    'auth.btn.register':    'Ro\'yxatdan o\'tish',
    'auth.btn.login':       'Kirish',
    'auth.switch.login':    'Hisobingiz bormi?',
    'auth.switch.register': 'Hisobingiz yo\'qmi?',

    // DASHBOARD
    'dash.welcome':     'Xush kelibsiz,',
    'dash.lessons':     'dars o\'tildi',
    'dash.streak':      'kun ketma-ket',
    'dash.progress':    'progress',
    'dash.continue':    'Davom etish',

    // AI MENTOR
    'ai.title':         '🤖 AI Mentor',
    'ai.subtitle':      'Dasturlash haqida istalgan savol bering',
    'ai.placeholder':   'Savol bering...',
    'ai.send':          'Yuborish',
    'ai.greeting':      'Salom! Men WebAcademy AI Mentoriman. HTML, CSS va JavaScript\'ni tushunishga yordam beraman. Nima so\'ramoqchisiz?',
    'ai.thinking':      'O\'ylamoqda...',

    // LESSON PAGE
    'lesson.back':       '← Kabinet',
    'lesson.complete':   '✅ Darsni tugatish',
    'lesson.completed':  '✅ Dars o\'tildi',
    'lesson.next':       'Keyingi dars →',
    'lesson.quiz.check': '✅ Javoblarni tekshirish',
    'lesson.quiz.great': '🎉 Ajoyib! Materialni yaxshi o\'zlashtirgansiz!',
    'lesson.quiz.ok':    '👍 Yaxshi! O\'tkazib yuborilgan mavzularni qayta o\'qishni tavsiya qilamiz.',
    'lesson.quiz.retry': '📖 Xafa bo\'lmang! Darsni yana o\'qib chiqing.',
    'lesson.run':        '▶ Ishga tushirish',
    'lesson.copy':       '📋 Nusxa olish',
    'lesson.copied':     '✅ Nusxa olindi!',
  }
};

/* ─── Core i18n ─── */
const i18n = {
  lang: localStorage.getItem('wa_lang') || 'ru',

  t(key) {
    return TRANSLATIONS[this.lang]?.[key] || TRANSLATIONS['ru']?.[key] || key;
  },

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('wa_lang', lang);
    this.applyAll();
    this.updateLangButton();
    // Also update AI mentor if open
    if (window.aiMentor) window.aiMentor.updateLang();
  },

  applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const attr = el.dataset.i18nAttr;
      if (attr) {
        el.setAttribute(attr, this.t(key));
      } else {
        el.textContent = this.t(key);
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.dataset.i18nHtml);
    });
    // Update html lang attr
    document.documentElement.lang = this.lang === 'uz' ? 'uz' : 'ru';
  },

  updateLangButton() {
    const btn = document.getElementById('lang-toggle');
    const drawerBtn = document.getElementById('drawer-lang');

    if (this.lang === 'uz') {
      // Currently UZ → clicking will switch to RU
      if (btn) btn.innerHTML = '<span class="lang-flag">🇷🇺</span> RU';
      if (drawerBtn) drawerBtn.innerHTML = '<span class="lang-flag">🇷🇺</span>&nbsp;Русский тилига ўтиш';
    } else {
      // Currently RU → clicking will switch to UZ
      if (btn) btn.innerHTML = '<span class="lang-flag">🇺🇿</span> UZ';
      if (drawerBtn) drawerBtn.innerHTML = '<span class="lang-flag">🇺🇿</span>&nbsp;O\'zbek tiliga o\'tish';
    }
  },

  init() {
    this.applyAll();
    this.updateLangButton();
  }
};

// Auto-init
document.addEventListener('DOMContentLoaded', () => i18n.init());
