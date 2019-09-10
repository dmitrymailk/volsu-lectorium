import React, { Component } from "react";
import Item from "./Item";
import Arrow from "./templates/Arrow";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Section extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    };
  }
  render() {
    let { nameSection, lessons } = this.props.sections;
    let { isShow } = this.state;
    let arrowStyle = () => {
      if (!isShow) {
        return {
          transform: "rotate(-90deg)"
        };
      } else {
        return {
          transform: "rotate(0deg)"
        };
      }
    };
    return (
    
        <React.Fragment>
          <div className="curriculum__stage-section">
            <div
              className="stage-section__title"
              onClick={() => this.setState({ isShow: !this.state.isShow })}
            >
              <div className="stage-section__title-icon" style={arrowStyle()}>
                <Arrow />
              </div>
              <span className="stage-section__title-text">{nameSection}</span>
            </div>
            {isShow ? <Item lessons={lessons} /> : null}
          </div>
        </React.Fragment>

    );
  }
}
