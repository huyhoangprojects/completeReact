import React from 'react';

import AddSkill from './AddSkill'
import Action from './Action'
import Header from './Header'
import Skills from './Skills'
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

export default Profile;