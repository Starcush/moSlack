import React, { useState } from 'react';

import {
  ChannelListContainer,
  ChannelListHeader,
  ChannelHead,
  ToggleArrow,
  AddChannelBtn,
} from '../views/StyledComponents';
import Channels from './Channels';

const ChannelList = () => {
  const [toggleClicked, setToggleClicked] = useState(false);

  return (
    <ChannelListContainer>
      <ChannelListHeader>
        <ToggleArrow onClick={toggleList} clicked={toggleClicked} />
        <ChannelHead clicked={toggleClicked}>Channels</ChannelHead>
        <AddChannelBtn onClick={addChannel} />
      </ChannelListHeader>
      {toggleClicked ? <Channels /> : <></>}
    </ChannelListContainer>
  );

  function toggleList() {
    setToggleClicked(!toggleClicked);
  }

  function addChannel() {
    console.log('click add channel button');
  }
};

export default ChannelList;
