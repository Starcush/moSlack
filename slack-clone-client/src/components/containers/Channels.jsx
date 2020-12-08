import React from 'react';

import { ChannelsUl } from '../views/StyledComponents';

const Channels = () => {
  const list = [1, 2, 3];

  return (
    <ChannelsUl>
      {list.map((el) => (
        <li>{el}</li>
      ))}
    </ChannelsUl>
  );
};

export default Channels;
