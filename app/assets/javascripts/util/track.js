(function (root) {

  var Track = window.Track = function (attr) {
    this.name = attr.name;
    this.roll = attr.roll || [];
  };

  Track.prototype.startRecording = function () {
    this.roll = [];
    this.timeStamp = Date.now();
    this.interval = setInterval( function() {
        this.addNotes(window.KeyStore.all());
    }.bind(this), 2);

  };

  Track.prototype.addNotes = function (notes) {
    this.roll.push({
      timeSlice: Date.now() - this.timeStamp,
      notes: notes
    });

  };

  Track.prototype.stopRecording = function () {
    this.addNotes([]);
    clearInterval(this.interval);
    delete this.interval;
  };

  Track.prototype.play = function () {
    if (typeof this.interval !== "undefined") {
      return;
    }

    var playbackStartTime = Date.now();
    var currentNoteIdx = 0;

    this.interval = setInterval( function() {
      if (currentNoteIdx < this.roll.length) {
        var currentTime = (Date.now() - playbackStartTime);
        console.log(currentNoteIdx < this.roll.length);
        console.log(currentNoteIdx);
        if ( currentTime < this.roll[currentNoteIdx].timeSlice) {
          window.KeyActions.keysPressed(this.roll[currentNoteIdx].notes);
        } else {
        currentNoteIdx++;
        }


      } else {

        clearInterval(this.interval);
        delete this.interval;
      }
    }.bind(this), 2);

  };


})(this);
