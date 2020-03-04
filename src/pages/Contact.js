import React from 'react';
import { Header, Carousel, Info, Footer } from 'components';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselObj: [],
      contactObj: []
    };
  }

  componentDidMount() {
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
	  fetch(API_URL + 'header/page/contact'),
      fetch(API_URL + 'contact')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataCarousel, dataContact]) => {
	  	this.setState({
            carouselObj: dataCarousel, 
            contactObj: dataContact
        })
	  })
	  .catch((error) => {
		console.log(error)
	  });
  }

  render() {
	return (
	    <div id="fh5co-page">
	        <Header />
	          <Carousel 
	          	items={ this.state.carouselObj }
	          	path="header"
	          />
	          <Info
	          	items={ this.state.contactObj }
	          />
	        <Footer />
	    </div>
	  );
	}
}

export default Contact;