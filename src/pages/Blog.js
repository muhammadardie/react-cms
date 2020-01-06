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
   const promises = Promise.all([
	  fetch('header/page/blog'),
      fetch('blog')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataHeader, dataBlog]) => {
	  	this.setState({
            headerObj: dataHeader, 
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