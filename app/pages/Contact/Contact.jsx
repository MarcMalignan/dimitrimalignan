import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Contact.data.json';

import './Contact.scss';

import iconFacebook from '../../../images/icons/facebook.svg';
import iconGmail from '../../../images/icons/gmail.svg';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: data,
    };
  }

  render() {
    const email = `mailto:${this.state.contact.email}`;
    const emailManager = `mailto:${this.state.contact.emailManager}`;

    return (
      <Page pageName="Contact">
        <ContentPanel>
          <div className="Contact-main">
            <div className="Contact-main-link">
              <a href={this.state.contact.facebook} target="_blank">
                <img src={iconFacebook} alt="Facebook" />
              </a>
            </div>
            <div className="Contact-main-link">
              <a href={email} target="_blank">
                <img src={iconGmail} alt="Facebook" />
              </a>
            </div>
          </div>
        </ContentPanel>
        <ContentPanel>
          <a href={emailManager} target="_blank">Manager</a>
        </ContentPanel>
      </Page>
    );
  }
}

export default Contact;
