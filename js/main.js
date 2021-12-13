const menuItem = document.querySelector('.mobile-item');
const closeMobileItems = document.querySelectorAll('.closeMenu');
const displayMobileMenu = () => {
  menuItem.style.display = 'block';
};
const closeMobileMenu = () => {
  menuItem.style.display = 'none';
};
document.querySelector('.openMenu').addEventListener('click', displayMobileMenu);
closeMobileItems.forEach(((element) => element.addEventListener('click', closeMobileMenu)));