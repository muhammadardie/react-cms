import React from "react";

class Info extends React.Component {
  render() {
    const items = this.props.items;
    const itemContact = items.map(function(item, index){
          return  <ul key={index} className="contact-info">
                    <li><i className="icon-map"></i>{ item.address }</li>
                    <li><i className="icon-phone"></i>{ item.phone }</li>
                    <li><i className="icon-envelope"></i><a href="#/">{ item.mail }</a></li>
                  </ul>
    })

    return (
      <div className="fh5co-contact animate-box">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>Contact Details</h3>
              { itemContact }
            </div>
            <div className="col-md-9 animate-box">
              <h3>Contact Us</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" placeholder="Name" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" placeholder="Email" type="text" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea name="" className="form-control" id="" cols="30" rows="7" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input value="Send Message" className="btn btn-primary" type="submit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default Info;
