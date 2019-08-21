import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Data from './components/Data.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Data />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));