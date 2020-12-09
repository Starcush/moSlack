import React from 'react';

import { ChannelsLink, ChannelsLinkDiv } from '../views/StyledComponents';

const Channels = () => {
  const list = [1, 2, 3];

  return (
    <>
      {list.map((el) => (
        <ChannelsLinkDiv>
          <ChannelsLink href="/">{`# ${el}`}</ChannelsLink>
        </ChannelsLinkDiv>
      ))}
    </>
  );
};

export default Channels;
