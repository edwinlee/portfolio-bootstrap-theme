$(document).ready(function() {

	setTimeout(function() {
		$('.main').addClass('loaded');
	}, 900);

	$('.photo').click(function() {
		var $this = $(this);
		$this.addClass('bounce');
		setTimeout(function(){
			$this.removeClass('bounce');
		},1500);
	});

	$('.send-message-btn').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#contact-me').offset().top
        }, 1000);
    });

});