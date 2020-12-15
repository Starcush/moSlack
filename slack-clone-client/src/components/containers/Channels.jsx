import React from 'react';

import { ChannelsLink, ChannelsLinkDiv } from '../views/StyledComponents';

const Channels = ({ channelList }) => (
  <>
    {channelList.map((el) => (
      <ChannelsLinkDiv>
        <ChannelsLink href="/">{`# ${el}`}</ChannelsLink>
      </ChannelsLinkDiv>
    ))}
  </>
);

export default Channels;
