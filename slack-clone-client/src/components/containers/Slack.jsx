import React from 'react';
import { Row1, Row2, SlackDiv } from '../views/StyledComponents';
import * as styledVariables from '../views/styledVariables';
import { channelSize } from '../views/styledVariables';
import Option from '../option/containers/OptionContainer';
import WorkSpace from './WorkSpace';
import ChannelList from './ChannelList';
import Channel from './Channel';

const Slack = () => (
  <>
    <SlackDiv
      width={styledVariables.slackBoxWidth}
      height={styledVariables.slackBoxHeight}
    >
      <Row1>
        <Option />
      </Row1>
      <Row2>
        <WorkSpace />
        <ChannelList />
        <Channel />
      </Row2>
    </SlackDiv>
  </>
);
export default Slack;
