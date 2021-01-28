import React from 'react';
import styled from 'styled-components';
import Option from './components/option/containers/OptionContainer';
import WorkSpace from './components/workspace/container/WorkSpaceContainer';
import ChannelList from './components/channelslist/container/ChannelList';
import Channel from './components/channel/container/ChannelContainer';

const Slack = () => (
  <>
    <SlackDiv>
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

const SlackDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  margin: 0;
`;

const Row1 = styled.div`
  display: flex;
  flex: 2;
`;

const Row2 = styled.div`
  display: flex;
  flex: 39;
`;

export default Slack;
