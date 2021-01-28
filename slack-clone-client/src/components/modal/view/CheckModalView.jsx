import React from 'react';
import styled from 'styled-components';

const CheckModalView = ({ showModal, closeModal, deleteChannel }) => (
  <ChannelModal modal={showModal}>
    <ChannelModalMain>
      <ModalHeader>정말로 채널을 지우시겠습니까?</ModalHeader>
      <ModalBtnDiv>
        <ModalOkBtn
          type="button"
          onClick={deleteChannel}
        >
          삭제
        </ModalOkBtn>
        <ModalCancelBtn type="button" onClick={closeModal}>
          취소
        </ModalCancelBtn>
      </ModalBtnDiv>
    </ChannelModalMain>
  </ChannelModal>
);

export default CheckModalView;

const ModalHeader = styled.h3`
  color: #000;
  text-align: center;
`;

const ChannelModal = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.modal ? 'block' : 'none')};
`;

const ChannelModalMain = styled.section`
  position: fixed;
  z-index: 6;
  background: #fff;
  width: 30vw;
  height: 22vh;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 3px gray;
`;

const ModalBtnDiv = styled.div`
  margin-top: 2vh;
`;

const ModalBtn = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 2px gray;
`;

const ModalOkBtn = styled(ModalBtn)`
  margin-right: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: #fff;
`;

const ModalCancelBtn = styled(ModalBtn)``;
