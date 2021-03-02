import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/client';

import { MUTATION_CONTENTS_ADD } from '../../../js/apis/query';
import InsertView from '../view/InsertView';

const InsertContainer = ({ handleModal, channelState }) => {
  const textAreaEl = useRef(null);
  const [textArea, setTextArea] = useState('');
  // const [showLoginErrorModal, setShowLoginErrorModal] = useState(false);
  const { channelInfo: curChannel } = channelState;
  const [postContent] = useMutation(MUTATION_CONTENTS_ADD);

  return (
    <InsertView
      textArea={textArea}
      textAreaEl={textAreaEl}
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      sendMessage={sendMessage}
    />
  );

  function sendMessage(event) {
    const channelID = curChannel.id;
    const userID = Number(window.sessionStorage.getItem('userID'));

    if (!userID) handleModal(true);

    event.preventDefault();
    postContent({
      variables: { userID, channelID, content: textArea },
    });
    setTextArea('');
    textAreaEl.current.focus();
  }

  function handleChange(value) {
    // 이 부분이 ChannelContainer부분에 있어서 상태가 변화될 때마다 ChannelContentsList부분이 렌더링 되지 않도록 하면 될듯?
    setTextArea(value);
  }

  // enter를 누르면 입력이 완료 되고, shift+enter를 통해서 줄바꿈이 되도록
  function handleKeyDown(e) {
    const keyCode = e.which || e.keyCode;

    if (keyCode === 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        sendMessage(e);
      }
    }
  }
};

const mapStateToProps = (state) => ({
  channelState: state.channelReducer,
});

export default connect(mapStateToProps)(InsertContainer);
