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

  render: function() { }
});

module.exports = Root;
