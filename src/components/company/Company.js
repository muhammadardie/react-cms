import React from "react";
import imageUrl from 'constants/imageUrl';

class Company extends React.Component {
  render() {
    const items = this.props.items;
    const itemCompany = items.map(function(item, index){
      let imageURL = imageUrl.company + item.image;
          return  <div key={index} className="fh5co-about animate-box">
                    <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
                      <h2>{ item.title }</h2>
                      <p> { item.desc } </p>
                    </div>  
                    <div className="container">
                      <div className="col-md-12 animate-box">
                        <figure>
                          <img src={ imageURL } alt="company" className="img-responsive" />
                        </figure>
                      </div>
                    </div>
                  </div>
    })
    
    return (
      <div>
        { itemCompany }
      </div>
    );
  }
}

export default Company;
