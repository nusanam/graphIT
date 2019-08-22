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

  // onClickX(event) {
  //   event.preventDefault();
  //   const newStateX = Object.create(this.state)
  //   newStateX.labels = event.target.value;
  //   console.log('X-State has changed!', newStateX)
  //   this.setState(newStateX);
  // }

  // onClickY(event) {
  //   event.preventDefault();
  //   const newStateY = Object.create(this.state)
  //   newStateY.series.concat(event.target.value);
  //   console.log('Y-State has changed!', newStateY)
  //   this.setState(newStateY);
  // }

  render() {
    // if you add constructor class and super(props), you inhert state and props from the parent component 
    const { labels, series, updateStateX, updateStateY } = this.props;

    return (
      <div className="outerbox">

        {/* X-Axis Labels section */}
        <div className="ui divider" />
          <span id="data">
            X-axis Values: &nbsp; </span>
          <form onSubmit={updateStateX} >
        <p>
            <input id="input" type="text" size="31" placeholder="[ 'Kiwis', 'Pears', 'Apples' , 'Limes' ]" />
            &nbsp; &nbsp;
             <input id="submitBtn" type="submit" value="Submit" />
        </p>
          </form>
          <br /><span id="example">
          Input x-axis labels as an <span id="highlightWord" style={{ color: '#E3B1AC', backgroundColor: '#f2f2f2' }} >array</span> of strings.
            </span>
          <br />

        <br />
        {/* Submit data section */}
          <span id="data">
            Single Dataset: &nbsp;</span>
          <form onClick={updateStateY} >
          <input id="input" type="text" size="30" placeholder="[12, 5, 20, null, 17, 8, 12.5, 800, 9]" />
          &nbsp;&nbsp;
          <input id="submitBtn" type="submit" value="Submit" />
          </form>
        <p>
        </p>

        <div id="example">
          These represent your y-values. Submit one dataset at a time as an <span id="highlightWord" style={{ color: '#E3B1AC', backgroundColor: '#f2f2f2' }} >array</span> of values.
          <br/><br/>If a data value inside of a dataset doesn't exist, use <span id="highlightWord" style={{ color: '#E3B1AC', backgroundColor: '#f2f2f2' }} >null</span> in its place inside the array.
          <br /> <br />
          <span id="highlightWord" style={{ color: '#838383'}} > Note:</span> The number of labels must exactly <strong><u>equal</u></strong> the number of values in a single dataset.
          </div>
        <div className="ui divider" />

        {/* Instantiating an instance of graph display */}
        <GraphDisplay
          labels={this.props.labels}
          series={this.props.series}
        // options={options}
        // type={type}
        />
      </div >
    )
  }
}

export default Data;