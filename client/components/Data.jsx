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
            X-Axis Data Labels: &nbsp;</span>
          <input id="input" size="35" placeholder="[ 'Kiwis', 'Pears', 'Apples' , 'Limes' ]" />
          &nbsp; &nbsp;
          <button id="submitBtn">Submit</button>

            <br />
            <br />
            Input x-axis labels as an array of strings, where each string represents one label for your data point.
            <br />

        </p>

        {/* Submit data section */}
        <div className="ui divider" />
        <p>
          <span id="data">
            Dataset: &nbsp;</span>
          <input id="input" size="20" placeholder="[12, 20, 5, 17, 8, 12.5]" />
          &nbsp;&nbsp;
          <button id="submitBtn">Submit</button>
          <span id="example">
            <br />
            <br />
            Submit <i>each set of data</i> at a time.
          </span>
        </p>
          <div className="ui divider" />

        {/* BELOW IS STRETCH FEATURE TO SELECT STORED GRAPHS */}

        {/* Instantiating an instance of graph display */}

        <GraphDisplay />
        <p>
          Select from stored graphs: &nbsp; &nbsp;
          <select id="select">
            <option value="cohortdata">Cohort Data</option>
            <option value="cereal">Cereal or milk first</option>
          </select>
        </p>
      </div>
    )
  }
}

export default Data;