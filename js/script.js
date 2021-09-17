function init() {
    // event listener
    document.querySelector('article').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            closeMenu();
        }
    });

    document.querySelector('footer').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            closeMenu();
        }
    });

    document.querySelector('.collapse-nav').addEventListener('click', () => {
        if (document.querySelector('.collapse-nav').style.visibility == 'visible') {
            closeMenu();
        }
    });


    // for scroll
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector('.top-bar').classList.add('fadeInUp');
            document.querySelector('.main-bar').classList.add('fadeInUp');            
            document.querySelector(".top-bar").style.display = "none";
            document.querySelector(".main-bar").style.display = "none";
            document.querySelector('.sub-nav').classList.remove('fadeInUp');
            document.querySelector('.sub-nav').classList.add('fadeInDown');
        } else {
            document.querySelector(".top-bar").style.display = "block";
            document.querySelector(".main-bar").style.display = "block";
            document.querySelector('.sub-nav').classList.remove('fadeInDown');
            document.querySelector('.sub-nav').classList.add('fadeInUp');

        }
    }

    // for swiper
    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
    
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
    
        // for autoplay
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
    
      });
}

// for serch input 
function showSearchBox() {
    document.querySelector('.input-pop-up').style.display = 'inline-block';
    document.querySelector('.input-pop-up').classList.add('fadeInRight');

}

function closeSearchBox(){
    document.querySelector('.input-pop-up').style.display = "none";
}

// for open collapse menu
function openCollapseMenu() {
    document.querySelector('.collapse-nav').style.transition = '800ms';
    document.querySelector('.collapse-nav').style.visibility = 'visible';
    document.querySelector('.collapse-nav').classList.remove('fadeOutLeft');
    document.querySelector('.collapse-nav').classList.add('fadeInLeft');
    document.querySelector('#collapse-close-btn').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
}


// for close collapse menu
function closeMenu() {
    document.querySelector('.collapse-nav').classList.remove('fadeInLeft');
    document.querySelector('.collapse-nav').classList.add('fadeOutLeft');
    document.querySelector('.collapse-nav').style.visibility = 'hidden';
    document.querySelector('#collapse-close-btn').style.display = 'none';
    document.querySelector('body').style.overflow = 'scroll';

}

