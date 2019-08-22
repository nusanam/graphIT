import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Data from './components/Data.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: [],
      series: [],
      // options: {
      //   divisor: 0,
      //   showArea: false,
      // },
      // type: 'Line'
    }
  }

  updateStateX(arr) {
    arr.preventDefault();
    console.log('UpdateX', arr.target[0].value);
    // this.setState({labels: arr})
  }

  updateStateY(arr) {
    console.log('UpdateY', arr.target[0].value)
    // this.setState({ series: arr })
  }

  render() {
    return (
      <div>
        <Data
          updateStateX={this.updateStateX}
          updateStateY={this.updateStateY}
          labels={this.state.labels}
          series={this.state.series} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));