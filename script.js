document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    toggleBtn.textContent = 'Тёмная тема';
  }

  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      toggleBtn.textContent = 'Тёмная тема';
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      toggleBtn.textContent = 'Светлая тема';
      localStorage.setItem('theme', 'dark');
    }
  });

  // Форма (пока консоль)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Сообщение отправлено (пока в консоль). Спасибо!');
      form.reset();
    });
  }
});