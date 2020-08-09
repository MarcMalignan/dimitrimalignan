import React from 'react';
import PropTypes from 'prop-types';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';

import './Contact.scss';

import iconFacebook from '../../../images/icons/facebook.svg';
import iconInstagram from '../../../images/icons/instagram.svg';
import iconSpotify from '../../../images/icons/spotify.svg';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    commons.getData('contact', contact => {
      this.setState({ contact });
    });
  }

  render() {
    if (!this.state.contact) return null;

    const email = `mailto:${this.state.contact.email}`;
    const emailManager = `mailto:${this.state.contact.emailManager}`;
    const emailAgent = `mailto:${this.state.contact.agent.email}`;
    const phoneAgent = `tel:${this.state.contact.agent.phone.replace(/ /g, '')}`;

    const search = this.props.location.search;
    const contactMeLabel = {
      fr: 'Me contacter',
      en: 'Contact me',
    };
    const contactAgentLabel = {
      fr: 'Contacter mon agent',
      en: 'Contact my agent',
    };
    const developLabel = {
      fr: 'Ce site est développé et maintenu par',
      en: 'Website developped and managed by',
    };

    return (
      <Page pageName="Contact">
        <ContentPanel>
          <div className="Contact-main">
            <div className="Contact-main-column">
              <h1>{commons.translate(search, contactMeLabel)}</h1>
              <div className="Contact-main-line">
                <a href={email} target="_blank">{this.state.contact.email}</a>
              </div>
            </div>
            <div className="Contact-main-column">
              <h1>{commons.translate(search, contactAgentLabel)}</h1>
              <div className="Contact-main-line">{this.state.contact.agent.name}</div>
              <div className="Contact-main-line">
                {this.state.contact.agent.title}
                {' - '}
                <a href={this.state.contact.agent.link} target="_blank">{this.state.contact.agent.company}</a>
              </div>
              <div className="Contact-main-line">
                <a href={emailAgent} target="_blank">{this.state.contact.agent.email}</a>
              </div>
              <div className="Contact-main-line">
                <a href={phoneAgent} target="_blank">{this.state.contact.agent.phone}</a>
              </div>
            </div>
          </div>
        </ContentPanel>
        <ContentPanel>
          <div className="Contact-sub">
            <div className="Contact-sub-link">
              <a href={this.state.contact.facebook} target="_blank">
                <img src={iconFacebook} alt="Facebook" />
              </a>
            </div>
            <div className="Contact-sub-link">
              <a href={this.state.contact.instagram} target="_blank">
                <img src={iconInstagram} alt="Instagram" />
              </a>
            </div>
            <div className="Contact-sub-link">
              <a href={this.state.contact.spotify} target="_blank">
                <img src={iconSpotify} alt="Spotify" />
              </a>
            </div>
          </div>
        </ContentPanel>
        <ContentPanel>
          <div className="Contact-info">
            <p>
              <span>{commons.translate(search, developLabel)} </span>
              <a href={emailManager} target="_blank">
                Marc Malignan
              </a>
              <span>.</span>
            </p>
          </div>
        </ContentPanel>
      </Page>
    );
  }
}

Contact.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Contact.defaultProps = {
  location: {
    search: '',
  },
};

export default Contact;
