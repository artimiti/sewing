const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  loop: true,

  breakpoints: {
		560: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		960: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},


  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

});


// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Калькулятор
import calculation from './modules/calculation.js';
calculation();

// Accordeon
import accordeon from './modules/accordeon.js';
accordeon();

