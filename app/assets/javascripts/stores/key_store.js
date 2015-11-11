(function (root) {

  var KeyStore = window.KeyStore = $.extend( {}, EventEmitter.prototype );

  var KEYDOWN_EVENT = 'keydown';
  var KEYUP_EVENT = 'keyup';

  var _playedKeys = [];

  KeyStore.addChangeHandler = function (callback) {
    this.on('change', callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
    this.removeListener('change', callback);
  };

  KeyStore.changed = function () {
    this.emit('change');
  };

  KeyStore.all = function () {
    return _playedKeys.slice();
  };

  KeyStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.eventType) {
      case 'add key':
        _playedKeys.push(payload.noteName);
        KeyStore.changed();

        break;
      case 'remove key':
        _playedKeys = _playedKeys.filter( function(playedKey) {
          return payload.noteName !== playedKey;
        });
        KeyStore.changed();
        break;
    }
  });


  KeyStore.create = function () {

  };

  KeyStore.destroy = function () {

  };



})(this);
