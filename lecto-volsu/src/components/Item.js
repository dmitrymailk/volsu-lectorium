import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      isShow: true
    };
  }

  startLesson = e => {
    e.stopPropagation();
    console.log("object");
    this.forceUpdate()
  };
  render() {
    let { isShow } = this.state;
    let { lessons } = this.props;
    return (
      <React.Fragment>
        {lessons.map((item, i) => {
          let { name, desc, linkId } = item;
          return (
            <div
              className="stage-section__item"
              onClick={() => this.setState({ isShow: !this.state.isShow })}
              key={i}
            >
              <div className="stage-section__item-title">
                {i + 1}.{name}
              </div>
              {isShow ? (
                <React.Fragment>
                  <div className="stage-section__item-desc">{desc}</div>

                  <Link
                    onClick={this.startLesson}
                    className="stage-section__item-button"
                    to={`/lessons/${linkId}`}
                  >
                    Start
                  </Link>
                </React.Fragment>
              ) : null}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
