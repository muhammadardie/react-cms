import React from 'react';
import { Header, Carousel, Post, Footer } from 'components';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerObj: [],
      blogObj: []
    };
  }

  componentDidMount() {
   window.scrollTo(0,0);
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
	  fetch(API_URL +'headers/page/blog'),
      fetch(API_URL + 'blogs')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataHeader, dataBlog]) => {
	  	this.setState({
            headerObj: dataHeader.data, 
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
	          	items={ this.state.headerObj }
	          	path="header"
	          />
	          <Post
	          	items={ this.state.blogObj }
	          />
	        <Footer />
	    </div>
	  );
	}
}

export default Blog;