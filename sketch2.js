
function randomValues() {
  anime({
    targets: '#dot2',
    translateX: function() {
      return anime.random(0, 20);
    },

     translateY: function() {
      return anime.random(0, 20);
    },

    easing: 'easeInOutQuad',
    duration: 750,
    complete: randomValues
  });
}

randomValues();
