import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.scss';
import GraphDisplay from './GraphDisplay.jsx'

class Data extends Component {
  constructor(props) {
    super(props)

    // don't need to bind the context of the this bc i'm not passing the functions down to the next component
    // this.onSubmitX = this.onSubmitX.bind(this);
    // this.onSubmitY = this.onSubmitY.bind(this);
  }

  render() {
    // if you add constructor class and super(props), you inhert state and props from the parent component 
    const { labels, series, updateStateX, updateStateY } = this.props;
    
    // checkEmpty() {
    //   return 2 + 2;
    // }

    return (
      <div className="outerbox">

        {/* X-Axis Labels section */}
        <div id="xaxis">
          <span id="data">
            X-axis Values: &nbsp; </span>
          <form onSubmit={updateStateX}>
        <p>
            <input id="input" type="text" size="30" placeholder="Kiwis, Peaches, Pears, Apples..." />
            &nbsp; &nbsp;
             <input id="submitBtn" type="submit" value="Submit" />
        </p>
          </form>
          <br /><div id="example">
            Input each x-axis value separated by <strong><u>one space</u></strong> as one line before hitting the submit button.  <br /><br />
            Each value will appear on the graph as a label on the horizontal axis for the x-value it represents. 
            </div>
          <br /> <br /> 
        </div>
        {/* Submit data section */}
        <div id="yaxis">
          <span id="data">
            Y-Axis Values: &nbsp;</span>
          
          <form onSubmit={updateStateY} >
          <input id="input" type="text" size="30" placeholder="[12, 5, 20, null, 8, 12.5, 800, 9]..." />
          &nbsp;&nbsp;
          <input id="submitBtn" type="submit" value="Submit" />
          </form>
          <br/><br />
        <div id="example">
          Submit a single dataset of y-values at a time as an <span id="highlightWord" style={{ color: '#D70005', backgroundColor: '#f2f2f2' }} ><code>array</code></span> of values. If a data value inside of this dataset doesn't exist, use <span id="highlightWord" style={{ color: '#D70005', backgroundColor: '#f2f2f2' }} ><code>null</code></span> in its place inside of the <span id="highlightWord" style={{ color: '#D70005', backgroundColor: '#f2f2f2' }} ><code>array</code></span>.
          <br /> <br />
          <span id="highlightWord" style={{ color: '#838383'}} > Note:</span> The number of labels must exactly <strong><u>equal</u></strong> the number of values in a single dataset.
          </div>
        </div>
      
        {/* Instantiating an instance of graph display */}
        <GraphDisplay
          labels={labels}
          series={series}
        // options={options}
        // type={type}
        />
      </div >
    )
  }
}

export default Data;