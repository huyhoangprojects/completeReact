const myProfile = {
  hello: 'Hello, world!',
  name: "I'm Phan Huy Hoang",
  skill: ['HTML', 'CSS', 'Javascript']
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const skill = e.target.elements.skill.value;

  if (skill) {
    e.target.elements.skill.value = '';
    myProfile.skill.push(skill);
    renderApp();
  }
};

const onRemoveAll = () => {
  myProfile.skill = [];
  renderApp();
};
const appRoot = document.getElementById('root');


const renderApp = () => {
  const template = (
    <div>
      <h1>{myProfile.hello}</h1>
      {myProfile.name &&  <p>{myProfile.name}</p>}
      <p>{(myProfile.skill.length > 0) ? 'Here are your skills' : 'No skills' }</p>
      {
        myProfile.skill &&
        <ol>
          {myProfile.skill.map((item,index)=>{
            return <li key={index}>{item}</li>
          })}
        </ol>
      }
      <button onClick={onRemoveAll}>Remove all skill</button>
      <p> </p>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="skill" />
      <button>Add skill</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
renderApp();