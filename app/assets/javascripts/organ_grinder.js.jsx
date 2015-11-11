var Organ = React.createClass({

  render: function () {
    return (
      <div>
        {Object.keys(window.TONES).map(function (tone) {
          return (
            <Key key={tone} noteName={window.TONES[tone]}/>
          );
        })}
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

    this.setState({ note: new window.Note(this.props.noteName) });

    KeyStore.addChangeHandler(this.maybePlayNote);
  },

  componentWillUnmount: function () {

    KeyStore.removeChangeHandler(this.maybePlayNote);

  },

  componentDidUnmount: function () {


  },

  render: function () {
    return (
      <li></li>
    );
  }
});

(function () {
  $(document).on('ready', function () {
    React.render(React.createElement(Organ), document.getElementById('content'));
  });
})();
