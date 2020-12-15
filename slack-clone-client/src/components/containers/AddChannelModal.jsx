import React, { useState } from 'react';

import {
  ModalHeader,
  ChannelModal,
  ChannelModalMain,
  ModalInput,
  ModalBtnDiv,
  ModalCreateBtn,
  ModalCancelBtn,
} from '../views/StyledComponents';

const AddChannelModal = ({ handleClose, showModal, handleChannelName }) => {
  const [channelName, setChannelName] = useState('');

  return (
    <ChannelModal modal={showModal}>
      <ChannelModalMain>
        <ModalHeader>Create Channel</ModalHeader>
        <ModalInput
          type="text"
          placeholder="# name"
          onChange={(e) => handleChange(e.target.value)}
        />
        <ModalBtnDiv>
          <ModalCreateBtn
            type="button"
            onClick={() => handleChannelName(channelName)}
          >
            Create
          </ModalCreateBtn>
          <ModalCancelBtn type="button" onClick={handleClose}>
            Cancel
          </ModalCancelBtn>
        </ModalBtnDiv>
      </ChannelModalMain>
    </ChannelModal>
  );

  function handleChange(value) {
    setChannelName(value);
  }
};

export default AddChannelModal;
