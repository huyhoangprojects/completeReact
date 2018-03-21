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
      skills: _this.props.skills //['HTML', 'CSS', 'Javascript']
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
        job: "Front-end developer"
      };
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { job: myProfile.job }),
        React.createElement(Action, { hasSkills: this.state.skills.length > 0, handlePick: this.handlePick }),
        React.createElement(Skills, { skills: this.state.skills, handleDelete: this.handleDelete }),
        React.createElement(AddSkill, { handleAdd: this.handleAdd })
      );
    }
  }]);

  return Profile;
}(React.Component);

Profile.defaultProps = {
  skills: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.name
    ),
    props.job && React.createElement(
      'h2',
      null,
      'I\'m a ' + props.job + '.'
    )
  );
};

Header.defaultProps = {
  name: 'Huy Hoang Phan'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick, disabled: !props.hasSkills },
      'What is my best skill?'
    )
  );
};

var Skills = function Skills(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDelete },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      props.skills.map(function (skill, index) {
        return React.createElement(Skill, { key: index, skillText: skill });
      })
    )
  );
};

var Skill = function Skill(props) {
  return React.createElement(
    'li',
    null,
    props.skillText
  );
};

var AddSkill = function (_React$Component2) {
  _inherits(AddSkill, _React$Component2);

  function AddSkill(props) {
    _classCallCheck(this, AddSkill);

    var _this2 = _possibleConstructorReturn(this, (AddSkill.__proto__ || Object.getPrototypeOf(AddSkill)).call(this, props));

    _this2.state = { error: null };
    _this2.handleAdd = _this2.handleAdd.bind(_this2);
    return _this2;
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

ReactDOM.render(React.createElement(Profile, { skills: ['HTML', 'CSS', 'Javascript'] }), appRoot);
