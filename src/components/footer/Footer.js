import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutObj: [],
      serviceObj: [],
      socmedObj: []
    };
  }

  componentDidMount() {
   const API_URL  = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
      fetch(API_URL + 'about'),
      fetch(API_URL + 'service'),
      fetch(API_URL + 'socmed'),
  ]);

  promises
    .then((results) => 
      Promise.all( results.map(r => r.json()) )
    )
    .then( ([dataAbout, dataService, dataSocmed]) => {
      this.setState({
            aboutObj: dataAbout, 
            serviceObj: dataService,
            socmedObj: dataSocmed,
        })
    })
    .catch((error) => {
    console.log(error)
    });
  }

  render() {
    const about = this.state.aboutObj.map((item, index) => {
      return <p key={index} dangerouslySetInnerHTML={{ __html: item.desc }}></p>
    })    

    const service1 = this.state.serviceObj[3] && this.state.serviceObj.slice(0,4).map((item, index) => {
      return <li key={index}><a href='#/'>{item.title}</a></li>
    })

    const service2 = this.state.serviceObj[4] && this.state.serviceObj.slice(4).map((item, index) => {
      return <li key={index}><a href='#/'>{item.title}</a></li>
    })

    const socmed = this.state.socmedObj.map((item, index) => {
      return <li key={index}>
                <a href={ item.url }>
                  <i className={ item.icon } />
                  <span>  </span>{ item.name }
                </a>
              </li>
    })

    return (
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
            <h3>About Us</h3>
            { about }
          </div>
          <div className="col-md-6 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
            <h3>Our Services</h3>
            <ul className="float">
              { service1 }
            </ul>
            <ul className="float">
              { service2 }
            </ul>
          </div>
          <div className="col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
            <h3>Follow Us</h3>
            <ul className="fh5co-social">
            { socmed }
            </ul>
          </div>
          <div className="col-md-12 fh5co-copyright text-center">
            <p>
              © 2016 Free HTML5 template. All Rights Reserved.{" "}
              <span>
                Designed with <i className="icon-heart" /> by{" "}
                <a href="http://freehtml5.co/" target="_blank" rel="noopener noreferrer">
                  FreeHTML5.co
                </a>{" "}
                Demo Images by{" "}
                <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer" >
                  Unsplash
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
