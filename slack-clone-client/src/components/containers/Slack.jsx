import React from 'react';
import {
  Row,
  SlackDiv,
  OptionDiv,
  WorkSpaceDiv,
  ChannelListDiv,
  ChannelDiv,
} from '../views/StyledComponents';
import * as styledVariables from '../views/styledVariables';
import { channelSize } from '../views/styledVariables';

const Slack = () => (
  <>
    <SlackDiv
      width={styledVariables.slackBoxWidth}
      height={styledVariables.slackBoxHeight}
    >
      <Row>
        <OptionDiv
          width={styledVariables.optionBoxWidth}
          height={styledVariables.optionBoxHeight}
          background={styledVariables.defaultColor}
          size={styledVariables.optionFlexSize}
        >
          Option
        </OptionDiv>
      </Row>
      <Row>
        <WorkSpaceDiv
          background={styledVariables.defaultColor}
          size={styledVariables.workSpaceSize}
          height={styledVariables.secondRowHeight}
        >
          WorkSpace
        </WorkSpaceDiv>
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
