const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', function () {
  this.classList.toggle('active');
  this.src = this.classList.value.includes('active')
    ? '/images/icon-close.svg'
    : '/images/icon-hamburger.svg';
});
