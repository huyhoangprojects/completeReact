import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasSkills}>What is my best skill?</button>
    </div>
  )
}
export default Action;