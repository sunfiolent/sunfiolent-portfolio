$(document).ready(function() {

	$("#form-mail").submit(function() {
        console.log($);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			// alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('#exampleModalCenter').modal();
			$("#form-mail").trigger("reset");
		});
		return false;
	});
	
});