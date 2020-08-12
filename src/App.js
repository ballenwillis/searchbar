import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  state = {}

  handleSubmit(event) {
    const { value } = this.input.current
    console.log(value)
    // Hit the API with this and display results
    event.preventDefault();
  }

  render() {
    return (
      <div style={{margin: '20px'}}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search term: 
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
