import React, { useEffect, useState } from 'react';

import {
  ChannelListContainer,
  ChannelListHeader,
  ChannelHead,
  ToggleArrow,
  AddChannelBtn,
} from '../views/StyledComponents';
import Channels from './ChannelsLink';
import AddChannelModal from './AddChannelModal';
import { getChannelList } from '../../js/apis/api';

const ChannelList = () => {
  const [toggleClicked, setToggleClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannelList = async () => {
      try {
        const channelList = await getChannelList();
        setChannels([...channelList]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchChannelList();
  }, []);

  return (
    <ChannelListContainer>
      <ChannelListHeader>
        <ToggleArrow onClick={toggleList} clicked={toggleClicked} />
        <ChannelHead clicked={toggleClicked}>Channels</ChannelHead>
        <AddChannelBtn onClick={handleOpen} />
      </ChannelListHeader>
      {toggleClicked && channels.length > 0 ? (
        <Channels channelList={channels} />
      ) : (
        <></>
      )}
      <AddChannelModal
        showModal={show}
        handleClose={handleClose}
        handleChannelList={setChannels}
      />
    </ChannelListContainer>
  );

  function toggleList() {
    setToggleClicked(!toggleClicked);
  }

  function handleOpen() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }
};

export default ChannelList;
