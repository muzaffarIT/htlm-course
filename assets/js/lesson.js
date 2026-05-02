/* ==============================
   WebAcademy — Lesson Engine
   Музаффар Хаётов
   ============================== */

// ─── Progress bar ───
function initLessonProgress(current, total) {
  const fill = document.querySelector('.lesson-progress-fill');
  const label = document.querySelector('.lesson-progress-label');
  if (fill) fill.style.width = ((current / total) * 100) + '%';
  if (label) label.textContent = current + ' / ' + total;
}

// ─── Live Editor ───
function initEditors() {
  document.querySelectorAll('.code-textarea').forEach(ta => {
    const frame = ta.closest('.editor-section')?.querySelector('.preview-frame');
    if (frame) runCode(ta, frame);
    ta.addEventListener('input', () => {
      const f = ta.closest('.editor-section')?.querySelector('.preview-frame');
      if (f) runCode(ta, f);
    });
  });
  document.querySelectorAll('.run-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.editor-section');
      const ta = section?.querySelector('.code-textarea');
      const frame = section?.querySelector('.preview-frame');
      if (ta && frame) runCode(ta, frame);
    });
  });
}

function runCode(ta, frame) {
  const code = ta.value;
  const doc = frame.contentDocument || frame.contentWindow.document;
  doc.open(); doc.write(code); doc.close();
}

// ─── Copy buttons ───
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-block')?.querySelector('pre code');
      if (pre) {
        navigator.clipboard.writeText(pre.innerText).then(() => {
          const orig = btn.textContent;
          btn.textContent = '✅ Скопировано!';
          btn.classList.add('copied');
          setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
        });
      }
    });
  });
}

// ─── Quiz engine ───
function initQuiz(answersMap) {
  // answersMap: { q1: 'b', q2: 'a', ... }
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const q = opt.dataset.q;
      document.querySelectorAll(`.quiz-option[data-q="${q}"]`).forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  const submitBtn = document.querySelector('.quiz-submit-btn');
  if (!submitBtn) return;
  submitBtn.addEventListener('click', () => {
    let correct = 0; let total = Object.keys(answersMap).length;
    Object.entries(answersMap).forEach(([q, ans]) => {
      document.querySelectorAll(`.quiz-option[data-q="${q}"]`).forEach(opt => {
        const isCorrect = opt.dataset.v === ans;
        const isSelected = opt.classList.contains('selected');
        if (isSelected && isCorrect) { opt.classList.add('correct'); correct++; }
        else if (isSelected && !isCorrect) opt.classList.add('wrong');
        else if (!isSelected && isCorrect) opt.classList.add('correct');
      });
    });
    const pct = Math.round((correct / total) * 100);
    showQuizResult(correct, total, pct);

    // Enable complete button after quiz
    const completeBtn = document.getElementById('completeBtn');
    if (completeBtn) completeBtn.disabled = false;

    submitBtn.disabled = true;
  });
}

function showQuizResult(correct, total, pct) {
  const res = document.querySelector('.quiz-result');
  if (!res) return;
  const score = res.querySelector('.quiz-score');
  const feedback = res.querySelector('.quiz-feedback');
  score.textContent = pct + '%';
  if (pct >= 80) { score.className = 'quiz-score great'; feedback.textContent = '🎉 Отлично! Ты хорошо усвоил материал урока!'; }
  else if (pct >= 60) { score.className = 'quiz-score ok'; feedback.textContent = '👍 Хорошо! Рекомендуем перечитать пропущенные темы.'; }
  else { score.className = 'quiz-score retry'; feedback.textContent = '📖 Не расстраивайся! Прочитай урок ещё раз и попробуй снова.'; }
  res.classList.add('show');
  res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ─── Complete lesson ───
function initCompleteButton(lessonId, nextUrl) {
  const btn = document.getElementById('completeBtn');
  if (!btn) return;
  const user = WA.getCurrentUser();
  if (!user) { btn.textContent = '🔒 Войди для сохранения прогресса'; return; }

  const already = WA.getLessonProgress(lessonId);
  if (already?.completed) {
    btn.textContent = '✅ Урок пройден'; btn.disabled = true;
    btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
  }

  btn.addEventListener('click', () => {
    WA.completeLesson(lessonId, 100);
    btn.textContent = '✅ Урок пройден!';
    btn.disabled = true;
    showCompletionToast(nextUrl);
  });
}

function showCompletionToast(nextUrl) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed; bottom:2rem; right:2rem; z-index:999;
    background:linear-gradient(135deg,#10B981,#059669);
    color:#fff; padding:1rem 1.5rem; border-radius:14px;
    box-shadow:0 8px 30px rgba(16,185,129,0.4);
    font-family:'Nunito',sans-serif; font-weight:700; font-size:0.95rem;
    animation:fadeInUp 0.4s ease; display:flex; flex-direction:column; gap:0.4rem;
  `;
  toast.innerHTML = `
    <span>🎉 Урок успешно завершён!</span>
    ${nextUrl ? `<a href="${nextUrl}" style="color:#fff;font-size:0.85rem;opacity:0.9;">Следующий урок →</a>` : '<span style="font-size:0.85rem;opacity:0.9;">Все уроки этого раздела пройдены!</span>'}
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(20px)'; toast.style.transition = '0.5s ease'; setTimeout(() => toast.remove(), 500); }, 4000);
}

// ─── DOMContentLoaded ───
document.addEventListener('DOMContentLoaded', () => {
  initEditors();
  initCopyButtons();
  // Mark completed lessons
  const user = WA.getCurrentUser();
  if (user) {
    document.querySelectorAll('[data-lesson-check]').forEach(el => {
      const id = el.dataset.lessonCheck;
      if (user.progress[id]?.completed) el.classList.add('done');
    });
  }
});
