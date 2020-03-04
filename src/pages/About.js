import React from 'react';
import { Header, Carousel, Company, Team, Footer } from 'components';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerObj: [],
      companyObj: [],
      teamObj: []
    };
  }

  componentDidMount() {
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
	  fetch(API_URL + 'header/page/about'),
      fetch(API_URL + 'company'),
      fetch(API_URL + 'team'),
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataHeader, dataCompany, dataTeam]) => {
	  	this.setState({
            headerObj: dataHeader, 
            companyObj: dataCompany,
            teamObj: dataTeam
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
	          <Company
	          	items={ this.state.companyObj }
	          />
	          <Team
	          	items={ this.state.teamObj }
	          />
	        <Footer />
	    </div>
	  );
	}
}

export default About;