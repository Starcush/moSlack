import React from 'react';
import styled from 'styled-components';

const Channels = ({ channelList, curChannelId, handleCurChannel }) => (
  <>
    {channelList.map((el) => (
      <ChannelsLinkDiv>
        <ChannelsLink
          key={el.id}
          check={(curChannelId === el.id)}
          onClick={() => handleCurChannel(el.id)}
        >
          {`# ${el.name}`}
        </ChannelsLink>
      </ChannelsLinkDiv>
    ))}
  </>
);

const ChannelsLinkDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ChannelsLink = styled.a`
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  margin-block-start: 0em;
  color: ${(props) => (props.check ? '#fff' : props.theme.secondaryColor)};
  background-color: ${({ check }) => (check ? '#1164a3' : 'none')};
  padding: 1px 0 0 35px;
  margin-top: 0;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${({ check }) => (check ? '#1164a3' : '#350d36')};
  }
`;

export default Channels;
