function navToggle() {
    var $nav = $('.navigation');
    var $navToggle = $('.nav-toggle');
    var $toggleIcon = $('.nav-toggle-icon');

    $navToggle.on('click', function() {
        $nav.toggleClass('nav-change');
        $toggleIcon.toggleClass('toggle-change');
    })
}

function animate() {
    var animationOne = anime({
        targets: '.test-img',
        keyframes: [
            {translateY: 230},
            {translateY: 150},
            {scale: 0.5},
            {scale: 1},
            {translateY: -230}
        ],
        duration: 1500,
        easing: 'easeOutElastic(1, .8)',
        autoplay: false
    });
    var animationTwo = anime({
        targets: '.header',
        backgroundColor: '#BF2222',
        delay: 500,
        autoplay: false
    })
    var headerTransparent = anime({
        targets: '.header',
        keyframes: [
            {backgroundColor: "rgba(0, 0, 0, 0)"}
        ],
        delay: 500,
        duration: 1500,
        autoplay: false
    })
    
    var $header = $('.header');
    var $logo = $('.logo-link');
    var $lowerHeader = $('.lower-header');
    var $navLink = $('.nav-link');
    var $deliveryLink = $('.h-delivery-link');
    var $navigation = $('.navigation');
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100 && $header.css('background-color') == "rgba(0, 0, 0, 0)") {
            animationOne.play();
            animationTwo.play();
            $header.addClass('padding-header');
            $logo.addClass('padding-logo-link');
            $lowerHeader.addClass('lower-header-fix');
            $navLink.addClass('nav-link-color');
            $deliveryLink.addClass('h-delivery-link-color');
            $navigation.addClass('nav-color');
        } else if(scroll < 100 && $header.css('background-color') == "rgb(191, 34, 34)") {
            $header.removeClass('padding-header');
            $logo.removeClass('padding-logo-link');
            $lowerHeader.removeClass('lower-header-fix');
            $navLink.removeClass('nav-link-color');
            $deliveryLink.removeClass('h-delivery-link-color');
            $navigation.removeClass('nav-color');
            headerTransparent.play();
        }
    });
}

function nav() {
    var $navigation = $(".navigation");
	var $navLink = $('.nav-link');
    var $section = $('.js-section');
    var $icon = $('.nav-toggle-icon');

	$navLink.each(function(i) {
		var $this = $(this);
		$this.attr('data-index', i);
	});
	$section.each(function(i) {
		$(this).attr('data-index', i);
	});

	$navLink.on('click', function() {
		var index = $(this).data('index');
        var sectionOffset = $('.js-section[data-index="'+ index + '"]').offset().top - 105;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
        $navigation.toggleClass('nav-change');
        $icon.toggleClass('toggle-change');
	});
}



animate();
nav();
navToggle();

var mySwiper = new Swiper('.discover-swiper', {
    // Optional parameters
    speed: 500,
    direction: 'horizontal',
    loop: true,
  
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })