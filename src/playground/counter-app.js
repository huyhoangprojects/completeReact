class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: this.props.skills //['HTML', 'CSS', 'Javascript']
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDeleteSkill = this.handleDeleteSkill.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('skills');
      const skills = JSON.parse(json);
      if (skills) {
        this.setState({skills});
      }
    } catch (error) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.skills.length !== this.state.skills.length) {
      const json = JSON.stringify(this.state.skills);
      localStorage.setItem('skills', json);
    }
  }

  componentWillUnmount() {
    console.log('remove component');
  }

  handleDelete() {
    this.setState({ skills: []});
  }

  handleDeleteSkill(skillToDelete) {
    this.setState({
      skills: this.state.skills.filter((skill) => skill !== skillToDelete)
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.skills.length);
    const myPick = this.state.skills[randomNum];
    alert(myPick);
  }

  handleAdd(skill) {
    if (!skill) {
      return 'Enter the valid skill';
    } else if (this.state.skills.indexOf(skill) != -1) {
      return 'Skill is exist';
    }
    this.setState({
      skills: [...this.state.skills, skill]
    });
  }

  render() {
    const myProfile = {
      name: 'Phan Huy Hoang',
      job: "Front-end developer",
    }
    return (
      <div>
        <Header job={myProfile.job}/>
        <Action hasSkills={this.state.skills.length > 0} handlePick={this.handlePick}/>
        <Skills skills={this.state.skills} handleDelete={this.handleDelete} handleDeleteSkill={this.handleDeleteSkill}/>
        <AddSkill handleAdd={this.handleAdd} />
      </div>
    );
  }
}

Profile.defaultProps = {
  skills: []
}

const Header = (props) =>  {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.job && <h2>{`I'm a ${props.job}.`}</h2>}
    </div>
  )
}

Header.defaultProps = {
  name: 'Huy Hoang Phan'
}

const Action = (props) => {
    return (
      <div>
        <button onClick={props.handlePick} disabled={!props.hasSkills}>What is my best skill?</button>
      </div>
    )
}

const Skills = (props) => {
  return (
    <div>
      <button onClick={props.handleDelete}>Remove All</button>
      <ol>
        {
          props.skills.map((skill, index)=> <Skill key={index} skillText={skill} handleDeleteSkill={props.handleDeleteSkill} />)
        }
      </ol>
    </div>
  )
}

const Skill = (props) => {
  return (
    <li>
      {props.skillText}
      <button onClick={(e)=> {props.handleDeleteSkill(props.skillText)}}>x</button>
    </li>
  )
}

class AddSkill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {error : null}
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(e) {
    e.preventDefault();
    const skill = e.target.elements.skill.value.trim();
    const error = this.props.handleAdd(skill);
    if(!error) {
      e.target.elements.skill.value = '';
    }
    this.setState({ error });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <input type="text" name="skill" />
          <button>Add skill</button>
        </form>
        {this.state.error && <div>{this.state.error}</div>}
      </div>
    )
  }
}

const appRoot = document.getElementById('root');

ReactDOM.render(<Profile />, appRoot);