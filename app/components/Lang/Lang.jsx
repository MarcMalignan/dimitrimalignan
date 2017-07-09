import React from 'react';

class Lang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'fr',
    };
  }

  setLang(lang) {
    if (this.state.lang !== lang) {
      this.setState({ lang });
    }
  }

  render() {
    return (
      <div className="Lang">
        <button onClick={() => this.setLang('fr')}>FR</button>
        <button onClick={() => this.setLang('en')}>EN</button>
      </div>
    );
  }
}

export default Lang;
