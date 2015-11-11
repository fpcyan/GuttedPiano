var Recorder = React.createClass ({

  getInitialState: function () {
    return { isRecording: false, track: new window.Track({name: "track"}) };
  },

  startRecording: function () {
    if (!this.state.isRecording) {
      this.state.track.startRecording();
      this.setState({isRecording: true});
    }
  },

  stopRecording: function () {
    if (this.state.isRecording) {
      this.state.track.stopRecording();
      this.setState({isRecording: false});
    }
  },

  playRecording: function () {
    this.state.track.play();
  },

  render: function () {
    return (
      <div className="recorder">
        <button className="start-recording" onClick={this.startRecording}>O</button>
        <button className="stop-recording" onClick={this.stopRecording}>X</button>
        <button className="play-recording" onClick={this.playRecording}>&#x1405;</button>
      </div>
    );
  }

});
