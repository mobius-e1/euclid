var burger = document.querySelector('.header__menu-dropdown')
var menu = document.querySelector('.header__menu')
var menuLinks = document.querySelectorAll('.header__menu-item-link')

burger.addEventListener('click',
  function () {
    burger.classList.toggle('header__menu-dropdown--active')
    menu.classList.toggle('header__menu--active')
    document.body.classList.toggle('stop-scroll')
  })

menuLinks.forEach(function (element) {
  element.addEventListener('click', function () {
    burger.classList.remove('header__menu-dropdown--active')
    menu.classList.remove('header__menu--active')
  })
})




const swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    loop: true,
  },
});




var search = document.querySelector(".search-box");
var loupe = document.querySelector(".search-box__loupe");
var close = document.querySelector(".search-box__close");

loupe.addEventListener("click", () => {
  search.classList.add("active");
});
close.addEventListener("click", () => {
  search.classList.remove("active");
});




var step = document.querySelectorAll('.how__steps-item-step');
var content = document.querySelectorAll('.how__content-item');

step.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    step.forEach(function (btn) { btn.classList.remove('how__steps-item-step--active') });
    e.currentTarget.classList.add('how__steps-item-step--active');
    content.forEach(function (element) { element.classList.remove('how__content-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__content-item--active');
  });
});




var acontent = document.querySelectorAll('.accordion-content');
var atitle = document.querySelectorAll('.accordion-content .title');

for (i = 0; i < atitle.length; i++) {
  atitle[i].onclick = function () {
    var contentClass = this.parentNode.className;
    for (i = 0; i < acontent.length; i++) {
      acontent[i].className = 'accordion-content hide';
    }
    if (contentClass == 'accordion-content hide') {
      this.parentNode.className = 'accordion-content show';
    }
  }
}