import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Data from './components/Data.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Data />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));