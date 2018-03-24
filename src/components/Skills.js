import React from 'react';

import Skill from './Skill'

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
export default Skills;