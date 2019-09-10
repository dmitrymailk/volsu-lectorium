import React, { Component } from "react";
import "./normalize.css";
import Curriculum from "./components/Curriculum";
import Lesson from "./components/Lesson";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => null,
  },
  {
    path: "/lessons/:id",
    main: () => <Lesson />
  },
];

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router basename={process.env.PUBLIC_URL}>
          <Curriculum />
          <Route path="/" exact component={null} />
          <Route path="/lessons/:id" component={Lesson} />
        </Router>
      </div>
    );
  }
}
