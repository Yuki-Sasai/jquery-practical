$(function() {
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    fade: true,
    autoplaySpeed: 3000, 
    speed: 1500,
  });

  $('.opacity').on({
    mouseover: function() {
      $(this).animate({opacity: 0.5}, 200);
    },
    mouseout: function() {
      $(this).animate({opacity: 1}, 200);
    }
  });

  let scrollDistance = 100;
  $(window).scroll(function() {
    if ($(this).scrollTop() > scrollDistance) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  });

  $('#scroll-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500);
  });

  $('a[href^="#"]').on('click', function() {
    let target = $(this).attr('href');
    let $target = $(target);
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 500);
  });

  $(window).scroll(function() {
    let scrollPosition = $(window).scrollTop();
    let viewportHeight = $(window).height();
    $('section').each(function() {
      let $section = $(this);
      let sectionTop = $section.offset().top;

      if (scrollPosition + viewportHeight > sectionTop && scrollPosition < sectionTop + $section.outerHeight()) {
        $section.addClass('fadeIn');
      } else {
        $section.removeClass('fadeIn');
      }
    });
  });

  $('.works img').on('click', function() {
    let imgSrc = $(this).attr('src');
    $('.modal-img').attr('src', imgSrc);
    $('.modal').fadeIn();
  });

  $('.close').on('click', function() {
    $('.modal').fadeOut();
  });

  

});



