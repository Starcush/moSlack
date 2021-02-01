import React, { useState } from 'react';

import CheckModalView from '../view/CheckModalView';

const CheckModal = ({ showModal, handleCheckModal, deleteChannel }) => {
  return (
    <CheckModalView
      showModal={showModal}
      closeModal={closeModal}
      deleteChannel={deleteChannel}
    />
  );
  function closeModal() {
    handleCheckModal(false);
  }
};

export default CheckModal;
