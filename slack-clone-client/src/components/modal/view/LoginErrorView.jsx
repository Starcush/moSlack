import React from 'react';
import styled from 'styled-components';

const LoginErrorView = ({ showModal, handleClose }) => (
  <ModalContainer modal={showModal}>
    <Modal>
      먼저 로그인을 해주세요.
      <ModalBtnDiv>
        <ModalBtn onClick={handleClose}>
          확인
        </ModalBtn>
      </ModalBtnDiv>
    </Modal>
  </ModalContainer>
);

const ModalContainer = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.modal ? 'block' : 'none')};
`;

const Modal = styled.section`
  position: fixed;
  z-index: 6;
  background: #fff;
  width: 25vw;
  height: 15vh;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
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

export default LoginErrorView;
