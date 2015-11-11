window.KeyActions = {



  keyPressed: function (keycode) {

    AppDispatcher.dispatch({ eventType: 'add key', noteName: window.KEYPRESSES[keycode] });
  },

  keyReleased: function (keycode) {
    AppDispatcher.dispatch({ eventType: 'remove key', noteName: window.KEYPRESSES[keycode]});
  }


};
