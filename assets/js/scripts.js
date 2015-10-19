
jQuery(document).ready(function() {
	var yuna = "yuna";
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");

    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    $('.login-form').on('submit', function(e) {
         

    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
			
            
    		if( $(this).val() == "" || $(this).val() != yuna) {
    			e.preventDefault();
    			$(this).addClass('input-error');
                alert("Invalid credentials");
    		}
    		else {
    			$(this).removeClass('input-error');
                 
    		}


    	});

         
	});


});
