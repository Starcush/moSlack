import React, { useState } from 'react';
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

const Channel = (props) => {
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
            <InputButton onClick={(e) => sendMessage(e, props)} />
          </ButtonDiv>
        </InputDiv>
      </InsertContainer>
    </ChannelContainer>
  );

  async function sendMessage(event, p) {
    try {
      const message = text;
      const { channelID } = p;
      setText(text);
      const contentId = await postContent(channelID, message);
      console.log('contentId ', contentId);
      // 여기서 전체 글에 추가시키는 함수가 포함되야 한다
      event.preventDefault();
      // p.updateList(text);
      setText('');
    } catch (e) {
      console.log('sendMessage UI ', e);
    }
  }

  function handleChange(value) {
    setText(value);
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
