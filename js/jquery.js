$(function() {

    //------------------------SLIDING ANIMATIONS----------------------------------

    $(".slideTop").each(function() {
        if ($(this).visible(true)) {
            $(this).addClass('come-top');
        }
    });

    if($(".slideLeft").visible(true)){
        $(".slideLeft").addClass('come-left');
    }
    else {
        $(window).on('scroll', function() {
            $(".slideLeft").each(function() {
                if ($(this).visible(true)) {
                    $(this).addClass('come-left');
                }
            });
        });
    }

    //------------------------DETAILS BUTTON CLICK-----------------------------

    $('.details-button').on('click', function() {

        var button_details = $(this);
        var accomodation_div_container = button_details.parent().parent().parent();

        button_details.children().toggle(); //swaps the display:none between the two spans
        button_details.toggleClass('selected'); //switches button active state

        accomodation_div_container.find('.details').toggleClass('selected'); //extends detail content so it's visible
    });



    //---------------------------DROPDOWN OPEN------------------
    //open dropdown on mobile view

    $('.dropdown').on('click', function() {
        $('.dropdown-content').slideToggle();
    });
});