import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// When you do import { Component } from 'react', you are importing React.Component. Meaning that if you, at the beginning of the file, write import React, { Component } from 'react', React.Component refers to the exact same class as Component, making both syntaxes you mentioned valid
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>HEYYYYYYYY WORLD IT'S MEEEEEE</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))