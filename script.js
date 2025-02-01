// script.js
document.addEventListener('DOMContentLoaded', () => {
  const xApp = document.getElementById('x-app');
  const telegramApp = document.getElementById('telegram-app');
  const aboutApp = document.getElementById('about-app');
  const aboutModal = document.getElementById('about-modal');
  const closeModal = document.querySelector('.close');

  // Open X (Twitter) link
  xApp.addEventListener('click', () => {
    window.open('https://x.com/marzcoin', '_blank');
  });

  // Open Telegram link (add your link later)
  telegramApp.addEventListener('click', () => {
    alert('Telegram link will be added soon!');
  });

  // Open About Modal
  aboutApp.addEventListener('click', () => {
    aboutModal.style.display = 'flex';
  });

  // Close About Modal
  closeModal.addEventListener('click', () => {
    aboutModal.style.display = 'none';
  });

  // Close Modal if clicked outside
  window.addEventListener('click', (event) => {
    if (event.target === aboutModal) {
      aboutModal.style.display = 'none';
    }
  });
});