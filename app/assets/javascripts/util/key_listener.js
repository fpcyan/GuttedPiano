(function () {
  $(document).on('keydown', function (e) {
    KeyActions.keyPressed(window.KEYPRESSES[e.keyCode]);
  });

  $(document).on('keyup', function (e) {
    KeyActions.keyReleased(window.KEYPRESSES[e.keyCode]);
  });
})();
