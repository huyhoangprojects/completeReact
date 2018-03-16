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
  render() {
    return (
      <div>
        <button>What is my best skill?</button>
      </div>
    )
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return (
      <div>
        Add skill
      </div>
    )
  }
}

const appRoot = document.getElementById('root');

ReactDOM.render(<Profile />, appRoot);
