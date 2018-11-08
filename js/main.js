function setNavigationActive (target, swiper, duration) {
    if (target.classList.contains('heroWrapper__bottomSliderNavTarget--active') || !target.classList.contains('heroWrapper__bottomSliderNavTarget')) {
        return
    }
    updateNavigationTarget(target);
    const pos = target.getAttribute('data-pos');
    makeSlideActive(pos, swiper, duration);
}

function updateNavigationTarget(target) {
    document.querySelector('.heroWrapper__bottomSliderNavTarget--active').classList.remove('heroWrapper__bottomSliderNavTarget--active');
    target.classList.add('heroWrapper__bottomSliderNavTarget--active');
}

function makeSlideActive (pos, swiper, duration) {
    if (pos == 1) {
        swiper.slidePrev(duration);
    } else {
        swiper.slideNext(duration);
    }
}

function showBottomSlider () {
    var bottom = document.getElementById('hero-wrapper-bottom');
    bottom.classList.add('heroWrapper__bottom--active');
    setTimeout(function () {
        bottom.classList.add('heroWrapper__bottom--animated');
    }, 300);
}

window.onload = function () {
    var prominentText = document.getElementById('prominent-text');
    var socialText = document.getElementById('we-should-talk');
    if (window.innerWidth > 1023) {
        
        var productCard = document.getElementById('product-card');
        var socialCard = document.getElementById('social-card');
         // Initially they have display: none to prevent a flash of content while the css is loaded
        productCard.style = '';
        socialCard.style = '';

        prominentText.addEventListener('mouseover', function (e) {
            productCard.classList.remove('cardWrapper--hidden');
        });
        prominentText.addEventListener('mouseout', function (e) {
            productCard.classList.add('cardWrapper--hidden');
        });
        // Once visible remains there
        socialText.addEventListener('mouseover', function (e) {
            socialCard.classList.remove('cardWrapper--hidden');
        });
    } else {
        // Mobile
        var bottom = document.getElementById('hero-wrapper-bottom');
        var slideTarget = document.getElementById('slide-target');
        var bottomNavigation = document.getElementById('bottom-navigation');

        var swiper = new Swiper('.swiper-container', {
            init: true,
            speed: 300,
            resistance: false
        });
        swiper.on('slideNextTransitionStart', function () {
            var target = document.querySelector('.heroWrapper__bottomSliderNavTarget[data-pos="2"]');
            updateNavigationTarget(target);
        });
        swiper.on('slidePrevTransitionStart', function () {
            var target = document.querySelector('.heroWrapper__bottomSliderNavTarget[data-pos="1"]');
            updateNavigationTarget(target);
        });

        slideTarget.addEventListener('click', function (e) {
            bottom.classList.toggle('heroWrapper__bottom--active');
            setTimeout(function () {
                bottom.classList.toggle('heroWrapper__bottom--animated');
            }, 300);
        })

        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target;
            setNavigationActive(target, swiper);
        });

        prominentText.addEventListener('click', function (e) {
            var pos = 1;
            var el = document.querySelector('.heroWrapper__bottomSliderNavTarget[data-pos="' + pos + '"]');
            setNavigationActive(el, swiper, 0);
            showBottomSlider();
        });
        // Once visible remains there
        socialText.addEventListener('click', function (e) {
            var pos = 2;
            var el = document.querySelector('.heroWrapper__bottomSliderNavTarget[data-pos="' + pos + '"]');
            setNavigationActive(el, swiper, 0);
            showBottomSlider();
        });
    }
}