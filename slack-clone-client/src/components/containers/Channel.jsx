import React, { useState } from 'react';

import {
  ChannelContainer,
  InsertContainer,
  InputDiv,
  Textarea,
  ButtonDiv,
  InputButton,
} from '../views/StyledComponents';
import ChannelContentsList from './ChannelContentList';

const Channel = () => {
  const [text, setText] = useState('');

  return (
    <ChannelContainer>
      <ChannelContentsList />
      <InsertContainer>
        <InputDiv>
          <Textarea
            placeholder="내용을 입력해주세요."
            value={text}
            onChange={(e) => handleChange(e.target.value)}
          />
          <ButtonDiv>
            <InputButton onClick={(e) => sendMessage(e)} />
          </ButtonDiv>
        </InputDiv>
      </InsertContainer>
    </ChannelContainer>
  );

  function sendMessage(event) {
    setText(text);
    // 여기서 전체 글에 추가시키는 함수가 포함되야 한다
    event.preventDefault();
    setText('');
  }

  function handleChange(value) {
    setText(value);
  }
};

export default Channel;
