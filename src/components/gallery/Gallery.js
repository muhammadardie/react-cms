import React from "react"
import { Link } from "react-router-dom";
import imageUrl from 'constants/imageUrl';

class Gallery extends React.Component {
  render() {
    const limit = this.props.limit,
          items = this.props.items;
    const itemGallery = items.slice(0, limit).map(function(item, index){
      let imageURL = imageUrl.gallery + item.image;
          return <div key={index} className="col-md-4 animate-box">
                  <a href={ item.url } target="_blank"  rel="noopener noreferrer" className="item-grid text-center">
                    <div
                      className="image"
                      style={{
                        backgroundImage: "url(" + imageURL + ")"
                      }}
                    />
                    <div className="v-align">
                      <div className="v-align-middle">
                        <h3 className="title">{ item.title }</h3>
                        <h5 className="category">{ item.desc }</h5>
                      </div>
                    </div>
                  </a>
                </div>
    })

    return (
      <div id="fh5co-work-section" className="fh5co-light-grey-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box">
              <h2>Latest Projects</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            { itemGallery }
            { 
              limit ?
                <div className="col-md-12 text-center animate-box">
                    <p>
                      <Link to="/work" className="btn btn-primary with-arrow">
                        View More Projects <i className="icon-arrow-right" />
                      </Link>
                    </p>
                </div>
              : 
                ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
