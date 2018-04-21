 
/* Плавный переход к якорю */

$(document).ready(function(){
	$("#anchor").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

/* Анимация Toggler */

$(document).ready(function(){
	$('#toggler').click(function(){
		$(this).toggleClass('is-active');
	});
});
