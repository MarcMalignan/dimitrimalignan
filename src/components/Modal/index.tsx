import { PropsWithChildren } from 'react';

import './Modal.scss';

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps & PropsWithChildren) => {
  return (
    <div className="Modal">
      <div className="Modal-close">
        <span onClick={onClose}>✕</span>
      </div>
      <div className="Modal-content">{children}</div>
    </div>
  );
};

export default Modal;
