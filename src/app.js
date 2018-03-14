const template = (
  <div>
    <h1>Hello, world!</h1>
    <p>I'm Phan Huy Hoàng</p>
  </div>
);

const templateTwo = (
  <div>
    <h1>Name: Huy Hoang Phan</h1>
    <p>Age: 26</p>
    <p>Location: Binh Dinh</p>
  </div>
);
const appRoot = document.getElementById('root');

ReactDOM.render(templateTwo, appRoot);