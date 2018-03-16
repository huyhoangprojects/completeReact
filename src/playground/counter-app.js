
class Profile extends React.Component {
  render() {
    const myProfile = {
      name: 'Phan Huy Hoang',
      job: "I'm a Front-end developer.",
      skills: ['HTML', 'CSS', 'Javascript']
    }
    return (
      <div>
        <Header name={myProfile.name} job={myProfile.job}/>
        <Action />
        <Skills skills={myProfile.skills}/>
        <AddSkill />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.job}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  constructor(props) {
    super(props);

    this.handlePick = this.handlePick.bind(this);
  }

  handlePick() {
    alert('Pick one!');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What is my best skill?</button>
      </div>
    )
  }
}

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    alert('Remove all!');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemove}>Remove All</button>
        <ol>
          {
            this.props.skills.map((skill, index)=> <Skill key={index} skillText={skill}/>)
          }
        </ol>
      </div>
    )
  }
}

class Skill extends React.Component {
  render() {
    return (
      <li>
        {this.props.skillText}
      </li>
    )
  }
}

class AddSkill extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(e) {
    e.preventDefault();
    const skill = e.target.elements.skill.value;

    if(skill) {
      alert(skill);
      e.target.elements.skill.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <input type="text" name="skill" />
          <button>Add skill</button>
        </form>
      </div>
    )
  }
}

const appRoot = document.getElementById('root');

ReactDOM.render(<Profile />, appRoot);