import React, { Component } from 'react';
import './CampaignNav.css';

export default class CampaignNav extends Component {

  render() {
    let navLinks = this.props.envelopes.map((envelope, index) => {
      let navId = envelope.props.id;
      if (navId) {

        return <div key={index} className='campaignLinks' onClick={() => this.props.scrollTo(document.getElementById(navId))}>

                {envelope.props.id}

               </div>
      };

    });

    return <div className="CampaignNav">

            {navLinks}

           </div>
  }
};
