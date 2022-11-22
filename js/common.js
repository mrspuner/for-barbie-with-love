$(window).ready(function(){ load_scroll(); init_slider(); })
$(window).resize(function(){ load_scroll(); init_slider(); })

function load_scroll(){
	var blk = $(".dolls__right"),
		w = Math.floor($(window).width() - blk.offset().left)
	blk.width(w+"px")
}
function init_slider(){
	var speed_1 = 12000,
		speed_2 = 21000,
		speed_3 = 12000
	if(typeof blogSliderRev1 != "undefined"){
		blogSliderRev1.destroy()
		blogSliderRev2.destroy()
		blogSliderRev3.destroy()
	}
	blogSliderRev1 = new Swiper('.dolls__slider_1', {
	    wrapperClass: 'dolls__slider__wrapper',
	    slideClass: 'cinemaimg',
	    slidesPerView: 'auto',
	    direction: 'horizontal',
	    spaceBetween: 0,
	    freeMode: true,  
	    freeModeMomentum: false,
	    freeModeMomentumBounce: false,
	    speed: speed_1,
	    autoplay: {
	    	delay: 0,
	      	disableOnInteraction: true,
	  	},
	    loop: true,
	    grabCursor: true,
	});
	blogSliderRev2 = new Swiper('.dolls__slider_2', {
	    wrapperClass: 'dolls__slider__wrapper',
	    slideClass: 'cinemaimg',
	    slidesPerView: 'auto',
	    direction: 'horizontal',
	    spaceBetween: 0,
	    freeMode: true,  
	    freeModeMomentum: false,
	    freeModeMomentumBounce: false,
	    speed: speed_2,
	    autoplay: {
	    	delay: 0,
	      disableOnInteraction: true,
	      reverseDirection: true,
	  	},
	    loop: true,
	    grabCursor: true,
	});
	blogSliderRev3 = new Swiper('.dolls__slider_3', {
	    wrapperClass: 'dolls__slider__wrapper',
	    slideClass: 'cinemaimg',
	    slidesPerView: 'auto',
	    direction: 'horizontal',
	    spaceBetween: 0,
	    freeMode: true,  
	    freeModeMomentum: false,
	    freeModeMomentumBounce: false,
	    speed: speed_3,
	    autoplay: {
	    	delay: 0,
	      	disableOnInteraction: true,
	  	},
	    loop: true,
	    grabCursor: true,
	});
}


$(".mobile__menu").click(function() {
	$('body').toggleClass('menu__show');
});
$(".menu__item").click(function() {
	$('body').removeClass('menu__show');
});
$(".overflow").click(function() {
	$('body').removeClass('menu__show');
});
$(".btn__modal__close").click(function() {
	$('#fail').modal('hide');
});


$(document).ready(function() {
	var ancor = window.location.hash.replace("#","");
	if (ancor == 'success') {
			$('#success').modal('show');
	}
});

$(document).ready(function() {
	var ancor = window.location.hash.replace("#","");
	if (ancor == 'fail') {
			$('#fail').modal('show');
	}
})

$(document).ready(function() {
	if(location.hash) history.replaceState({}, document.title, location.href.split('#')[0]);
})

$('body').on('click', '.password-checkbox', function(){
	if ($(this).is(':checked')){
		$('.input__password').attr('type', 'text');
	} else {
		$('.input__password').attr('type', 'password');
	}
}); 

$(".close__tooltip").click(function() {
	$('.login__tooltip').hide('');
});


let currentUrl = window.location.hostname;
let qrImg = $(".download__qr-code");

function changeQR () {
		if (currentUrl == "dev-fbwl.ru") {
			$(qrImg).attr("src", "../images/fbwl_qr__stage.png");
		}
		else return;
}

window.addEventListener('DOMContentLoaded', changeQR);