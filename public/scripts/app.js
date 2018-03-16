'use strict';

var visibility = false;

var onToggle = function onToggle() {
  visibility = !visibility;
  renderApp();
};

var appRoot = document.getElementById('root');

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'p',
      null,
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    )
  );

  ReactDOM.render(template, appRoot);
};
renderApp();
