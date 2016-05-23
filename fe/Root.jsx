var React = require('react');

var Root = React.createClass({
  getInitialState: function() {
    return {
      tracks: []
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get("/api.json", function (result) {
      this.setState({
        tracks: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <ul>
      <li>{this.tracks[0]}</li>
      </ul>
    )
  }
});

module.exports = Root;
