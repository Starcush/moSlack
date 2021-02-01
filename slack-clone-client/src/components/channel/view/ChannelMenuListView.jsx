import React from 'react';
import styled from 'styled-components';

const ChannelMenuListView = ({ showMenus, handleCheckModal }) => (
  <ModalContainer showMenus={showMenus}>
    <ModalMain>
      <OptionList onClick={() => handleCheckModal(true)}>
        채널삭제
      </OptionList>
    </ModalMain>
  </ModalContainer>
);

export default ChannelMenuListView;

const ModalContainer = styled.div`
  display: ${({ showMenus }) => (showMenus ? 'block' : 'none')};
  /* width: 200px; */
  /* height: 200px; */
  background-color: #ededed;
  position: absolute;
  top: calc((100vh * (39 / 41) * ((1.5) / 17.5)) + 30px); // 어느 화면이든 information icon 밑에 위치하게 하고 싶다.
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
