const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

// menuIcon.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });
function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  }
  
