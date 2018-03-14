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

const user = {
  name: 'Huy Hoang Phan',
  age: 26,
  location: 'Binh Dinh'
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
    {<p>user.location</p>}
  </div>
);
const appRoot = document.getElementById('root');

ReactDOM.render(template, appRoot);