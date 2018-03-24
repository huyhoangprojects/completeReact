import React from 'react';

const Skill = (props) => {
  return (
    <li>
      {props.skillText}
      <button onClick={(e)=> {props.handleDeleteSkill(props.skillText)}}>x</button>
    </li>
  )
}

export default Skill;