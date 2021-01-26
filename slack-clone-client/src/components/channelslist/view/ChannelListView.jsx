import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CaretRight, Plus } from '@styled-icons/fa-solid';

import ChannelLinkView from './ChannelLinkView';
import AddChannelModal from '../../containers/AddChannelModal';

const ChannelListView = ({
  data, curChannelId, showAddModal, toggleClicked, toggleList, handleShowModal, handleCurChannel,
}) => (
  <ChannelListContainer>
    <ChannelListHeader>
      <ToggleArrow onClick={toggleList} clicked={toggleClicked} />
      <ChannelHead clicked={toggleClicked}>Channels</ChannelHead>
      <AddChannelBtn onClick={() => handleShowModal('open')} />
    </ChannelListHeader>
    {toggleClicked && data.channelList.length > 0 ? (
      <ChannelLinkView
        channelList={data.channelList}
        handleCurChannel={handleCurChannel}
        curChannelId={curChannelId}
      />
    ) : (
      <></>
    )}
    <AddChannelModal
      showModal={showAddModal}
      handleClose={() => handleShowModal('close')}
    />
  </ChannelListContainer>
);

const ChannelListContainer = styled.div`
  flex: 3;
  background: ${(props) => props.theme.backgroundColor};
  color: white;
  height: auto;
  min-width: 162px;
  border-top: 1px solid ${(props) => props.theme.secondaryColor};
`;

const ChannelListHeader = styled.div`
  margin-left: 20px;
`;

const ChannelHead = styled.h4`
  display: inline-block;
  margin: 21px 0 0 0;
  color: ${(props) => (props.clicked ? '#fff' : props.theme.secondaryColor)};
`;

const toggleList = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

const untoggleList = keyframes`
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const ToggleArrow = styled(CaretRight)`
  width: 1em;
  height: 1em;
  margin-bottom: 3px;
  margin-right: 3px;
  color: ${(props) => props.theme.secondaryColor};
  animation: ${(props) => (props.clicked ? toggleList : untoggleList)} 0.1s
    linear forwards;
`;

const AddChannelBtn = styled(Plus)`
  position: relative;
  left: 30px;
  bottom: 1px;
  width: 13px;
  height: 13px;
  color: ${(props) => props.theme.secondaryColor};

  &:hover {
    color: #fff;
  }
`;

export default ChannelListView;
