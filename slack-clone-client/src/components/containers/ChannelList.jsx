import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import {
  ChannelListContainer,
  ChannelListHeader,
  ChannelHead,
  ToggleArrow,
  AddChannelBtn,
} from '../views/StyledComponents';
import Channels from './ChannelsLink';
import AddChannelModal from './AddChannelModal';
import { QUERY_CHANNEL } from '../../js/apis/query';

const ChannelList = () => {
  const [toggleClicked, setToggleClicked] = useState(true);
  const [show, setShow] = useState(false);

  const { loading, data } = useQuery(QUERY_CHANNEL);

  return (
    <ChannelListContainer>
      <ChannelListHeader>
        <ToggleArrow onClick={toggleList} clicked={toggleClicked} />
        <ChannelHead clicked={toggleClicked}>Channels</ChannelHead>
        <AddChannelBtn onClick={handleOpen} />
      </ChannelListHeader>
      {toggleClicked && !loading && data.channelList.length > 0 ? (
        <Channels />
      ) : (
        <></>
      )}
      <AddChannelModal
        showModal={show}
        handleClose={handleClose}
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
