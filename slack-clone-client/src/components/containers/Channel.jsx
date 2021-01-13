import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMutation } from '@apollo/client';

import {
  ChannelContainer,
  InsertContainer,
  InputDiv,
  Textarea,
  ButtonDiv,
  InputButton,
} from '../views/StyledComponents';
import ChannelContentsList from './ChannelContentList';
import { updateList } from '../../js/redux/actions';
import { MUTATION_CONTENTS_ADD } from '../../js/apis/query';
import LoginErrorModal from './LoginErrorModal';

const Channel = (props) => {
  const textAreaEl = useRef(null);
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  const [postContent] = useMutation(MUTATION_CONTENTS_ADD);

  return (
    <ChannelContainer>
      <ChannelContentsList />
      <InsertContainer>
        <InputDiv>
          <Textarea
            placeholder="내용을 입력해주세요."
            value={text}
            onChange={(e) => handleChange(e.target.value)}
            ref={textAreaEl}
            onKeyDown={(e) => handleKeyDown(e, props)}
          />
          <ButtonDiv>
            <InputButton onClick={(e) => sendMessage(e, props)} />
          </ButtonDiv>
        </InputDiv>
      </InsertContainer>
      <LoginErrorModal showModal={show} setShow={setShow} />
    </ChannelContainer>
  );

  function sendMessage(event, p) {
    const { channelID } = p;
    const userID = Number(window.sessionStorage.getItem('userID'));

    if (!userID) setShow(true);

    event.preventDefault();
    postContent({
      variables: { userID, channelID, content: text },
    });
    setText('');
    textAreaEl.current.focus();
  }

  function handleChange(value) {
    setText(value);
  }

  // enter를 누르면 입력이 완료 되고, shift+enter를 통해서 줄바꿈이 되도록
  function handleKeyDown(e, p) {
    const keyCode = e.which || e.keyCode;

    if (keyCode === 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        sendMessage(e, p);
      }
    }
  }
};

const mapStateToProps = (state) => ({
  channelID: state.channelReducer.channelID,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    updateList,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
