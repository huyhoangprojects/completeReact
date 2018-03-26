import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearModal}
  >

    <h3>Selected option</h3>
    {!!props.selectedOption && <p>{props.selectedOption}</p>}

    <button onClick={props.handleClearModal}>Close</button>
  </Modal>
);

export default OptionModal;