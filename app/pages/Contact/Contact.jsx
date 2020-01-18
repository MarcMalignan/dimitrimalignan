import React from 'react';
import PropTypes from 'prop-types';

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
    commons.getData('contact', contact => {
      this.setState({ contact });
    });
  }

  render() {
    if (!this.state.contact) return null;

    const email = `mailto:${this.state.contact.email}`;
    const emailManager = `mailto:${this.state.contact.emailManager}`;

    const search = this.props.location.search;
    const developLabel = {
      fr: 'Ce site est développé et maintenu par',
      en: 'Website developped and managed by',
    };

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
