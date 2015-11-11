(function () {
  $(document).on('keydown', function (e) {

    KeyActions.keyPressed(e.keycode);
  });

  $(document).on('keyup', function (e) {
    KeyActions.keyReleased(e.keycode);
  });
})();
