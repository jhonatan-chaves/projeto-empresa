import {SlideNav} from './slide.js';



const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();

// a linha de baixo deixa o slide infinito
//slide.startAutoSlide();

//botoes sem stilizar mais funcional
//slide.addArrow('.prev', '.next');
