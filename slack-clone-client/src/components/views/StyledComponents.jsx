import styled from 'styled-components';

export const SlackDiv = styled.div`
  box-sizing: border-box;
  padding: 1em;
  width: 100vw;
  height: 100vh;
`;

export const Row = styled.div`
  display: flex;
`;

export const OptionDiv = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: white;
  width: 100%;
  height: 20px;
  flex: 1;
  display: felx;
`;

export const OptionArrowDiv = styled.div`
  flex: 5;
  width: 300px;
  height: 20px;
`;

export const OptionSearchDiv = styled.div`
  flex: 12;
  background: ${(props) => props.theme.backgroundColor};
  opacity: 0.8;
  border: 1px solid black;
  width: 300px;
  height: 20px;
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
