'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      var myProfile = {
        name: 'Phan Huy Hoang',
        job: "I'm a Front-end developer.",
        skills: ['HTML', 'CSS', 'Javascript']
      };
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { name: myProfile.name, job: myProfile.job }),
        React.createElement(Action, null),
        React.createElement(Skills, { skills: myProfile.skills }),
        React.createElement(AddSkill, null)
      );
    }
  }]);

  return Profile;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.name
        ),
        React.createElement(
          'h2',
          null,
          this.props.job
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          null,
          'What is my best skill?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Skills = function (_React$Component4) {
  _inherits(Skills, _React$Component4);

  function Skills() {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).apply(this, arguments));
  }

  _createClass(Skills, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'ol',
          null,
          this.props.skills.map(function (skill, index) {
            return React.createElement(Skill, { key: index, skillText: skill });
          })
        )
      );
    }
  }]);

  return Skills;
}(React.Component);

var Skill = function (_React$Component5) {
  _inherits(Skill, _React$Component5);

  function Skill() {
    _classCallCheck(this, Skill);

    return _possibleConstructorReturn(this, (Skill.__proto__ || Object.getPrototypeOf(Skill)).apply(this, arguments));
  }

  _createClass(Skill, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        this.props.skillText
      );
    }
  }]);

  return Skill;
}(React.Component);

var AddSkill = function (_React$Component6) {
  _inherits(AddSkill, _React$Component6);

  function AddSkill() {
    _classCallCheck(this, AddSkill);

    return _possibleConstructorReturn(this, (AddSkill.__proto__ || Object.getPrototypeOf(AddSkill)).apply(this, arguments));
  }

  _createClass(AddSkill, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Add skill'
      );
    }
  }]);

  return AddSkill;
}(React.Component);

var appRoot = document.getElementById('root');

ReactDOM.render(React.createElement(Profile, null), appRoot);
