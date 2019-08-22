// import React from 'react';
// // import ReactDOM from 'react-dom';
// import '../index.scss';
// // import ChartistGraph from 'react-chartist';
// import * as V from 'victory';
// import { VictoryBar } from 'victory';

// class VGraphDisplay extends React.Component {

//   render() {
//     // console.log(this.props)
//     // const { labels, series, /*options, type*/ } = this.props;
//     const data = [
//       { quarter: 1, earnings: 13000 },
//       { quarter: 2, earnings: 16500 },
//       { quarter: 3, earnings: 14250 },
//       { quarter: 4, earnings: 19000 }
//     ];

//     return (
//       <div>
//         <br /><br />
//         <div id="graph">Graph
//         <br /><br />
//         </div>

//         {/* BELOW IS STRETCH FEATURE TO SELECT STORED GRAPHS 
//         Might need to transform this into a for loop to push 
//         an option with a value attribute to 
//         store/load all saved graphs
//         */}
//           <span id="selectText">
//             Select from stored graphs: &nbsp;</span>
//             <select id="select">
//                 <option value="cohortdata">Cohort Data</option>
//                 <option value="cereal">Cereal or milk first</option>
//             </select>


//         <VictoryBar data={data}/>
//         <br/>
//         <button id="saveBtn">Save Graph</button>

//       </div>
//     )
//   }
// }

// export default VGraphDisplay;