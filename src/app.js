class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Huy Hoang Phan</h1>
        <h2>I'm a Front-end developer.</h2>
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
        My skills
      </div>
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

const template = (
  <div>
    <Header />
    <Action />
    <Skills />
    <AddSkill />
  </div>
)
const appRoot = document.getElementById('root');

ReactDOM.render(template, appRoot);
