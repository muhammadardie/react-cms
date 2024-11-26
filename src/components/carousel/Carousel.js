import React from "react";
import { Fade } from 'react-slideshow-image';
import imageUrl from 'constants/imageUrl';

class Carousel extends React.Component {
  render() {
    const fadeProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: false,
      indicators: this.props.items.length > 1 ? true : false,
      scale: 0.4,
      arrows: false,
      autoplay: true,
    }
    const items        = Array.isArray(this.props.items) ? this.props.items : [this.props.items];
    const path         = this.props.path;
    const itemCarousel = items.map(function(item, index){
      let imageURL = imageUrl[path] + item.image;
      
      return <div key={index} className="each-fade" style={{
                backgroundImage: "url(" + imageURL + ")"
              }}>
              <div className="overlay-gradient" />
                <div className="container">
                  <div className="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <h2>{ item.tagline }</h2>
                      <div className="fh5co-lead" dangerouslySetInnerHTML={{ __html: item.tagdesc }} /> </div>
                  </div>
                </div>
            </div>
    })

    return (
      <aside id="fh5co-hero" className="js-fullheight">
        <div className="slideshow-image">
        <Fade {...fadeProperties}>
            { itemCarousel }
          </Fade>
          </div>
      </aside>
    );
  }
}

export default Carousel;
