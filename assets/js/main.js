/* ==============================
   WebAcademy — Музаффар Хаётов
   Auth & Utilities
   ============================== */

const WA = {
  // ─── Storage Keys ───
  USERS_KEY: 'wa_users',
  CURRENT_KEY: 'wa_current_user',

  // ─── Auth ───
  register(name, email, password, grade) {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) return { ok: false, msg: 'Этот email уже используется' };
    const user = {
      id: Date.now(), name, email, grade,
      password: btoa(unescape(encodeURIComponent(password))),
      createdAt: new Date().toISOString(),
      progress: {}
    };
    users.push(user);
    this.saveUsers(users);
    this.setCurrentUser(user);
    return { ok: true, user };
  },

  login(email, password) {
    const users = this.getUsers();
    const encoded = btoa(unescape(encodeURIComponent(password)));
    const user = users.find(u => u.email === email && u.password === encoded);
    if (!user) return { ok: false, msg: 'Неверный email или пароль' };
    this.setCurrentUser(user);
    return { ok: true, user };
  },

  logout() {
    localStorage.removeItem(this.CURRENT_KEY);
    window.location.href = '/login.html';
  },

  getCurrentUser() {
    try { return JSON.parse(localStorage.getItem(this.CURRENT_KEY)); }
    catch { return null; }
  },

  setCurrentUser(user) {
    localStorage.setItem(this.CURRENT_KEY, JSON.stringify(user));
  },

  getUsers() {
    try { return JSON.parse(localStorage.getItem(this.USERS_KEY)) || []; }
    catch { return []; }
  },

  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  requireAuth() {
    const user = this.getCurrentUser();
    if (!user) { window.location.href = '/login.html'; return null; }
    return user;
  },

  // ─── Progress ───
  completeLesson(lessonId, score) {
    const user = this.getCurrentUser();
    if (!user) return;
    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === user.id);
    if (idx === -1) return;
    users[idx].progress[lessonId] = { completed: true, score, completedAt: new Date().toISOString() };
    this.saveUsers(users);
    this.setCurrentUser(users[idx]);
  },

  getLessonProgress(lessonId) {
    const user = this.getCurrentUser();
    if (!user) return null;
    return user.progress[lessonId] || null;
  },

  getTotalCompleted() {
    const user = this.getCurrentUser();
    if (!user) return 0;
    return Object.values(user.progress).filter(p => p.completed).length;
  },

  canGetCertificate() {
    return this.getTotalCompleted() >= 15;
  },

  // ─── Courses definition ───
  courses: [
    {
      id: 'html', label: 'HTML', icon: '🌐', color: '#EF4444',
      lessons: [
        { id: 'html-1', title: 'Введение в HTML', file: 'lessons/html/1-intro.html', duration: '35 мин' },
        { id: 'html-2', title: 'Теги и элементы', file: 'lessons/html/2-tags.html', duration: '40 мин' },
        { id: 'html-3', title: 'Текст и заголовки', file: 'lessons/html/3-text.html', duration: '35 мин' },
        { id: 'html-4', title: 'Ссылки и изображения', file: 'lessons/html/4-links-images.html', duration: '40 мин' },
        { id: 'html-5', title: 'Списки и таблицы', file: 'lessons/html/5-lists-tables.html', duration: '40 мин' },
        { id: 'html-6', title: 'Формы', file: 'lessons/html/6-forms.html', duration: '45 мин' },
        { id: 'html-7', title: 'Семантический HTML', file: 'lessons/html/7-semantic.html', duration: '35 мин' },
      ]
    },
    {
      id: 'css', label: 'CSS', icon: '🎨', color: '#3B82F6',
      lessons: [
        { id: 'css-1', title: 'Введение в CSS', file: 'lessons/css/1-intro.html', duration: '35 мин' },
        { id: 'css-2', title: 'Цвета и фоны', file: 'lessons/css/2-colors-bg.html', duration: '40 мин' },
        { id: 'css-3', title: 'Текст и шрифты', file: 'lessons/css/3-text-fonts.html', duration: '35 мин' },
        { id: 'css-4', title: 'Блочная модель', file: 'lessons/css/4-box-model.html', duration: '40 мин' },
        { id: 'css-5', title: 'Flexbox', file: 'lessons/css/5-display-flex.html', duration: '45 мин' },
        { id: 'css-6', title: 'Позиционирование', file: 'lessons/css/6-position-hover.html', duration: '40 мин' },
        { id: 'css-7', title: 'Анимации', file: 'lessons/css/7-animations.html', duration: '40 мин' },
      ]
    },
    {
      id: 'js', label: 'JavaScript', icon: '⚡', color: '#F59E0B',
      lessons: [
        { id: 'js-1', title: 'Переменные и типы', file: 'lessons/js/1-intro-vars.html', duration: '40 мин' },
        { id: 'js-2', title: 'Условия и циклы', file: 'lessons/js/2-conditions.html', duration: '45 мин' },
        { id: 'js-3', title: 'События', file: 'lessons/js/3-events.html', duration: '40 мин' },
        { id: 'js-4', title: 'DOM — управление страницей', file: 'lessons/js/4-dom.html', duration: '45 мин' },
        { id: 'js-5', title: 'Проект: Калькулятор', file: 'lessons/js/5-practice-calc.html', duration: '50 мин' },
      ]
    }
  ],

  getTotalLessons() { return this.courses.reduce((s, c) => s + c.lessons.length, 0); }
};

// ─── Navbar scroll effect ───
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Animate numbers
  document.querySelectorAll('.stat-number[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let count = 0;
    const step = Math.ceil(target / 80);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count.toLocaleString('ru') + (el.dataset.suffix || '');
      if (count >= target) clearInterval(timer);
    }, 20);
  });

  // Particle hero
  const hero = document.querySelector('.hero-particles');
  if (hero) createParticles(hero);

  // Update nav for logged user
  const user = WA.getCurrentUser();
  const loginLink = document.getElementById('nav-login');
  const dashLink = document.getElementById('nav-dash');
  if (user) {
    if (loginLink) loginLink.style.display = 'none';
    if (dashLink) { dashLink.style.display = 'flex'; dashLink.textContent = '👤 ' + user.name.split(' ')[0]; }
  }
});

function createParticles(container) {
  const colors = ['#7C3AED', '#EC4899', '#F59E0B', '#3B82F6', '#10B981'];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${Math.random()*15+10}s;
      animation-delay:${Math.random()*10}s;
    `;
    container.appendChild(p);
  }
}

// ─── Form helpers ───
function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('show'); }
}
function hideError(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('show');
}
