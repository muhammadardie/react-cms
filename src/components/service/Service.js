import React from "react";

class Services extends React.Component {
  render() {
    const items = this.props.items;
    const itemService = items.map(function(item, index){
      return <div key={index} className="col-md-4 animate-box">
              <div className="services">
                <i className={ item.icon } />
                <div className="desc">
                  <h3>{ item.title }</h3>
                  <p>
                    { item.desc }
                  </p>
                </div>
              </div>
            </div>
    })
    return (
      <div id="fh5co-services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box">
              <h2>Our Awesome Features</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            { itemService }
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
