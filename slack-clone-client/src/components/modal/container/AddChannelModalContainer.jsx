import React, { useState, useRef, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import AddChannelModalView from '../view/AddChannelModalView';
import { MUTATION_CHANNEL_ADD } from '../../../js/apis/query';

const AddChannelModalCotainer = ({ showModal, handleClose }) => {
  const inputEl = useRef(null);
  const [channelName, setChannelName] = useState('');

  const [addChannel] = useMutation(MUTATION_CHANNEL_ADD);

  useEffect(() => {
    inputEl.current.focus();
  }, [showModal]);

  return (
    <AddChannelModalView
      inputEl={inputEl}
      showModal={showModal}
      handleClose={handleClose}
      handleChange={handleChange}
      handleChannelName={handleChannelName}
      reset={reset}
      channelName={channelName}
    />
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

export default AddChannelModalCotainer;
