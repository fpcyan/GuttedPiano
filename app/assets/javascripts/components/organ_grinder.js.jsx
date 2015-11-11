var Organ = React.createClass({

  render: function () {
    return (
      <div className="organ">
        {Object.keys(window.TONES).map(function (keypress) {
          return (
            <Key key={keypress} noteName={keypress} />
          );
        })}
        <Recorder />
      </div>
    );
  }

});



var Key = React.createClass({

  getInitialState: function () {
    return { note: "" };
  },
  maybePlayNote: function () {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1 ) {
      this.state.note.start();
    } else {
      this.state.note.stop();
    }
  },

  componentDidMount: function () {
    this.setState({ note: new window.Note(window.TONES[this.props.noteName]) });

    KeyStore.addChangeHandler(this.maybePlayNote);
  },

  componentWillUnmount: function () {

    KeyStore.removeChangeHandler(this.maybePlayNote);

  },

  componentDidUnmount: function () {


  },

  render: function () {
    return (
      <li>{this.props.noteName}</li>
    );
  }
});

(function () {
  $(document).on('ready', function () {
    React.render(React.createElement(Organ), document.getElementById('content'));
  });
})();
