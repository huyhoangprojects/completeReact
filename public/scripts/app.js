'use strict';

var myProfile = {
  hello: 'Hello, world!',
  name: "I'm Phan Huy Hoang",
  skill: ['HTML', 'CSS', 'Javascript']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    myProfile.hello
  ),
  myProfile.name && React.createElement(
    'p',
    null,
    myProfile.name
  ),
  React.createElement(
    'p',
    null,
    myProfile.skill.length > 0 ? 'Here are your skills' : 'No skills'
  ),
  myProfile.skill && React.createElement(
    'ol',
    null,
    myProfile.skill.map(function (item, index) {
      return React.createElement(
        'li',
        { key: index },
        item
      );
    })
  )
);

var count = 0;
var addOne = function addOne() {
  return console.log('add One');
};
var minusOne = function minusOne() {
  return console.log('minus One');
};
var reset = function reset() {
  return console.log('reset');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);
var appRoot = document.getElementById('root');

ReactDOM.render(templateTwo, appRoot);
