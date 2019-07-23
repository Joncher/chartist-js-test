import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bar from "./components/Bar";
import Pie from "./components/Pie";
import Line from "./components/Line";
import "./App.css";

export default class App extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/bar">Bar</Link>
              </li>
              <li>
                <Link to="/pie/">Pie</Link>
              </li>
              <li>
                <Link to="/line/">Line</Link>
              </li>
            </ul>
          </nav>

          <Route path="/bar" component={Bar} />
          <Route path="/pie/" component={Pie} />
          <Route path="/line/" component={Line} />
        </div>
      </Router>
    );
  }
}
