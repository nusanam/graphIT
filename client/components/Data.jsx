import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.scss';
import GraphDisplay from './GraphDisplay.jsx'

class Data extends Component {
  render() {
    return (
      <div className="outerbox">

        {/* X-Axis Labels section */}
        <div className="ui divider" />
        <p>
          <span id="data">
            X-axis Values: &nbsp;</span>
          <input id="input" size="31" placeholder="[ 'Kiwis', 'Pears', 'Apples' , 'Limes' ]" />
          &nbsp; &nbsp;
          <button id="submitBtn">Submit</button>
          <br />
          <br />
          <span id="example">
            Input x-axis labels as an <u><strong>array</strong></u> of strings.
            </span>
          <br />

        </p>

        {/* Submit data section */}
        <div className="ui divider" />
        <p>
          <span id="data">
            Single Dataset: &nbsp;</span>
          <input id="input" size="30" placeholder="[12, 5, 20, null, 17, 8, 12.5, 800, 9]" />
          &nbsp;&nbsp;
          <button id="submitBtn">Submit</button>
          <div id="example">
            <br />
            Submit one dataset at a time as an <u><strong>array</strong></u> of values. If a data value inside of a dataset doesn't exist, use null in its place inside the array.
            <br /> <br />
            <strong>NOTE: </strong> The number of labels must exactly <strong><u>equal</u></strong> the number of values in a single dataset.
          </div>
        </p>
        <div className="ui divider" />

        {/* Instantiating an instance of graph display */}
        <GraphDisplay />
      </div>
    )
  }
}

export default Data;