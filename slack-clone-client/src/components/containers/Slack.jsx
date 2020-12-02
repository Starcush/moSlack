import React from 'react';
import Options from './Options';
import WorkSpace from './WorkSpace';
import ChannelList from './ChannelList';
import Channel from './Channel';
import SlackVC from '../views/SlackVC';

const Slack = () => (
  <div>
    <SlackVC>
      <Options />
      <WorkSpace />
      <ChannelList />
      <Channel />
    </SlackVC>
  </div>
);

export default Slack;
