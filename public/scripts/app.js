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

var user = {
  name: 'Huy Hoang Phan',
  age: 27,
  location: 'Binh Dinh'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);
var appRoot = document.getElementById('root');

ReactDOM.render(templateTwo, appRoot);
