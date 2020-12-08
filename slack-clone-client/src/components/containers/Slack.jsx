import React from 'react';
import { Row, SlackDiv, ChannelDiv } from '../views/StyledComponents';
import * as styledVariables from '../views/styledVariables';
import { channelSize } from '../views/styledVariables';
import Option from './Option';
import WorkSpace from './WorkSpace';
import ChannelList from './ChannelList';

const Slack = () => (
  <>
    <SlackDiv
      width={styledVariables.slackBoxWidth}
      height={styledVariables.slackBoxHeight}
    >
      <Row>
        <Option />
      </Row>
      <Row>
        <WorkSpace />
        <ChannelList />
        <ChannelDiv size={channelSize} height={styledVariables.secondRowHeight}>
          Channel
        </ChannelDiv>
      </Row>
    </SlackDiv>
  </>
);
export default Slack;
