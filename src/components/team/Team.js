import React from "react";
import imageUrl from 'constants/imageUrl';

class Team extends React.Component {
  render() {
    const items = this.props.items;
    const itemTeam = items.map(function(item, index){
      let imageURL = imageUrl.team + item.image;
          return <div key={index} className="col-md-4 fh5co-staff text-center animate-box">
                    <img src={ imageURL } alt="team" className="img-responsive" />
                    <h3>{ item.name }</h3>
                    <h4>{ item.position }</h4>
                    <p>{ item.quote }</p>
                  </div>
    })

    return (
      <div className="fh5co-team fh5co-light-grey-section">
        <div className="container">
          
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box">
                <h2>The Team</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
              </div>
              { itemTeam }
            </div>
        </div>
      </div>
    );
  }
}

export default Team;
