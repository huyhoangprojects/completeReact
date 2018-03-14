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

var user = {
  name: 'Huy Hoang Phan',
  age: 26,
  location: 'Binh Dinh'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age > 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'user.location'
  )
);
var appRoot = document.getElementById('root');

ReactDOM.render(template, appRoot);
