import styled from 'styled-components';
import style from './styledVariables';

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
  background: #350d36;
  color: white;
  width: 100%;
  height: 45px;
  flex: 1;
  display: flex;
`;

export const OptionArrowDiv = styled.div`
  flex: 7;
  width: 300px;
  height: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-self: center;
`;

export const LeftArrowDiv = styled.div`
  background-color: ${(props) => (props.background ? style.lightPurple : 'transparent')};
  border-radius: 3px;
  line-height: 5px;
`;

export const RightArrowDiv = styled.div`
  border-radius: 3px;
  line-height: 5px;
  margin-left: 15px;
`;

export const OptionSearchDiv = styled.div`
  flex: 11;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

export const OptionInput = styled.input`
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  height: 20px;
  width: 400px;
  color: #ededed;
`;

export const WorkSpaceDiv = styled.div`
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
  color: white;
  height: 90vh;
`;

export const ChannelListDiv = styled.div`
  flex: 2;
  background: ${(props) => props.theme.backgroundColor};
  color: white;
  height: 90vh;
`;

export const ChannelDiv = styled.div`
  flex: 12;
  height: 90vh;
`;
