import React from 'react';
// import ReactDOM from 'react-dom';
import '../index.scss';
import ChartistGraph from 'react-chartist';

class GraphDisplay extends React.Component {
  render() {

    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      series: [
        [10, 14, 14, 12, 11, 12, 16, 12, 16, 12, 17, 23, 25]
      ]
    };

    const options = {
      high: 30,
      low: 0,
      divisor: 4,
      axisX: {
      }
    };
    // this is the type of chart you want to display
    let type = 'Line'

    return (
      <div>
        <p id="graph">Graph</p>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}

export default GraphDisplay;