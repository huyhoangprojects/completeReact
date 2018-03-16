'use strict';

var myProfile = {
  hello: 'Hello, world!',
  name: "I'm Phan Huy Hoang",
  skill: ['HTML', 'CSS', 'Javascript']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var skill = e.target.elements.skill.value;

  if (skill) {
    e.target.elements.skill.value = '';
    myProfile.skill.push(skill);
    renderApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  myProfile.skill = [];
  renderApp();
};

var myBestSkill = function myBestSkill() {
  var randomSkill = Math.floor(Math.random() * myProfile.skill.length);
  var bestSkill = myProfile.skill[randomSkill];
  alert(bestSkill);
};

var appRoot = document.getElementById('root');

var renderApp = function renderApp() {
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
    ),
    React.createElement(
      'button',
      { disabled: myProfile.skill.length === 0, onClick: myBestSkill },
      'What is my best skill?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove all skill'
    ),
    React.createElement(
      'p',
      null,
      ' '
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'skill' }),
      React.createElement(
        'button',
        null,
        'Add skill'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
renderApp();
