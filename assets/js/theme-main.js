jQuery(document).ready(function() {
    
    // Needed variables
    var $plist	 	= $('.list-folio');
    var $menu		= $( '.menu-filter ul li a' );

    // Run Isotope  
    $plist.isotope({
        filter				: '*',
        layoutMode   		: 'fitRows',
        animationOptions	: {
            duration			: 750,
            easing				: 'linear'
        }
    });	

    $menu.click( function() {
        $menu.removeClass('active');
        $(this).addClass('active');

        // Isotope Filter
        var selector = $(this).attr('data-filter');

        $plist.isotope({ 
            filter				: selector,
            animationOptions	: {
                duration			: 750,
                easing				: 'linear',
                queue				: false,
            }
        });
        return false;
    } );


});//End of JQuery