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
	  fetch(API_URL + 'carousel'),
      fetch(API_URL + 'gallery'),
      fetch(API_URL + 'service'),
      fetch(API_URL + 'testimony'),
      fetch(API_URL + 'blog'),
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataCarousel, dataGallery, dataService, dataTestimony, dataBlog]) => {
	  	this.setState({
            carouselObj: dataCarousel, 
            galleryObj: dataGallery,
            serviceObj: dataService,
            testimonyObj: dataTestimony,
            blogObj: dataBlog
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