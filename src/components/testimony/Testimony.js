import React from "react";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import imageUrl from 'constants/imageUrl';
import '@brainhubeu/react-carousel/lib/style.css';

class Testimony extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
    }
    this.onchange = this.onchange.bind(this);
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    const limit = this.props.limit,
          items = this.props.items;
    const itemTestimony = items.slice(0, limit).map(function(item, index){
      let imageURL = imageUrl.testimony + item.avatar;
          return <div className="item" key={index}>
                   <div className="testimony-slide active text-center">
                     <figure>
                       <img src={ imageURL } alt="user" />
                     </figure>
                     <blockquote>
                       <p>
                         { item.comment }
                       </p>
                     </blockquote>
                     <span>
                       { item.username }
                     </span>
                   </div>
                 </div>
    })

    return (
      <div id="fh5co-testimony-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box">
              <h2>Clients Feedback</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-offset-0 to-animate">
              <div className="wrap-testimony animate-box">
                <Carousel
                  value={this.state.value}
                  slides={itemTestimony}
                  onChange={this.onchange}
                />
                <Dots value={this.state.value} onChange={this.onchange} number={itemTestimony.length} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimony;
