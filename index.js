$('body').scrollspy({
    target: '#list-example'
})

//remove class for mobile // $(window).resize(function() { // If($(window).width() < 576) { // $( '.sticky-top').removeClass( 'sticky-top'); // } // });


// Changing the defaults
window.sr = ScrollReveal({
    reset: true
});

// Customizing a reveal set
sr.reveal('.maincontent', {
    duration: 777,
    origin: 'down',
    distance: '2px',
    mobile: false //no animation for mobile devices
});


// pulse down arrow
setInterval(function(){
 $("#gotobtn").css("opacity", "0.7");
 }, 600)

 setInterval(function(){
  $("#gotobtn").css("opacity", "0.35");
}, 1200)
