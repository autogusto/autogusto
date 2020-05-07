// anime({
//  targets: '#dot',
//   translateX: 250,
//   direction: 'reverse',
//   easing: 'easeInOutSine'
// // easing: 'easeInOutSine';
// // perspective:90;
// });


function randomValues() {
  anime({
    targets: '#dot, #dot2, #dot3, #dot4, #dot5, #dot6, #dot7, #dot8',
    translateX: function() {
      return anime.random(0, 20);
    },

     translateY: function() {
      return anime.random(0, 20);
    },

    easing: 'easeInOutQuad',
    duration: 2050,
    complete: randomValues
  });
}

randomValues();

// targets: '#dot',
// duration: 2000,
// translateX: 500,
// translateY: 500,
// scale: 10,

