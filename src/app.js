class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: ['HTML', 'CSS', 'Javascript']
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleDelete() {
    this.setState({ skills: []});
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.skills.length);
    const myPick = this.state.skills[randomNum];
    alert(myPick);
  }

  handleAdd(skill) {
    this.setState({
      skills: this.state.skills.concat(skill)
    });
  }

  render() {
    const myProfile = {
      name: 'Phan Huy Hoang',
      job: "I'm a Front-end developer.",
    }
    return (
      <div>
        <Header name={myProfile.name} job={myProfile.job}/>
        {console.log(this.state.skills)}
        <Action hasSkills={this.state.skills.length > 0} handlePick={this.handlePick}/>
        <Skills skills={this.state.skills} handleDelete={this.handleDelete}/>
        <AddSkill handleAdd={this.handleAdd} />
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

  }

  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasSkills}>What is my best skill?</button>
      </div>
    )
  }
}

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleDelete}>Remove All</button>
        <ol>
          {console.log('skills', this.props.skills)}
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
      this.props.handleAdd(skill);
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