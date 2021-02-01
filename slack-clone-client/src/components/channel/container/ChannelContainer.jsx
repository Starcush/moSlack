import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/client';

import { MUTATION_CONTENTS_ADD } from '../../../js/apis/query';
import ChannelView from '../view/ChannelView';

const Channel = (props) => {
  const textAreaEl = useRef(null);
  const [textArea, setTextArea] = useState('');
  const [showLoginErrorModal, setShowLoginErrorModal] = useState(false);
  const { channelState } = props;
  const { channel: curChannel, showDetail } = channelState;

  const [postContent] = useMutation(MUTATION_CONTENTS_ADD);

  return (
    <ChannelView
      showDetail={showDetail}
      curChannel={curChannel}
      textArea={textArea}
      textAreaEl={textAreaEl}
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      channelState={channelState}
      showLoginErrorModal={showLoginErrorModal}
      setShowLoginErrorModal={setShowLoginErrorModal}
      sendMessage={sendMessage}
    />
  );

  function sendMessage(event) {
    const channelID = curChannel.id;
    const userID = Number(window.sessionStorage.getItem('userID'));

    if (!userID) setShowLoginErrorModal(true);

    event.preventDefault();
    postContent({
      variables: { userID, channelID, content: textArea },
    });
    setTextArea('');
    textAreaEl.current.focus();
  }

  function handleChange(value) {
    setTextArea(value);
  }

  // enter를 누르면 입력이 완료 되고, shift+enter를 통해서 줄바꿈이 되도록
  function handleKeyDown(e) {
    const keyCode = e.which || e.keyCode;

    if (keyCode === 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        sendMessage(e, props);
      }
    }
  }
};

const mapStateToProps = (state) => ({
  channelState: state.channelReducer,
});

export default connect(mapStateToProps)(Channel);
