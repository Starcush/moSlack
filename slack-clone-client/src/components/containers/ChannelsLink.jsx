import React from 'react';

import { ChannelsLinkDiv, ChannelsLink } from '../views/StyledComponents';

const Channels = ({ channelList, curChannelId, handleCurChannel }) => (
  <>
    {channelList.map((el) => (
      <ChannelsLinkDiv>
        <ChannelsLink
          key={el.id}
          check={(curChannelId === el.id)}
          onClick={() => handleCurChannel(el.id)}
        >
          {`# ${el.name}`}
        </ChannelsLink>
      </ChannelsLinkDiv>
    ))}
  </>
);

export default Channels;
