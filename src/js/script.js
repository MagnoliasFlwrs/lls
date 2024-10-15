const menuButton = document.getElementById('menuButton');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton?.addEventListener('click', () => {
    if (!menuButton.classList.contains('open')) {
        menuButton.classList.add('open');
        mobileMenu.classList.add('open');
    } else {
        menuButton.classList.remove('open');
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');

        setTimeout(() => {
            mobileMenu.classList.remove('close');
        }, 1000)
    }
});
const advantagesSwiper = document.querySelector('.advantages-swiper');

if (advantagesSwiper) {
    const swiper = new Swiper(advantagesSwiper, {
        loop: true,
        slidesPerView: 1.1,
        spaceBetween: 24,
        breakpoints: {
            500: {
                slidesPerView: 1.5,
            },
            662: {
                slidesPerView: 2.1,
            },
            900: {
                slidesPerView: 3.1,
            },

            1092: {
                slidesPerView: 3.5,
            },
            1256: {
                slidesPerView: 4,
            }
        }
    });
}

const financialProductsSwiper = document.querySelector('.financial-products-swiper');

if (financialProductsSwiper) {
    const swiper = new Swiper(financialProductsSwiper, {
        slidesPerView: 1,
        navigation: {
            nextEl: '.financial-products-swiper-next',
            prevEl: '.financial-products-swiper-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            662: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            }
        }
    });
}
const partnersAdvantagesSwiper = document.querySelector('.partners-advantages-swiper');
if (partnersAdvantagesSwiper) {
    const swiper = new Swiper(partnersAdvantagesSwiper, {
        loop: true,
        slidesPerView: 1.3,
        spaceBetween: 36,
        breakpoints: {
            500: {
                slidesPerView: 1.5,
            },
            662: {
                slidesPerView: 2.1,
            },
            900: {
                slidesPerView: 2.1,
            },

            1092: {
                slidesPerView: 2.5,
            },
            1256: {
                slidesPerView: 3,
            }
        }
    });
}

const tutorialSwiper = document.querySelector('.tutorial-swiper');
if (tutorialSwiper) {
    const swiper = new Swiper(tutorialSwiper, {
        slidesPerView: 1.2,
        spaceBetween:20,
        navigation: {
            nextEl: '.tutorial-swiper-next',
            prevEl: '.tutorial-swiper-prev',
        },
    });
}

const accordeonItems = document.querySelectorAll('.accordion-item');

accordeonItems?.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', function () {

        accordeonItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.maxHeight = null;
            }
        });

        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});

// tabs

window.addEventListener('DOMContentLoaded', (event) => {
    const tabsBtns = document.querySelectorAll('.tabs-panel li');
    const tabs = document.querySelectorAll('.tab-container .tab-content');
    const title = document.querySelector('.terms-block-title');

    if (tabsBtns) {
        tabsBtns.forEach(function (el) {
            if (!el.classList.contains('tabs-panel-wrapper')) {
                el.addEventListener('click', function (ev) {
                    const clickedTab = ev.target.closest('li');
                    makeActive(clickedTab);
                    updateTitle(clickedTab); // Обновляем заголовок
                });
            }
        });
    }

    function makeActive(target) {
        let num = target.dataset.num;
        let selector = `.tab-container .tab-content[data-num="${num}"]`;
        let targetTab = document.querySelector(selector);

        tabsBtns.forEach(el => el.classList.remove('active'));
        tabs.forEach(el => el.classList.remove('active'));

        target.classList.add('active');
        targetTab.classList.add('active');
    }

    function updateTitle(target) {
        title.textContent = target.textContent.trim();
    }
});

const forPartnersSwiper = document.querySelector('.for-partners-swiper');
const forLeasingSwiper = document.querySelector('.for-leasing-swiper');
const companySwiper = document.querySelector('.company-swiper');
if (forPartnersSwiper) {
    const swiper = new Swiper(forPartnersSwiper, {
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 24,
        breakpoints: {
            662: {
                slidesPerView: 2.5,
            },
            890: {
                slidesPerView: 3.5,
            },
            1256: {
                slidesPerView: 4.5,
            }
        }
    });
}
if (forLeasingSwiper) {
    const swiper = new Swiper(forLeasingSwiper, {
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 24,
        breakpoints: {
            662: {
                slidesPerView: 2.5,
            },
            890: {
                slidesPerView: 3.5,
            },
            1256: {
                slidesPerView: 4.5,
            }
        }
    });
}
if (companySwiper) {
    const swiper = new Swiper(companySwiper, {
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 24,
        breakpoints: {
            662: {
                slidesPerView: 2.5,
            },
            890: {
                slidesPerView: 3.5,
            },
            1256: {
                slidesPerView: 4.5,
            }
        }
    });
}
