import React, { useState } from 'react';

import {
  ChannelListContainer,
  ChannelListDiv,
  ChannelHead,
  ToggleArrow,
} from '../views/StyledComponents';

const ChannelList = () => {
  const [toggleClicked, setToggleClicked] = useState(false);

  const listArr = ['가입인사', '취직준비', '컴퓨터 부품'];

  return (
    <ChannelListContainer>
      <ChannelListDiv>
        <ChannelHead clicked={toggleClicked}>
          <ToggleArrow onClick={toggleList} clicked={toggleClicked} />
          Channels
        </ChannelHead>
      </ChannelListDiv>
    </ChannelListContainer>
  );

  function toggleList() {
    setToggleClicked(!toggleClicked);
  }
};

export default ChannelList;
