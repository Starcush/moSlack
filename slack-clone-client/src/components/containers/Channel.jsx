import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
import { postContent } from '../../js/apis/api';
import LoginErrorModal from './LoginErrorModal';

const Channel = (props) => {
  const textAreaEl = useRef(null);
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

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

  async function sendMessage(event, p) {
    try {
      const message = text;
      const { channelID } = p;
      setText(text);
      const result = await postContent(channelID, message);

      if (result) {
        // 여기서 전체 글에 추가시키는 함수가 포함되야 한다
        event.preventDefault();
        setText('');
        textAreaEl.current.focus();
      } else {
        setShow(true);
      }
    } catch (e) {
      throw new Error('sendMessage UI ', e);
    }
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
