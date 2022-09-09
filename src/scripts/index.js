const tabsBtn = document.querySelectorAll(".tabs__nav_btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach ((item => {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('active')){
        tabsBtn.forEach((item => {
            item.classList.remove('active');
        }))

        tabsItems.forEach((item => {
            item.classList.remove('active');
        }))

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    }
    })
}))

var swiper = new Swiper(".card_slider", {
    slidesPerView: 1,
    spaceBetween: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    mousewheel: {
        sensitivity: 1,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    breakpoints:{
        290: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
        1290: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 5,
        },
    },
  });
  

  //FAMILY SLIDER

  var swiper = new Swiper(".family_slider_swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });

  //BENEFIT SLIDER

  var swiper = new Swiper(".benefits_slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: false,
      grid: {
        rows: 4,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        820: {
            slidesPerView: 2,
            grid: {
                rows: 4,
              },
        },
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });

  //REVIEWS

  var swiper = new Swiper(".reviews_slider", {
    effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        spaceBetween: 100,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });