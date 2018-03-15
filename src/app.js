const myProfile = {
  hello: 'Hello, world!',
  name: "I'm Phan Huy Hoang",
  skill: ['HTML', 'CSS', 'Javascript']
}

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
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderApp();
};
const minusOne = () => {
  count--;
  renderApp();
};
const reset = () => {
  count = 0;
  renderApp();
};

const appRoot = document.getElementById('root');
const renderApp = () => {
  const templateTwo = (
    <div>
      <h1>Count {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
}
renderApp();