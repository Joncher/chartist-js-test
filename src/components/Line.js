import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ChartistGraph from "react-chartist";

export default class Line extends Component {
  render() {
    let data = {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
      series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
    };

    let options = {
      width: 600,
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    let type = "Line";

    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    );
  }
}
