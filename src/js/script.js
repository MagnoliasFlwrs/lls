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
        spaceBetween: 20,
        navigation: {
            nextEl: '.tutorial-swiper-next',
            prevEl: '.tutorial-swiper-prev',
        },
        on: {
            slideChange: function () {
                const slides = tutorialSwiper.querySelectorAll('.swiper-slide');
                const lastSlide = slides[slides.length - 1];

                // Проверяем, находится ли последний слайд в поле видимости
                if (swiper.isEnd) {
                    lastSlide.style.marginRight = '100px';
                } else {
                    lastSlide.style.marginRight = '0';
                }
            },
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

const financeSwipers = document.querySelectorAll('.financial-swiper');
financeSwipers?.forEach(financeSwiper => {
    new Swiper(financeSwiper, {
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
});


document.addEventListener('DOMContentLoaded', () => {
    const copyIcons = document.querySelectorAll('.copy-icon');

    copyIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
            const copyPart = icon.closest('.copy-row').querySelector('.copy-part').textContent;

            navigator.clipboard
                .writeText(copyPart)
                .then(() => {
                    showNotification(icon);
                })
                .catch((err) => console.error('Ошибка копирования:', err));
        });
    });

    function showNotification(icon) {
        // Находим элемент уведомления и меняем текст на "Скопировано"
        const notification = icon.querySelector('.copy-notification');
        notification.classList.add('show-notification'); // добавляем класс для показа уведомления
        notification.querySelector('.text').textContent = 'Скопировано';

        // Через 2 секунды удаляем класс для скрытия уведомления
        setTimeout(() => {
            notification.classList.remove('show-notification');
            notification.querySelector('.text').textContent = 'Скопировать'; // возвращаем исходный текст
        }, 2000);
    }
});






const partnersSideBtn = document.querySelector('.partners-side');
const privateSideBtn = document.querySelector('.private-side');

partnersSideBtn.addEventListener('click', () => {
    partnersSideBtn.classList.add('red-btn');
    privateSideBtn.classList.remove('red-btn');
    document.querySelector('body').classList.add('partners-container');
    document.querySelector('body').classList.remove('private-container');
})
privateSideBtn.addEventListener('click', () => {
    privateSideBtn.classList.add('red-btn');
    partnersSideBtn.classList.remove('red-btn');
    document.querySelector('body').classList.remove('partners-container');
    document.querySelector('body').classList.add('private-container');
})



// new

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.contacts-tabs-panel li');
    const tabContents = document.querySelectorAll('.contacts-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            document.querySelector(`.contacts-tab-content[data-tab="${tabId}"]`).classList.add('active');
        });
    });

    // Активируем первый таб по умолчанию
    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
});

const contactModal = document.querySelector('.contact-modal');
const contactModalContent = document.querySelector('.contact-modal-content');
const contactModalOpenBtns = document.querySelectorAll('.contact-link');
const contactModalCloseBtns = document.querySelectorAll('.contact-modal-close-btn');

function openModal() {
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
}

contactModalOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
});

contactModalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && contactModal.classList.contains('active')) {
        closeModal();
    }
});



const newsSwiper = document.querySelector('.news-swiper');

if (newsSwiper) {
    const swiper = new Swiper(newsSwiper, {
        slidesPerView: 1.2,
        spaceBetween: 24,
        navigation: {
            nextEl: '.news-btn-next',
            prevEl: '.news-btn-prev',
        },
        breakpoints: {
            662: {
                slidesPerView: 1.5,
            },
            800: {
                slidesPerView: 2.1,
                spaceBetween: 36,
            },
            1100: {
                slidesPerView: 2.4,
                spaceBetween: 36,
            }
        }
    });
}


document.querySelectorAll('.play').forEach(playBtn => {
    playBtn.addEventListener('click', () => {
        const slide = playBtn.closest('.swiper-slide'); // Находим слайд
        const video = slide.querySelector('video'); // Находим видео внутри слайда

        document.querySelectorAll('video').forEach(v => {
            if (v !== video) {
                v.pause();
                v.currentTime = 0; // Сбрасываем на начало
                const otherPlayBtn = v.closest('.swiper-slide').querySelector('.play');
                otherPlayBtn.querySelector('img').src = 'https://lls.by/wp-content/uploads/2024/10/play.png';
            }
        });

        if (video.paused) {
            video.play();
            playBtn.querySelector('img').src = 'https://lls.by/wp-content/uploads/2024/11/pause.png';
        } else {
            video.pause();
            playBtn.querySelector('img').src = 'https://lls.by/wp-content/uploads/2024/10/play.png';
        }
    });
});



