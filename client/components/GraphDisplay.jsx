import React from 'react';
// import ReactDOM from 'react-dom';
import '../index.scss';
import ChartistGraph from 'react-chartist';
import * as V from 'victory';

class GraphDisplay extends React.Component {

  render() {
    console.log('Props object BEFORE passing labels/series into chartist\'s required data object', this.props)
    const { labels, series, /*options, type*/ } = this.props;
    console.log('series before passing down into chartist graph template', series)

      // pushing submitted y values into an array
    //   const dataArr = [];
    // dataArr.push(series);
    // const deepCloneArray = JSON.parse(JSON.stringify(dataArr))

    const data = {
      labels: labels,
      series: [series] 
      // 
      //[6, 8, 9, 10, 20, 10, 10, 17, 18, 20, 22, 27, 29]
    };
    console.log('ARE LABELS & SERIES PASSING IN?', data)

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
      <div id="innerBox">
        <div id="graphDisplay">
          <br /> <br />
          <div id="selectTypeDiv">
            <span id="selectText">
              What kind of graph would you like? &nbsp;</span>
            <select id="select">
              <option value="Line">Line</option>
              <option value="Bar">Bar</option>
            </select>
          </div>

          {/* <div id="graph">Graph */}
          {/* </div> */}

          {/* BELOW IS STRETCH FEATURE TO SELECT STORED GRAPHS 
        Might need to transform this into a for loop to push 
        an option with a value attribute to 
        store/load all saved graphs
        */}
          <ChartistGraph data={data} options={options} type={type} />
          <div id="selectGraphDiv">
            <span id="selectText">
              Select from stored graphs: &nbsp;</span>
            <select id="select">
              <option value="cohortdata">Cohort Data</option>
              <option value="cereal">Cereal or milk first</option>
            </select>
          </div>
        </div>

        <div id="graphButtons">
          <button id="saveBtn">Save Graph</button>
          <button id="storeGraphBtn">Store Graph</button>
        </div>
      </div>
    )
  }
}

export default GraphDisplay;