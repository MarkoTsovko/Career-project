$(document).ready(function(){
	$('.partners__slider').slick({
		arrows: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
responsive: [
{
	breakpoint: 1199,
	settings: {
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
	}
},
{
	breakpoint: 767,
	settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	}
}
]
});
});
$( ".burger" ).click(function check() {
	$( this ).toggleClass( "burgeractive"),
	$("body").toggleClass("off"),
	$(".responsive__menu").toggleClass("display-visiable");
});
$("#modal").click(function () {
	$( ".modal" ).toggleClass( "active");
});
$( ".modal-close" ).click(function () {
	$( ".modal" ).removeClass( "active");
});
$( "#modal-happy" ).click(function () {
	$( ".modal" ).toggleClass( "active");
	$( ".modal__happy" ).toggleClass( "active");
});
$( "#modal-happy-close" ).click(function () {
	$( ".modal__happy" ).removeClass( "active");
});

