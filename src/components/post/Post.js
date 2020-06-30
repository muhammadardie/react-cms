import React from "react";
import { Link } from "react-router-dom";
import imageUrl from 'constants/imageUrl';
// import { formatDate } from 'helpers/Formatter';

class Post extends React.Component {
  render() {
    const limit = this.props.limit,
          items = this.props.items;
    const itemBlog = items.slice(0, limit).map(function(item, index){
      let imageURL = imageUrl.blog + item.image;
           return <div key={index} className="col-md-6 col-sm-6 animate-box">
                    <Link to="/blog" className="item-grid">
                      <div
                        className="image"
                        style={{
                          backgroundImage: "url(" + imageURL + ")"
                        }}
                      />
                      <div className="v-align">
                        <div className="v-align-middle">
                          <h3 className="title">{ item.title }</h3>
                          <h5 className="date">
                            <span>{  item.createdAt }</span>
                          </h5>
                          <p dangerouslySetInnerHTML={{ __html: item.content }}>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
    })

    return (
      <div id="fh5co-blog-section" className="fh5co-light-grey-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box">
              <h2>Recent from Blog</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            { itemBlog }
            <div className="col-md-12 text-center animate-box">
            { 
              limit ?
              <p>
                <Link to="/blog" className="btn btn-primary with-arrow">
                  View More Post <i className="icon-arrow-right" />
                </Link>
              </p>
              :
              ''
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
