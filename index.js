// pulse down arrow
setInterval(function() {
  $("#gotobtn").css("opacity", "0.5");
}, 1000)
setInterval(function() {
  $("#gotobtn").css("opacity", "1");
}, 2000)

//fixed navibationbar
$('body').scrollspy({target: '#list-example', offset: 1})

//external links to parteneri
var ext_links = document.getElementById('external-links').children[0]
var copy_links = ext_links.cloneNode(true);
document.getElementById('repeat_ext_links').appendChild(copy_links)

// Changing the defaults for Animation
window.sr = ScrollReveal({reset: true});

// Customizing a reveal set
// sr.reveal('.maincontent', {
//   duration: 777,
//   origin: 'down',
//   distance: '2px',
//   mobile: true no animation for mobile devices
// });
