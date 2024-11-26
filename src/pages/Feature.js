import React from 'react';
import { Header, Carousel, Service, Footer } from 'components';

class Feature extends React.Component {
  	constructor(props) {
		super(props);
	    this.state = {
	      carouselObj: [],
	      serviceObj: []
	    };
	}

	  componentDidMount() {
	   const API_URL = process.env.REACT_APP_API_URL;
	   const promises = Promise.all([
		  fetch(API_URL + 'headers/page/feature'),
	      fetch(API_URL + 'services')
		]);

		promises
		  .then((results) => 
		    Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataCarousel, dataService]) => {
		  	this.setState({
	            carouselObj: dataCarousel.data,
	            serviceObj: dataService.data
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
	          <Service
	          	items={ this.state.serviceObj }
	          />
	        <Footer />
	    </div>
	  );
	}
}

export default Feature;