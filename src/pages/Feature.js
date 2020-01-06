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
	   const promises = Promise.all([
		  fetch('header/page/feature'),
	      fetch('service')
		]);

		promises
		  .then((results) => 
		    Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataCarousel, dataService]) => {
		  	this.setState({
	            carouselObj: dataCarousel,
	            serviceObj: dataService
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