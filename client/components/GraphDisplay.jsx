import React from 'react';
// import ReactDOM from 'react-dom';
import '../index.scss';
import ChartistGraph from 'react-chartist';

class GraphDisplay extends React.Component {
  render() {
    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      series: [
        [10, 14, 14, 12, 11, 12, 16, 12, 16, 12, 17, 23, 25],
        [6, 8, 9, null, 20, null, null, 17, 18, 20, 22, 27, 29]
      ]
    };

    const options = {
      // high: 30,
      // low: 0,
      divisor: 4,
      showArea: false,
      axisX: {
      }
    };
    // this is the type of chart you want to display
    let type = 'Line'

    return (
      <div>
        <div id="graph">Graph
        <br /> <br />
        </div>

        {/* BELOW IS STRETCH FEATURE TO SELECT STORED GRAPHS 
        Might need to transform this into a for loop to push 
        an option with a value attribute to 
        store/load all saved graphs
        */}
        
        <p>
          <span id="select">
            Select from stored graphs: &nbsp;</span>
            <select id="select">
                <option value="cohortdata">Cohort Data</option>
                <option value="cereal">Cereal or milk first</option>
            </select>
        </p>

        <ChartistGraph data={data} options={options} type={type} />
        <button id="saveBtn">Save Graph</button>

      </div>
    )
  }
}

export default GraphDisplay;