import React from 'react';
import { Header, Carousel, Service, Gallery, Post, Testimony, Footer } from 'components';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselObj: [],
      galleryObj: [],
      serviceObj: [],
      testimonyObj: [],
      blogObj: []
    };
  }

  componentDidMount() {
   const API_URL  = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
	  fetch(API_URL + 'carousels'),
      fetch(API_URL + 'galleries'),
      fetch(API_URL + 'services'),
      fetch(API_URL + 'testimonies'),
      fetch(API_URL + 'blogs'),
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataCarousel, dataGallery, dataService, dataTestimony, dataBlog]) => {
	  	this.setState({
            carouselObj: dataCarousel.data, 
            galleryObj: dataGallery.data,
            serviceObj: dataService.data,
            testimonyObj: dataTestimony.data,
            blogObj: dataBlog.data
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
	          	path="carousel"
	          />
	          <Service
	          	items={ this.state.serviceObj }
	          />
	          <Gallery 
	          	items={ this.state.galleryObj }
	          	limit={3}
	          />
	          <Testimony 
	          	items={ this.state.testimonyObj }
	          	limit={3}
	          />
	          <Post 
	          	items={ this.state.blogObj }
	          	limit={2}
	          />
	        <Footer />
	    </div>
	  );
	}
}

export default Home;