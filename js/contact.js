$(document).ready(function() { // Ждём загрузки страницы
	
	$(".contact_bg").click(function(){	// Событие клика на затемненный фон	   
		$(".contact").fadeOut(800);	// Медленно убираем всплывающее окно
	});

});

function showContact() {
	$(".contact").fadeIn(800); // Медленно выводим изображение
}