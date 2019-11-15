import React from 'react';
import { scaleOrdinal } from 'd3-scale';
import { arc as d3Arc, pie as d3Pie } from 'd3-shape';
import { csvParse } from 'd3-dsv';

// Same as data.csv
import dataCsv from './data';

import './chart.css';


// set the dimensions and margins of the graph
const width = 600,
      height = 400;
      // radius = Math.min(width, height) / 2;

//set the color scale
const color = scaleOrdinal().range([
  '#98abc5',
  '#8a89a6',
  '#7b6888',
  '#6b486b',
  '#a05d56',
  '#d0743c',
]);

//the chart's inner spacing size, overall size, pad spacing & pad styling
const arc = d3Arc()
    .innerRadius(100)
    .outerRadius(200)
    .padAngle(.05)
    .padRadius(100);

//compute the position of each group on the pie
const pie = d3Pie()
  .value(function(d) {
    return d.price;
  });


const data = pie(
  csvParse(dataCsv, d => {
    d.price = +d.price;
    return d;
  })
);

export default () => {
  return (

    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {data.map(d => (
          <g className="arc" key={`a${d.data.fruit}`}>
            <path d={arc(d)} fill={color(d.data.fruit)} />
            <text transform={`translate(${arc.centroid(d)})`} dy=".35em">
              {d.data.price}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};
