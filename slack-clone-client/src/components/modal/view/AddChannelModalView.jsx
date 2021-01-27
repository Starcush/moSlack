import React from 'react';
import styled from 'styled-components';

const AddChannelModal = ({
  inputEl, reset, showModal, handleChange, handleChannelName, channelName,
}) => (
  <ChannelModal modal={showModal}>
    <ChannelModalMain>
      <ModalHeader>Create Channel</ModalHeader>
      <ModalInput
        type="text"
        placeholder="# name"
        onChange={(e) => handleChange(e.target.value)}
        ref={inputEl}
      />
      <ModalBtnDiv>
        <ModalCreateBtn
          type="button"
          onClick={(e) => handleChannelName(e, channelName)}
        >
          Create
        </ModalCreateBtn>
        <ModalCancelBtn type="button" onClick={reset}>
          Cancel
        </ModalCancelBtn>
      </ModalBtnDiv>
    </ChannelModalMain>
  </ChannelModal>
);

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

const ModalInput = styled.input`
  width: 50%;
  height: 15%;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 15px;
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

const ModalCreateBtn = styled(ModalBtn)`
  margin-right: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: #fff;
`;

const ModalCancelBtn = styled(ModalBtn)``;

export default AddChannelModal;
