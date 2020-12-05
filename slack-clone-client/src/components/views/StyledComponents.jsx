import styled from 'styled-components';

export const SlackDiv = styled.div`
  box-sizing: border-box;
  padding: 1em;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Row = styled.div`
  display: flex;
`;

export const OptionDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  color: white;
  width: 100%;
  height: 5%;
  flex: ${(props) => props.size};
`;

export const WorkSpaceDiv = styled.div`
  flex: ${(props) => props.size};
  background: ${(props) => props.background};
  color: white;
  height: ${(props) => props.height};
`;

export const ChannelListDiv = styled.div`
  flex: ${(props) => props.size};
  background: ${(props) => props.background};
  color: white;
  height: ${(props) => props.height};
`;

export const ChannelDiv = styled.div`
  flex: ${(props) => props.size};
  height: ${(props) => props.height};
`;
