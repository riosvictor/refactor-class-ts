import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface IProps {
  isOpen: boolean
  children: React.ReactNode
  setIsOpen: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void
}

const Modal = ({ isOpen, children, setIsOpen }: IProps) =>  {
  const [modalStatus, setModalStatus] = useState(isOpen)

  useEffect(() => {
    setModalStatus(prevIsOpen => {
      if (prevIsOpen !== isOpen) {
        console.log(isOpen)
        return isOpen
      } else {
        return prevIsOpen
      }
    })
  }, [isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
