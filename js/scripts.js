$(function(){
	var pantalla = $(window).width();
	var boton = $(".boton");

	if(pantalla > 980) {

		$(window).on("scroll", parallax(0.5));
	}
	var boton = $(".boton");

	function parallax(multiplicador) {
		var bajando = $(".contenedor");
		$(window).on("scroll", function(){
			var pantalla = $(window).scrollTop();
			bajando.css({
				backgroundPosition: "left " + (pantalla * multiplicador) + "%"
			});
		});		
	}
});
