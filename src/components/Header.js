import React from 'react';

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

export default Header;