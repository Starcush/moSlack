import React from 'react';
import styled from 'styled-components';

const ChannelModalView = ({ showModal, deleteChannel }) => (
  <ModalContainer showModal={showModal}>
    <ModalMain>
      <OptionList onClick={deleteChannel}>
        채널삭제
      </OptionList>
    </ModalMain>
  </ModalContainer>
);

export default ChannelModalView;

const ModalContainer = styled.div`
  display: ${({ showModal }) => (showModal ? 'block' : 'none')};
  /* width: 200px; */
  /* height: 200px; */
  background-color: #ededed;
  position: absolute;
  top: 85px;
  right: 50px;
  border-radius: 5px;
`;

const ModalMain = styled.ul`
  margin: 0;
  padding: 5px 10px;
  font-size: 14px;
  list-style: none;
`;

const OptionList = styled.li`
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
