import React from 'react';
import { Header, Footer } from 'components';
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
	  return (
	    <div id="fh5co-page">
	        <Header />
	            <div className="container" style={{marginTop: 100, marginBottom: 100 }}>
		          <div className="row">
		            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box">
		              <h2>Page Not Found</h2>
		              <p>
		                Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable
		              </p>
		              <p>
		              	<Link to="/" className="btn btn-primary btn-lg">Go To Homepage</Link>
		              </p>
		            </div>
		          </div>
		        </div>
	        <Footer />
	    </div>
	  );
	}
}

export default NotFound;