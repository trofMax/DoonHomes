// Slider Config

$(document).ready(function(){
  $('.testimonials-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
});
  
// Slider config END

// Mobile Nav

$(function() {
  function init() {
    $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
    $('.dropdown-link-1').on('click', toggleSubMenu1);
    $('.dropdown-link-2').on('click', toggleSubMenu2);
  };
  
  function toggleMenuIcon() {
    $(this).toggleClass('menu-icon--open');
    $('[data-element="toggle-nav"]').toggleClass('nav-mob--active');
  };
  
  function toggleSubMenu1() {
    $(".nav__sub-list-1").slideToggle();
  };
  function toggleSubMenu2() {
    $(".nav__sub-list-2").slideToggle();
  };  
  init()
});

// Mobile Nav END

// Tabs
$('.tab').not('.tab-active').click(function(){

    var index = $(this).index();

    var content = $('.tab-content').eq(index);
    
    $(this).addClass('tab-active').siblings().removeClass('tab-active');
    
    $('.tab-content').css('display', 'none').eq(index).css('display', 'block');
})

$(function(){
  $('.tab-2').addClass('tab-active');
  $('.tab-1_content').css('display', 'block');
})

$(document).ready(function() { // Ждём загрузки страницы
  
  $(".zoom-img").click(function(){ // Событие клика на маленькое изображение
      var img = $(this);  // Получаем изображение, на которое кликнули
    var src = img.attr('src'); // Достаем из этого изображения путь до картинки
    $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
             "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
             "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
             "<span class='close'></span>"+
             "</div>"); 
    $(".popup").fadeIn(800); // Медленно выводим изображение
    $(".popup_bg").click(function(){  // Событие клика на затемненный фон    
      $(".popup").fadeOut(800); // Медленно убираем всплывающее окно
      setTimeout(function() { // Выставляем таймер
        $(".popup").remove(); // Удаляем разметку всплывающего окна
      }, 800);
    });
  });
  
});