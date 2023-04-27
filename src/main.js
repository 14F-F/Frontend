import { createApp, ref, onMounted } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Swiper from "swiper";
import AOS from "aos";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/css/style.scss';

const app = createApp(App);
const pinia = createPinia()
app.use(router);
app.use(pinia);
app.mount("#app");

// selector helper
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};
// event listener
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
        if (all) {
            selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
            selectEl.addEventListener(type, listener);
        }
    }
};
// on scroll event listener
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
};

function useMentor() {
    const backtotop = ref(null);
    const preloader = ref(null);

    onMounted(() => {
// Back to top button
        backtotop.value = select('.back-to-top');
        if (backtotop.value) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.value.classList.add('active');
                } else {
                    backtotop.value.classList.remove('active');
                }
            };
            window.addEventListener('load', toggleBacktotop);
            onscroll(document, toggleBacktotop);
        }
// Mobile nav toggle 
        on('click', '.mobile-nav-toggle', function (e) {
            select('#navbar').classList.toggle('navbar-mobile');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
// Mobile nav dropdowns activate
        on(
            'click',
            '.navbar .dropdown > a',
            function (e) {
                if (select('#navbar').classList.contains('navbar-mobile')) {
                    e.preventDefault();
                    this.nextElementSibling.classList.toggle('dropdown-active');
                }
            },
            true
        );
// Preloader
        preloader.value = select('#preloader');
        if (preloader.value) {
            window.addEventListener('load', () => {
                preloader.value.remove();
            });
        }
// Slider
        new Swiper('.slider', {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                1200: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            },
        });
// Scroll Animation (Animation On Scroll)
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    });

    return { backtotop, preloader };
}