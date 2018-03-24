import React from 'react';

export default class AddSkill extends React.Component {
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