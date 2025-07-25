(function ($) {
	"use strict";

	var windowOn = $(window);

	/*===========================================
		=            PreLoader Js         =
	=============================================*/

	$(window).on('load', function () {
		$(".preloader").fadeOut(500);
		wowAnimation();
	});


	/*===========================================
		=            header-sticky          =
	=============================================*/
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 200) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	if ($('.td-header-height').length > 0) {
		var headerHeight = document.querySelector(".td-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;
		$(".td-header-height").each(function () {
			$(this).css({
				'height': $(this).height()
			});
		});
	}

	/*=============================================
		=        Team Social Active 	       =
	=============================================*/
	$('.social-toggle-icon').on('click', function () {
		$(this).parent().find('ul').slideToggle(400);
		$(this).find('i').toggleClass('fa-times');
		return false;
	});


	/*=============================================
		=        mouseenter events	   =
	=============================================*/

	$(document).on('click', '.size-list span', function () {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	})

	/*===========================================
		=    		Mobile Menu			      =
	=============================================*/
	//SubMenu Dropdown Toggle
	if ($('.tdmenu__wrap li.menu-item-has-children ul').length) {
		$('.tdmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
	}

	// header-sticky
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 200) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	if ($('.td-header-height').length > 0) {
		var headerHeight = document.querySelector(".td-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;
		$(".td-header-height").each(function () {
			$(this).css({
				'height': $(this).height()
			});
		});
	}

	//Mobile Nav Hide Show
	if ($('.tdmobile__menu').length) {

		var mobileMenuContent = $('.tdmenu__wrap .tdmenu__main-menu').html();
		$('.tdmobile__menu .tdmobile__menu-box .tdmobile__menu-outer').append(mobileMenuContent);

		//Dropdown Button
		$('.tdmobile__menu').on('click', 'li.menu-item-has-children > .dropdown-btn', function (e) {
			e.preventDefault();
			const $btn = $(this);
			const $submenu = $btn.prev('ul');

			// close sibling menus at the same level
			const $parentLi = $btn.closest('li.menu-item-has-children');
			$parentLi.siblings('.menu-item-has-children').each(function () {
				$(this).children('.dropdown-btn').removeClass('open');
				$(this).children('ul.sub-menu').slideUp(300);
			});

			// toggle current submenu
			$btn.toggleClass('open');
			$submenu.slideToggle(300);
		});


		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.tdmobile__menu-backdrop, .tdmobile__menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
	};


	/*===========================================
		=     Menu sticky & Scroll to top      =
	=============================================*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$('.scroll-to-target').removeClass('open');
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$('.scroll-to-target').addClass('open');
			$("#header-fixed-height").addClass("active-height");
		}
	});


	/*===========================================
		=           Scroll Up  	         =
	=============================================*/
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 0);

		});
	}

	/*===========================================
	=          cartmini Js    =
	=============================================*/
	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("openeds");
	});

	$(".cartmini-close-btn, .body-overlay").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("openeds");
	});

	/*===========================================
		=          Data Background    =
	=============================================*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width") + "px");
	});

	/*=============================================
		=            Header Search            =
	=============================================*/
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
	});

	/*=============================================
	=     Offcanvas Menu      =
	=============================================*/
	$(".menu-tigger").on("click", function () {
		$(".offCanvas__info, .offCanvas__overly").addClass("active");
		return false;
	});
	$(".menu-close, .offCanvas__overly").on("click", function () {
		$(".offCanvas__info, .offCanvas__overly").removeClass("active");
	});



	/*=============================================
		=    		Isotope	Active  	      =
	=============================================*/
	$('.project-active-two').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.project-active-two').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-item',
			}
		});
		// filter items on button click
		$('.project__menu-nav').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

	});
	//for menu active class
	$('.project__menu-nav button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});




	/*===========================================
		=       Odometer Active    =
	=============================================*/
	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});


	/*===========================================
		=        Magnific Popup    =
	=============================================*/
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	/*===========================================
		=        magnificPopup video view    =
	=============================================*/
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	/*===========================================
		=        Wow Active      =
	=============================================*/
	function wowAnimation() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();
	}

	/*=============================================
		=       jarallax Js	      =
	=============================================*/
	if ($('.jarallax').length > 0) {
		$('.jarallax').jarallax({
			speed: 0.2,
			imgWidth: 1200,
			imgHeight: 520,
		});
	};


	/*=============================================
		=       Nice Select Js      =
	=============================================*/
	$('.select').niceSelect();

	/*=============================================
		=        countdown	   =
	=============================================*/
	function makeTimer() {
		var endTime = new Date("18 sep 2025 8:30:00 GMT+03:00");
		endTime = (Date.parse(endTime) / 1000);
		var now = new Date();
		now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$(".days").html(days + "<span>Дней</span>");
		$(".hours").html(hours + "<span>Часов</span>");
		$(".minutes").html(minutes + "<span>Мин</span>");
		$(".seconds").html(seconds + "<span>Сек</span>");
	}
	setInterval(function () { makeTimer(); }, 1000);


	/*=============================================
		=     td-text-slider-active	   =
	=============================================*/
	var td_text_slider = new Swiper(".td-text-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 7000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	/*=============================================
		=     td-hero-3-zoom	   =
	=============================================*/
	var slider = new Swiper('.td-hero-3-zoom', {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 0,
		// loop: true,
		autoplay: {
			delay: 3500,
		},
		touchReleaseOnEdges: true,
		watchOverflow: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".td-hero-3-next",
			prevEl: ".td-hero-3-prev",
		},
	});


	/*=============================================
		=     td-testimonial-3-slider	   =
	=============================================*/
	var slider = new Swiper('.td-testimonial-3-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 3500,
		},
		navigation: {
			nextEl: ".td-testimonial-3-next",
			prevEl: ".td-testimonial-3-prev",
		},
	});

	/*=============================================
		=        increment-decrement	      =
	=============================================*/

	$('.decrement').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.increment').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	/*=============================================
		=       slider-range-min5	      =
	=============================================*/
	$("#slider-range2").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$("#amount5").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount5").val("$" + $("#slider-range2").slider("values", 0) +
		" - $" + $("#slider-range2").slider("values", 1));


	/*=============================================
		=       grid-view-area	      =
	=============================================*/


	var gridViewBtn = $(".grid-view");
	var listViewBTn = $(".list-view");

	$(gridViewBtn).on("click", function () {
		$(this)
			.addClass("active")
			.parent(".list-switch-item")
			.siblings()
			.children()
			.removeClass("active");
		$(".list-card").removeClass("list-card-open");
	});

	$(listViewBTn).on("click", function () {
		$(this)
			.addClass("active")
			.parent(".list-switch-item")
			.siblings()
			.children()
			.removeClass("active");
		$(".list-card").addClass("list-card-open");
	})




	/*=============================================
		=        productTabMarker	      =
	=============================================*/

	if ($('#productTabMarker').length > 0) {
		function td_tab_line_2() {
			var marker = document.querySelector('#productTabMarker');
			var item = document.querySelectorAll('.td-product-tab button');
			var itemActive = document.querySelector('.td-product-tab .nav-link.active');

			function indicator(e) {
				marker.style.left = e.offsetLeft + "px";
				marker.style.width = e.offsetWidth + "px";
			}


			item.forEach(link => {
				link.addEventListener('click', (e) => {
					indicator(e.target);
				});
			});

			var activeNav = $('.nav-link.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;

			var precedingAnchorWidth = anchorWidthCounter();


			$(marker).css('display', 'block');

			$(marker).css('width', totalWidth);

			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.td-product-tab button').each(function (index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft + "px";
					if (activeTest) {
						// Break out of the each function.
						return false;
					}

					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;

					anchorWidths = anchorWidths + aTotalWidth;

				});

				return anchorWidths;
			}
		}
		td_tab_line_2();
	}

	$("body").on("click", ".anchor", function (e) {
		// e.preventDefault();
		// console.log('click')
		// let header_offset = 0,
		// 	$thisHash = $(this.hash),
		// 	$thisHashOffset,
		// 	$duration = 1000,
		// 	BodyScroll
		// console.log($thisHash, $thisHashOffset)
		// console.log(header_offset)
		// $thisHashOffset = $thisHash.offset().top
		// let $scrollTop = $thisHashOffset
		// if (BodyScroll != 0 && BodyScroll != undefined) {
		//     $scrollTop = $scrollTop + BodyScroll
		// }
		// console.log($scrollTop)
		if ($(window).width() < 1200 && $(this).closest('.tdmobile__menu-outer').length) {
			$('.tdmobile__menu .close-btn').trigger('click')
		}

		// $("html, body")
		// 	.stop()
		// 	.animate(
		// 		{
		// 			scrollTop: $scrollTop,
		// 		},
		// 		{
		// 			duration: $duration, // продолжительность анимации
		// 			easing: "linear", // скорость анимации
		// 			queue: false // не ставим в очередь
		// 		}
		// 	);
		// e.preventDefault();
		// return false;
	});

	let ScheduleItems
	if ($('.td-schedule-area:not(.td-schedule-area--2)').length) {
		ScheduleItems = $('.td-schedule-area:not(.td-schedule-area--2) .td-schedule-item')
		console.log(ScheduleItems)
		if (ScheduleItems.length > 7) {
			console.log(ScheduleItems.eq(6))
			ScheduleItems.eq(6).nextAll().hide().addClass('hide')
			ScheduleItems.eq(6).find('.td-schedule-time').addClass('last')
			ScheduleItems.eq(6).find('.td-schedule-details').addClass('last')
		}
	}

	let ScrollTopSchedule
	$('.td-schedule-area:not(.td-schedule-area--2) .link').on('click', function (e) {
		e.preventDefault()
		const $this = $(this)
		$this.toggleClass('open')
		if ($this.hasClass('open')) {
			ScheduleItems.eq(6).nextAll().fadeIn().removeClass('hide')
			ScheduleItems.eq(6).find('.td-schedule-time').removeClass('last')
			ScheduleItems.eq(6).find('.td-schedule-details').removeClass('last')
			ScrollTopSchedule = $(window).scrollTop()
		}
		else {
			ScheduleItems.eq(6).nextAll().hide().addClass('hide')
			ScheduleItems.eq(6).find('.td-schedule-time').addClass('last')
			ScheduleItems.eq(6).find('.td-schedule-details').addClass('last')
			window.scrollTo(0, ScrollTopSchedule)
		}
		const TempText = $this.find('span').text(),
			$thisAttr = $this.find('span').attr('data-text')
		$this.find('span').text($thisAttr)
		$this.find('span').attr('data-text', TempText)
	})


})(jQuery);

ymaps.ready(init);
function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.76, 37.64],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 7
	});
}