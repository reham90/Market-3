let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();


/////////////////////// count down ////////////////////

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          // document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());




//////////////////////////////////////// password verefication  /////////////////////////////
$(".inputs").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next('.inputs').focus();
  }
});


  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function(e) {
      e.preventDefault();
      $('.menu-bars .bar').toggleClass('hide-icon');
      $('.menu-bars .times').toggleClass('hide-icon');
      $(".navgition").toggleClass("reset-left");
      $('.filter-section').removeClass('active');
      $("body").toggleClass("overflow");
      $("html").toggleClass("overflow");

  });
  $(".nav-head .close-btn").click(function() {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
      $("html").removeClass("overflow");
  });
  
  /////////////////////// rating ///////////////////////
  const stars = document.querySelectorAll('.star');

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('star')) {
    let clicktargetReached = false;
    for (const star of stars) {
      star.classList[clicktargetReached ? 'remove' : 'add']('selected');
      if (star === evt.target) {
        clicktargetReached = true;
      }
    }
    result.textContent = evt.target.dataset.rating;
  }
});


    ////////////////// filter in mobile //////////////////
    $('.filter-toggle').click(function(){
      $('.filter-section').toggleClass('active');
      $("body").addClass("overflow");
      $("html").addClass("overflow");
    });

    $(`.filter-times`).click(function (e) {
      $('.filter-section').toggleClass('active');
      $("body").removeClass("overflow");
      $("html").removeClass("overflow");
       
      
  });
  

 
   //slide down menu
   $(".menu-item-has-children a").click(function(e) {
         
    $(this).siblings(".sub-menu ").slideToggle(400);
  //   $(".menu-item-has-children a").not(this).siblings(".sub-menu ").slideUp(400);
    if ($(window).width() <= 991) {
     
        $(this).toggleClass("active");
        $(".menu-item-has-children a").not(this).removeClass("active");
    }
});
}

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });

 


  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
 


  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });


///////// **categories-section** /////////
var screen = new Swiper(".categories-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".categories-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".categories-slider .swiper-btn-next",
    prevEl: ".categories-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:4,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4.30,
      spaceBetween: 30,
    },
  },
});


 ///////// **discover-section** /////////
var screen = new Swiper(".discover-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".discover-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".discover-slider .swiper-btn-next",
    prevEl: ".discover-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:4,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4.30,
      spaceBetween: 30,
    },
  },
});

 ///////// **testimonials-section** /////////
 var screen2 = new Swiper(".testimonials-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".testimonials-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonials-slider .swiper-btn-next",
    prevEl: ".testimonials-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 26,
    },
    1199: {
      slidesPerView: 1,
      spaceBetween: 26,
    },
  },
});


//////////////////////////// delete product from cart ////////////////////////////////
$('.delete-product').on('click', function(){
  $(this).closest(".table-record").remove();
});

$('.delete-btn').on('click', function(){
    $(this).closest(".table-record").remove();
  });
  

   ////////////** counter  *///////////////////////////////
   var ax = 0;
   $(window).scroll(function() {
   
       var oTop = $('#counter').offset().top - window.innerHeight;
       // Md.Asaduzzaman Muhid
       if (ax == 0 && $(window).scrollTop() > oTop) {
           $('.counter-number').each(function() {
               var $this = $(this);
               jQuery({
                   Counter: 0
               }).animate({
                   Counter: $this.text()
               }, {
                   duration: 3000,
                   easing: 'swing',
                   step: function() {
                       $this.text(Math.ceil(this.Counter));
                   }
               });
           });
           ax = 1; // Md.Asaduzzaman Muhid
       }
   });
//////////////////////////////// add to cart counter  /////////////////////////////////////////

$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});



});

