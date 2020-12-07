import React from 'react';
import {
  Row,
  SlackDiv,
  ChannelListDiv,
  ChannelDiv,
} from '../views/StyledComponents';
import * as styledVariables from '../views/styledVariables';
import { channelSize } from '../views/styledVariables';
import Option from './Option';
import WorkSpace from './WorkSpace';

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
        <ChannelListDiv
          background={styledVariables.defaultColor}
          size={styledVariables.channelListSize}
          height={styledVariables.secondRowHeight}
        >
          ChannelList
        </ChannelListDiv>
        <ChannelDiv size={channelSize} height={styledVariables.secondRowHeight}>
          Channel
        </ChannelDiv>
      </Row>
    </SlackDiv>
  </>
);
export default Slack;
