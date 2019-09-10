import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Section from "./Section";

let database = [
  {
    nameStage: "Первый курс",
    sections: [
      {
        nameSection: "Начало Анализа",
        lessons: [
          {
            name: "Предел последовательности",
            desc:
              "Vestibulum porta leo quis porttitor ullamcorper. Nulla ornare vulputate metus ac placerat. Praesent vel neque nunc.",
              linkId: "1" 
          }
        ]
      },
      {
        nameSection: "Геометрия и топология",
        lessons: [
          {
            name: "Линейная алгебра",
            desc:
              "Vestibulum porta leo quis porttitor ullamcorper. Nulla ornare vulputate metus ac placerat. Praesent vel neque nunc.",
              linkId: "2" 
          }
        ]
      },
      {
        nameSection: "Программирование",
        lessons: [
          {
            name: "Основы программирования",
            desc:
              "Vestibulum porta leo quis porttitor ullamcorper. Nulla ornare vulputate metus ac placerat. Praesent vel neque nunc.",
              linkId: "3"   
          }
        ]
      }
    ]
  }
];
export default class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      isShow: true
    };
  }
  render() {
    let { isShow } = this.state;
    return (
      <div className="curriculum">
        {database.map((item, i) => {
          return (
            <div className="curriculum__stage" key={i}>
              <div
                className="stage__title"
                onClick={() => this.setState({ isShow: !this.state.isShow })}
              >
                {item.nameStage}
              </div>
              {isShow
                ? item.sections.map((item, i) => {
                    return <Section sections={item} key={i} />;
                  })
                : null}
            </div>
          );
        })}
      </div>
    );
  }
}
