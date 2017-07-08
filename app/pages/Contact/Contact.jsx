import React from 'react';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';

import './Contact.scss';

import iconFacebook from '../../../images/icons/facebook.svg';
import iconGmail from '../../../images/icons/gmail.svg';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    commons.getData('contact', (contact) => {
      this.setState({ contact });
    });
  }

  render() {
    if (!this.state.contact) return null;

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
          <div className="Contact-info">
            <p>
              <span>Ce site est développé et maintenu par </span>
              <a href={emailManager} target="_blank">Marc Malignan</a>
              <span>.</span>
            </p>
          </div>
        </ContentPanel>
      </Page>
    );
  }
}

export default Contact;
