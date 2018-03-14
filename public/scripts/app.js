'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hello, world!'
  ),
  React.createElement(
    'p',
    null,
    'I\'m Phan Huy Ho\xE0ng'
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Name: Huy Hoang Phan'
  ),
  React.createElement(
    'p',
    null,
    'Age: 26'
  ),
  React.createElement(
    'p',
    null,
    'Location: Binh Dinh'
  )
);
var appRoot = document.getElementById('root');

ReactDOM.render(templateTwo, appRoot);
