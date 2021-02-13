//------------------CONTENT INTIALIZATION-------------------
document.addEventListener('DOMContentLoaded', function() {
    //------------------SPLIDE GALLERY SLIDERS------------------
    //-----------------TOWN SPLIDE INIT----------------
    //initalizes town splide carousel
    new Splide('#main-splide', {
        type: 'fade',
        cover: true,
        height: '90vh',
        width: '100%',
        lazyLoad: 'sequential',
        rewind: true,
    }).mount();

    //---------------DETAIL SPLIDES INIT---------------------
    var splides = document.getElementsByClassName('details-splide');

    //intialization of all detail carousels
    for (var i = 0, len = splides.length; i < len; i++) {
        new Splide(splides[i], {
            cover: true,
            heightRatio: 0.8,
            type: 'fade',
            width: '100%',
            lazyLoad: 'nearby',
            rewind: true,
        }).mount();
    }

    //----------------------FULL CALENDAR-------------------------

    var calendars = document.getElementsByClassName('details-calendar');

    var todayDate = new Date();
    var yearToDisplay = todayDate.getFullYear();

    //get current year and check if date is 
    //before october and adjust displayed year
    if (todayDate.getMonth() < 11)
        yearToDisplay = todayDate.getFullYear();
    else
        yearToDisplay = todayDate.getFullYear() + 1;


    //intialization of all detail calendars
    for (var i = 0, len = calendars.length; i < len; i++) {

        var goggleCalendarIds = ["3fd17ppbjsbih76o9tief3kg9o@group.calendar.google.com",
            "pk8jmcpce3cofvcsling4jorv4@group.calendar.google.com"
        ];

        var calendar = new FullCalendar.Calendar(calendars[i], {
            initialView: 'dayGridMonth',
            locale: 'hr',
            height: 'auto',
            initialDate: yearToDisplay + '-06-01',
            googleCalendarApiKey: 'AIzaSyCx22YGuXe6HiTFAxD_pnFaSx-16hZMKbE',
            events: {
                googleCalendarId: goggleCalendarIds[i],
                display: 'background'
            }
        });
        calendar.render();
    }
});

//hides or shows header element if scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
}


// This prevents the page from scrolling down to where it was previously.
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
// This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
window.scrollTo(0, 0);