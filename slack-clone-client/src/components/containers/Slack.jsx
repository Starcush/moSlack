import React from 'react';
import Option from './Option';
import WorkSpace from './WorkSpace';
import ChannelList from './ChannelList';
import Channel from './Channel';
import SlackVC from '../views/SlackVC';
import OptionVC from '../views/OptionVC';

const Slack = () => {
  const boxStyle = {
    border: '1px solid black',
    width: '200px',
    height: '200px',
  };
  /*
    <div style={boxStyle}>
        <div>
          <p>Option</p>
        </div>
        <div>
          <p>Channel</p>
        </div>
      </div>
  */

  return (
    <>
      <SlackVC>
        <OptionVC />
      </SlackVC>
    </>
  );
};
export default Slack;
