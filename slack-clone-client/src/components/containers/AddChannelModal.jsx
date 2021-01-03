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
import { addChannel } from '../../js/apis/api';

const AddChannelModal = ({ handleClose, showModal, handleChannelList }) => {
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

  async function handleChannelName(name) {
    try {
      const result = await addChannel(name);
      handleChannelList([...result]);
    } catch (e) {
      throw new Error('handelChannelName ', e);
    }
    handleClose();
    setChannelName('');
  }
};

export default AddChannelModal;
