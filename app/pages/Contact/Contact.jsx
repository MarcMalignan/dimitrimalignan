import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Contact.data.json';

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
          <a href={this.state.contact.facebook} target="_blank">Facebook</a>
          <a href={email} target="_blank">eMail</a>
          <a href={emailManager} target="_blank">Manager</a>
        </ContentPanel>
      </Page>
    );
  }
}

export default Contact;
