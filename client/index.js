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
    // preventing page refresh
    arr.preventDefault();
    // to understand below think of the two lines below. our input is eventually being stored as a string. we need to convert the string into an array of individual strings!
    //let arr = "0 1 2 3 4 5";
    //arr = arr.split(' ')
    console.log('arrX.target[0].value', arr.target[0].value);
    let unstringifiedArrX = arr.target[0].value;
    unstringifiedArrX = unstringifiedArrX.split(' ')
    this.setState({ labels: unstringifiedArrX })
  }

  updateStateY(arr) {
    arr.preventDefault();
    // to understand below think of the two lines below. our input is eventually being stored as a string. we need to convert the string into an array of individual strings. but we need to convert those strings into a number inside of the array. we can use map to map each string element to a number using parseInt.
    //let arr = "0 1 2 3 4 5";
    //arr = arr.split(' ').map(e => parseInt(e))
    console.log('arrY.target[0].value', arr.target[0].value)
    // let pushedSeries = [];
    // console.log('was trying to push value into an array MAYBE DONT NEED THIS', pushedSeries);
    // pushedSeries.push(arr.target[0].value)
    let unstringifiedArrY = arr.target[0].value;
    console.log('should be input', unstringifiedArrY)
    unstringifiedArrY = unstringifiedArrY.split(' ')
    console.log('SPLITTING(\' \')', unstringifiedArrY)
    unstringifiedArrY = unstringifiedArrY.map(element => parseInt(element));
    console.log('MAPPED to remove string from each element)', unstringifiedArrY)
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