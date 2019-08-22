import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Data from './components/Data.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: [],
      // series: [],
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
    let unstringifiedArr = arr.target[0].value;
    unstringifiedArr = unstringifiedArr.split(' ')
    this.setState({ labels: unstringifiedArr })
  }

  updateStateY(arr) {
    arr.preventDefault();
    console.log('UpdateY', arr.target[0].value)
    let pushedSeries = this.state.series;
    pushedSeries.push(arr.target[0].value)
    this.setState({ series: pushedSeries});
  }

  render() {
    return (
      <div>
        <Data
          updateStateX={this.updateStateX.bind(this)}
          // updateStateY={this.updateStateY.bind(this)}
          labels={this.state.labels} 
          // series={this.state.series} 
        />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));