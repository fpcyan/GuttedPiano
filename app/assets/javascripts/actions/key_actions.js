window.KeyActions = {



  keyPressed: function (keycode) {

    AppDispatcher.dispatch({ eventType: 'add key', noteName: keycode });
  },

  keyReleased: function (keycode) {
    AppDispatcher.dispatch({ eventType: 'remove key', noteName: keycode});
  },

  keysPressed: function (keycodesArray) {
    AppDispatcher.dispatch({ eventType: 'smash the keyboard', noteNames: keycodesArray});
  }


};
