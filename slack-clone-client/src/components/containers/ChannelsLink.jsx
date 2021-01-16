import React from 'react';

import { ChannelsLinkDiv, ChannelsLink } from '../views/StyledComponents';

const Channels = (props) => (
  <>
    {props.channelList.map((el) => (
      <ChannelsLinkDiv>
        <ChannelsLink
          key={el.id}
          check={(props.curChannelId === el.id)}
          onClick={() => props.handleCurChannel(el.id)}
        >
          {`# ${el.name}`}
        </ChannelsLink>
      </ChannelsLinkDiv>
    ))}
  </>
);

export default Channels;
