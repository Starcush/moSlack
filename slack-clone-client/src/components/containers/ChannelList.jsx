import React, { useState } from 'react';

import {
  ChannelListContainer,
  ChannelListDiv,
  ChannelHead,
  ToggleArrow,
} from '../views/StyledComponents';
import Channels from './Channels';

const ChannelList = () => {
  const [toggleClicked, setToggleClicked] = useState(false);

  return (
    <ChannelListContainer>
      <ChannelListDiv>
        <ChannelHead clicked={toggleClicked}>
          <ToggleArrow onClick={toggleList} clicked={toggleClicked} />
          Channels
        </ChannelHead>
        <Channels />
      </ChannelListDiv>
    </ChannelListContainer>
  );

  function toggleList() {
    setToggleClicked(!toggleClicked);
  }
};

export default ChannelList;
