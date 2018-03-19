'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

    _this.state = {
      skills: ['HTML', 'CSS', 'Javascript']
    };
    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAdd = _this.handleAdd.bind(_this);
    return _this;
  }

  _createClass(Profile, [{
    key: 'handleDelete',
    value: function handleDelete() {
      this.setState({ skills: [] });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.skills.length);
      var myPick = this.state.skills[randomNum];
      alert(myPick);
    }
  }, {
    key: 'handleAdd',
    value: function handleAdd(skill) {
      if (!skill) {
        return 'Enter the valid skill';
      } else if (this.state.skills.indexOf(skill) != -1) {
        return 'Skill is exist';
      }
      this.setState({
        skills: [].concat(_toConsumableArray(this.state.skills), [skill])
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var myProfile = {
        name: 'Phan Huy Hoang',
        job: "I'm a Front-end developer."
      };
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { name: myProfile.name, job: myProfile.job }),
        React.createElement(Action, { hasSkills: this.state.skills.length > 0, handlePick: this.handlePick }),
        React.createElement(Skills, { skills: this.state.skills, handleDelete: this.handleDelete }),
        React.createElement(AddSkill, { handleAdd: this.handleAdd })
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

  function Action(props) {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handlePick, disabled: !this.props.hasSkills },
          'What is my best skill?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Skills = function (_React$Component4) {
  _inherits(Skills, _React$Component4);

  function Skills(props) {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).call(this, props));
  }

  _createClass(Skills, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handleDelete },
          'Remove All'
        ),
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

  function AddSkill(props) {
    _classCallCheck(this, AddSkill);

    var _this6 = _possibleConstructorReturn(this, (AddSkill.__proto__ || Object.getPrototypeOf(AddSkill)).call(this, props));

    _this6.state = { error: null };
    _this6.handleAdd = _this6.handleAdd.bind(_this6);
    return _this6;
  }

  _createClass(AddSkill, [{
    key: 'handleAdd',
    value: function handleAdd(e) {
      e.preventDefault();
      var skill = e.target.elements.skill.value.trim();
      var error = this.props.handleAdd(skill);
      if (!error) {
        e.target.elements.skill.value = '';
      }
      this.setState({ error: error });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleAdd },
          React.createElement('input', { type: 'text', name: 'skill' }),
          React.createElement(
            'button',
            null,
            'Add skill'
          )
        ),
        this.state.error && React.createElement(
          'div',
          null,
          this.state.error
        )
      );
    }
  }]);

  return AddSkill;
}(React.Component);

var appRoot = document.getElementById('root');

ReactDOM.render(React.createElement(Profile, null), appRoot);
