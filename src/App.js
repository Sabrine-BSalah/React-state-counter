import React from 'react'
import './App.css';
import Counter from './Components/Counter/Counter';
import { Button } from 'react-bootstrap'

class App extends React.Component {

  state = {
    show: false
  }
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App" >
        <Button variant="secondary"
          onClick={this.handleShow}
          style={{ marginBottom: "10%" }}
        >{this.state.show ? "Hide" : "Show"}</Button>
        {this.state.show &&
          <Counter show={this.state.show} />
        }
      </div>
    );
  }
}

export default App;
