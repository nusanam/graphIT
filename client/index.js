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
    let unstringifiedArrX = arr.target[0].value;
    unstringifiedArrX = unstringifiedArrX.split(' ')
    this.setState({ labels: unstringifiedArrX })
  }

  updateStateY(arr) {
    arr.preventDefault();
    console.log('UpdateY', arr.target[0].value)
    // let pushedSeries = [];
    // pushedSeries.push(arr.target[0].value)
    let unstringifiedArrY = arr.target[0].value;
    unstringifiedArrY = unstringifiedArrY.split(' ').map(element => parseInt(element));
    this.setState({ series: unstringifiedArrY });
  }

  render() {
    return (
      <div>
        <Data
          updateStateX={this.updateStateX.bind(this)}
          updateStateY={this.updateStateY.bind(this)}
          labels={this.state.labels} 
          series={this.state.series} 
        />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));