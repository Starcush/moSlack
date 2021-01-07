import React, { useState, useRef, useEffect } from 'react';

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
  const inputEl = useRef(null);
  const [channelName, setChannelName] = useState('');

  useEffect(() => {
    inputEl.current.focus();
  }, [showModal]);

  return (
    <ChannelModal modal={showModal}>
      <ChannelModalMain>
        <ModalHeader>Create Channel</ModalHeader>
        <ModalInput
          type="text"
          placeholder="# name"
          onChange={(e) => handleChange(e.target.value)}
          ref={inputEl}
        />
        <ModalBtnDiv>
          <ModalCreateBtn
            type="button"
            onClick={() => handleChannelName(channelName)}
          >
            Create
          </ModalCreateBtn>
          <ModalCancelBtn type="button" onClick={reset}>
            Cancel
          </ModalCancelBtn>
        </ModalBtnDiv>
      </ChannelModalMain>
    </ChannelModal>
  );

  function handleChange(value) {
    setChannelName(value);
  }

  function reset() {
    handleClose();
    setChannelName('');
    inputEl.current.value = '';
  }

  async function handleChannelName(name) {
    try {
      const result = await addChannel(name);
      handleChannelList([...result]);
      reset();
    } catch (e) {
      throw new Error('handelChannelName ', e);
    }
  }
};

export default AddChannelModal;
