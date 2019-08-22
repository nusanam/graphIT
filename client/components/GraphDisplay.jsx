import React from 'react';
// import ReactDOM from 'react-dom';
import '../index.scss';
import ChartistGraph from 'react-chartist';
import * as V from 'victory';

class GraphDisplay extends React.Component {

  render() {
    console.log('this is current props object', this.props)
    const { labels, /*series, options, type*/ } = this.props;
    const data = {
      labels: labels,//['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      series: //{series},
        [
        [10, 14, 14, 12, 11, 12, 16, 12, 16, 12, 17, 23, 25]
        //[6, 8, 9, 10, 20, 10, 10, 17, 18, 20, 22, 27, 29]
        ]
    };
    console.log('LABELS ARE PASSING IN', data)

    const options = {
      // high: 30,
      // low: 0,
      divisor: 400,
      showArea: false,
      axisX: {
      }
    };
    // this is the type of chart you want to display
    let type = 'Line'

    return (
      <div>
        <br /><br />
        <div id="graph">Graph
        <br /><br />
        </div>

        {/* BELOW IS STRETCH FEATURE TO SELECT STORED GRAPHS 
        Might need to transform this into a for loop to push 
        an option with a value attribute to 
        store/load all saved graphs
        */}
          <span id="selectText">
            Select from stored graphs: &nbsp;</span>
            <select id="select">
                <option value="cohortdata">Cohort Data</option>
                <option value="cereal">Cereal or milk first</option>
            </select>

        <div id="chartistGraph">
          <ChartistGraph data={data} options={options} type={type} />
        </div>
        <br/>
        <button id="saveBtn">Save Graph</button>

      </div>
    )
  }
}

export default GraphDisplay;