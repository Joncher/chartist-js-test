import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ChartistGraph from "react-chartist";

export default class Pie extends Component {
  render() {
    let data = {
      series: [
        {
          value: 20,
          name: "Series 1"
        },
        {
          value: 10,
          name: "Series 2"
        },
        {
          value: 70,
          name: "Series 3"
        }
      ],
      donut: true
    };

    let type = "Pie";

    return (
      <div>
        <ChartistGraph data={data} type={type} />
      </div>
    );
  }
}
