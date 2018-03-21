class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {count: this.props.count};
  }
  componentDidMount() {
    try {
      const count = localStorage.getItem('count');
      if (count !== null) {
        this.setState({count: parseInt(count)});
      }
    } catch (error) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  handleAdd() {
    this.setState({count: this.state.count + 1});
  }
  handleMinus() {
    this.setState({count: this.state.count - 1});
  }
  handleReset() {
    this.setState({count: 0});
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
}
const appRoot = document.getElementById('root');
ReactDOM.render(<Counter />, appRoot);