import ReactDom from 'react-dom';

const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <div className='flex backdrop-blur-md bg-black/50 justify-center items-center fixed top-0 left-0 bottom-0 right-0'>
      {children}
    </div>,
    document.getElementById('modal')
  );
};
export { Modal };
