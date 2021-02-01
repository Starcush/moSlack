import React from 'react';
import styled from 'styled-components';
import { Send } from '@styled-icons/material-rounded';

import ChannelContentsList from '../container/ChannelContentsContainer';
import ChannelHeader from '../container/ChannelHeader';
// import ChannelDetail from '../container/ChannelDetail';
import ModalContainer from '../../modal/container/ModalContainer';

const ChannelView = ({
  showDetail, curChannel, textArea, textAreaEl, handleChange,
  handleKeyDown, showLoginErrorModal, setShowLoginErrorModal, sendMessage,
}) => (
  <ChannelContainer>
    <PrimaryContents showDetail={showDetail}>
      <ChannelHeader curChannel={curChannel} />
      <ChannelContentsList />
      <InsertContainer showDetail={showDetail}>
        <InputDiv>
          <Textarea
            placeholder="내용을 입력해주세요."
            value={textArea}
            onChange={(e) => handleChange(e.target.value)}
            ref={textAreaEl}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <ButtonDiv>
            <InputButton onClick={(e) => sendMessage(e)} />
          </ButtonDiv>
        </InputDiv>
      </InsertContainer>
      <ModalContainer type="loginError" showModal={showLoginErrorModal} handleClose={() => setShowLoginErrorModal(false)} />
    </PrimaryContents>
    <SecondaryContents>
      {/* <ChannelDetail /> */}
    </SecondaryContents>
  </ChannelContainer>
);

const ChannelContainer = styled.div`
  flex: 24;
  display: flex;
  flex-direction: row;
  width: calc((100vw - 20px) * (24 / 28));
  height: calc((100vh - 20px) * (39 / 41));
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
`;

const PrimaryContents = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ showDetail }) => (showDetail ? 'calc((100vw - 20px) * (24 / 28) - 400px)' : 'calc((100vw - 20px) * (24 / 28))')};
  box-sizing: border-box;
  border-right: 1px solid gray;
`;

const SecondaryContents = styled.div`
  width: 400px;
  height: 100%;
`;

const InsertContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  /* position: fixed; */
  z-index: 3;
  bottom: 10px;
  width: ${({ showDetail }) => (showDetail ? 'calc((100vw - 20px) * (24 / 28) - 400px)' : 'calc((100vw - 20px) * (24 / 28))')};
  /* width: 100%; */
  /* height: 15vh; */
  /* padding: 10px; */
  background-color: #fff;
  border-right: 1px solid gray;
  border-top: 1px solid gray;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #222222;
  width: 95%;
  /* margin-bottom: 10px; */
  border-radius: 3px;
  margin: 20px 20px;
`;

const Textarea = styled.textarea`
  flex: 2;
  outline: none;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #878787;
  width: 100%;
  padding: 8px;
`;

const ButtonDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
`;

const InputButton = styled(Send)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  color: gray;
  cursor: pointer;

  &:hover {
    color: #222222;
  }
`;

export default ChannelView;
