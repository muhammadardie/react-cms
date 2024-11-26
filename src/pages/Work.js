import React from 'react';
import { Header, Carousel, Gallery, Footer } from 'components';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerObj: [],
      galleryObj: []
    };
  }

  componentDidMount() {
   window.scrollTo(0,0);
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
	  fetch(API_URL + 'headers/page/work'),
      fetch(API_URL + 'galleries')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataHeader, dataGallery]) => {
	  	this.setState({
            headerObj: dataHeader.data, 
            galleryObj: dataGallery.data
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
	          	items={ this.state.headerObj }
	          	path="header"
	          />
	          <Gallery 
	          	items={ this.state.galleryObj }
	          />
	        <Footer />
	    </div>
	  );
	}
}

export default Work;