import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    const { closeOnClick } = this.props;
    if (closeOnClick === true) {
      document.addEventListener('click', this.close);
    }
    document.addEventListener('keyup', this.close);
  }

  componentWillUnmount() {
    const { closeOnClick } = this.props;
    if (closeOnClick === true) {
      document.removeEventListener('click', this.close);
    }
    document.removeEventListener('keyup', this.close);
  }

  close(e) {
    const { onClose } = this.props;
    if ((e.type === 'click' && e.target.tagName !== 'IMG') || (e.type === 'keyup' && e.keyCode === 27)) {
      onClose();
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className="Modal">
        <div className="Modal-close">
          <span onClick={this.close}>✕</span>
        </div>
        <div className="Modal-content">{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.shape({})]),
  onClose: PropTypes.func,
  closeOnClick: PropTypes.bool,
};

Modal.defaultProps = {
  children: [],
  onClose: () => {},
  closeOnClick: false,
};

export default Modal;
