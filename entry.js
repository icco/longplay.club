var React = require('react');
var Root = require('./fe/Root.jsx');

if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML);
  React.render(React.createElement(Root, initialProps), document);
}

// Exported static site renderer:
module.exports = function render(locals, callback) {
  console.log(locals);
  callback(null, '<html>...</html>');
};
