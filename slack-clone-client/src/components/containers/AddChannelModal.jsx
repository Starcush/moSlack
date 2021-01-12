import React, { useState, useRef, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import {
  ModalHeader,
  ChannelModal,
  ChannelModalMain,
  ModalInput,
  ModalBtnDiv,
  ModalCreateBtn,
  ModalCancelBtn,
} from '../views/StyledComponents';
import { MUTATION_CHANNEL_ADD } from '../../js/apis/query';

const AddChannelModal = ({ handleClose, showModal, handleChannelList }) => {
  const inputEl = useRef(null);
  const [channelName, setChannelName] = useState('');

  const [addChannel] = useMutation(MUTATION_CHANNEL_ADD);

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
            onClick={(e) => handleChannelName(e, channelName)}
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

  function handleChannelName(e, name) {
    e.preventDefault();
    addChannel({
      variables: { name },
    });
    reset();
  }
};

export default AddChannelModal;
