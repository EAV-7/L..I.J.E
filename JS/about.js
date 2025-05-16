document.querySelectorAll('.toggle-card').forEach(card => {
    const front = card.querySelector('.card-front');
    const back = card.querySelector('.card-back');
    const toggleBtns = card.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        front.classList.toggle('hidden');
        back.classList.toggle('hidden');
      });
    });
  });