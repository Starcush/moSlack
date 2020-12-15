import React, { useState } from 'react';

import {
  ChannelListContainer,
  ChannelListHeader,
  ChannelHead,
  ToggleArrow,
  AddChannelBtn,
} from '../views/StyledComponents';
import Channels from './Channels';
import AddChannelModal from './AddChannelModal';

const ChannelList = () => {
  const [toggleClicked, setToggleClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [channelList, setChannelList] = useState([]);

  return (
    <ChannelListContainer>
      <ChannelListHeader>
        <ToggleArrow onClick={toggleList} clicked={toggleClicked} />
        <ChannelHead clicked={toggleClicked}>Channels</ChannelHead>
        <AddChannelBtn onClick={addChannel} />
      </ChannelListHeader>
      {toggleClicked && channelList.length > 0 ? (
        <Channels channelList={channelList} />
      ) : (
        <></>
      )}
      <AddChannelModal
        showModal={show}
        handleClose={handleClose}
        handleChannelName={handleChannelName}
      />
    </ChannelListContainer>
  );

  function toggleList() {
    setToggleClicked(!toggleClicked);
  }

  function addChannel() {
    console.log('click add channel button');
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  function handleChannelName(name) {
    console.log('channel name', name);
    setChannelList([...channelList, name]);
    handleClose();
  }
};

export default ChannelList;
