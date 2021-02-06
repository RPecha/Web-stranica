//---------------------------FADING ANIMATIONS----------------------------------
$(function() {
    $(".slideIn").hide();
    $(".slideIn").slideDown('slow');
});
  
$(window).on("load",function() {
    $(window).on('scroll', function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fadeIn").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight(true) / 4;
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
        } 
        });
    }); 
});

//------------------------DETAILS BUTTON CLICK-----------------------------
$(function(){
    $('.details-button').on('click',function(){

      var button_details = $(this);
      var accomodation_div_container = button_details.parent().parent().parent();

      button_details.children().toggle(); //swaps the display:none between the two spans
      button_details.toggleClass('selected'); //switches button active state

      accomodation_div_container.find('.details').toggleClass('selected');  //extends detail content so it's visible
    });
});


//---------------------------DROPDOWN OPEN------------------
//open dropdown on mobile view
$(function() { 
    $('.dropdown').on('click', function() {
         $('.dropdown-content').slideToggle();
     });
});