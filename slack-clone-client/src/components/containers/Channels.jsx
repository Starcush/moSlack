import React from 'react';

import { ChannelsLink, ChannelsLinkDiv } from '../views/StyledComponents';

const Channels = ({ channelList }) => (
  <>
    {channelList.map((el) => (
      <ChannelsLinkDiv>
        <ChannelsLink key={el.id} href="/">{`# ${el.name}`}</ChannelsLink>
      </ChannelsLinkDiv>
    ))}
  </>
);

export default Channels;
