const template = (
  <div>
    <h1>Hello, world!</h1>
    <p>I'm Phan Huy Hoàng</p>
  </div>
);

const user = {
  name: 'Huy Hoang Phan',
  age: 27,
  location: 'Binh Dinh'
}

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
const appRoot = document.getElementById('root');

ReactDOM.render(templateTwo, appRoot);