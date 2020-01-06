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
   const promises = Promise.all([
	  fetch('header/page/work'),
      fetch('gallery')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataHeader, dataGallery]) => {
	  	this.setState({
            headerObj: dataHeader, 
            galleryObj: dataGallery
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