import React, { Component } from "react";
import Arrow from './templates/Arrow'
import { Link, BrowserRouter } from "react-router-dom";

export default class Lesson extends Component {
  constructor(props){
    super(props);

  }


  componentDidMount(){
    
    let {
      match: { params }
    } = this.props;
    console.log(params);

  }

  setVideoLink = () =>{
    let {
      match: { params }
    } = this.props;

    switch(params.id){
      case "1":
        return "https://www.youtube.com/embed/ZmwdHAhVsPM"
      case "2":
          return "https://www.youtube.com/embed/ygHKhKD_JwM"
      case "3":
          return "https://www.youtube.com/embed/KdZ4HF1SrFs";
    }
  }
  render() {
    return (
      <div className="lesson">
        <div className="lesson__video">
          <iframe
            className="lesson__video-content"
            src={this.setVideoLink()}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="lesson__article">
          <Link to="/" className="lesson__button-back">
            <div className="button-back__arrow">
              <Arrow />
            </div>
            Назад
          </Link>
          <h2>Awesome Title about lecture</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            dolor sed viverra ipsum. Felis bibendum ut tristique et egestas quis
            ipsum suspendisse. Interdum varius sit amet mattis vulputate enim
            nulla aliquet porttitor. A iaculis at erat pellentesque adipiscing
            commodo elit at imperdiet. Nascetur ridiculus mus mauris vitae
            ultricies leo integer malesuada nunc. Justo eget magna fermentum
            iaculis eu non diam phasellus. Iaculis urna id volutpat lacus. Hac
            habitasse platea dictumst quisque sagittis purus. Etiam non quam
            lacus suspendisse faucibus. Scelerisque in dictum non consectetur a
            erat nam at. Dui faucibus in ornare quam viverra orci. Et ligula
            ullamcorper malesuada proin libero nunc. Morbi tincidunt augue
            interdum velit euismod in pellentesque. Feugiat nisl pretium fusce
            id velit ut tortor pretium viverra. Eu non diam phasellus vestibulum
            lorem. Vitae nunc sed velit dignissim sodales ut eu sem integer.
            Ipsum consequat nisl vel pretium lectus. Commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Cursus eget nunc scelerisque viverra
            mauris in aliquam sem. Ut etiam sit amet nisl purus in mollis nunc.
            Turpis cursus in hac habitasse platea dictumst quisque sagittis.
            Mattis enim ut tellus elementum sagittis. Neque ornare aenean
            euismod elementum nisi. Vel eros donec ac odio tempor orci dapibus
            ultrices. Magna eget est lorem ipsum dolor sit amet. Morbi tincidunt
            ornare massa eget egestas purus viverra. Semper auctor neque vitae
            tempus quam pellentesque nec nam. Feugiat sed lectus vestibulum
            mattis ullamcorper velit sed ullamcorper. Interdum posuere lorem
            ipsum dolor sit amet consectetur. In metus vulputate eu scelerisque
            felis imperdiet proin fermentum. Et malesuada fames ac turpis
            egestas maecenas pharetra. Dictum at tempor commodo ullamcorper a
            lacus vestibulum sed arcu.
          </p>
        </div>
      </div>
    );
  }
}
