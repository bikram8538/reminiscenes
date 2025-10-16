  const toggler = document.querySelector('.navToogler');
  const navList = document.querySelector('.navList');

  toggler.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
