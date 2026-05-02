// Main JavaScript for the Course Platform

document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Progress Tracking
    initProgress();

    // 2. Setup Answer Toggles
    const answerToggles = document.querySelectorAll('.answer-toggle');
    answerToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const answerId = this.getAttribute('data-target');
            const answerContent = document.getElementById(answerId);
            
            if (answerContent.classList.contains('show')) {
                answerContent.classList.remove('show');
                this.textContent = 'Показать ответ';
            } else {
                answerContent.classList.add('show');
                this.textContent = 'Скрыть ответ';
            }
        });
    });

    // 3. Mark current page as active in sidebar
    highlightCurrentPage();
});

function initProgress() {
    const defaultProgress = {
        completedLessons: []
    };

    let progress = JSON.parse(localStorage.getItem('courseProgress')) || defaultProgress;
    
    // Check if current page is a lesson and mark it complete
    const currentPagePath = window.location.pathname;
    const isLesson = currentPagePath.includes('lessons/');
    
    if (isLesson) {
        // Extract filename roughly as lesson ID
        const parts = currentPagePath.split('/');
        const lessonId = parts[parts.length - 2] + '/' + parts[parts.length - 1];
        
        if (!progress.completedLessons.includes(lessonId)) {
            progress.completedLessons.push(lessonId);
            localStorage.setItem('courseProgress', JSON.stringify(progress));
        }
    }

    updateUIProgress(progress);
}

function updateUIProgress(progress) {
    const totalLessons = 12; // 7 CSS + 5 JS
    const completedCount = progress.completedLessons.length;
    const progressPercent = Math.min(100, Math.round((completedCount / totalLessons) * 100));

    // Update Progress Bar if it exists on page
    const progressBar = document.getElementById('main-progress-bar');
    const progressText = document.getElementById('progress-text');
    
    if (progressBar) progressBar.style.width = `${progressPercent}%`;
    if (progressText) progressText.textContent = `${progressPercent}%`;

    // Mark sidebar items as completed
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const parts = href.split('/');
            if (parts.length >= 3) {
                const lessonId = parts[parts.length - 2] + '/' + parts[parts.length - 1];
                if (progress.completedLessons.includes(lessonId)) {
                    link.setAttribute('data-status', 'completed');
                }
            }
        }
    });
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Simple logic to match current path
        if (currentPath.endsWith(linkPath.replace('../', '').replace('./', ''))) {
            link.classList.add('active');
        } else if (currentPath.endsWith('/') && linkPath === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
