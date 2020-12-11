import styled, { keyframes } from 'styled-components';
import { CaretRight, Plus } from '@styled-icons/fa-solid';
import { Send } from '@styled-icons/material-rounded';

import style from './styledVariables';

export const SlackDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  margin: 0;
`;

export const Row1 = styled.div`
  display: flex;
  flex: 2;
`;

export const Row2 = styled.div`
  display: flex;
  flex: 39;
`;

export const OptionDiv = styled.div`
  background: #350d36;
  color: white;
  width: 100%;
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

export const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;

export const ProfileDiv = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WorkSpaceContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${style.lightPurple};
  border-right: 1px solid ${style.lightPurple};
`;

export const WorkSpaceDiv = styled.div`
  background-color: white;
  width: 37px;
  height: 37px;
  margin-top: 20px;
  border-radius: 5px;
`;

export const ChannelListContainer = styled.div`
  left: 75px;
  flex: 3;
  background: ${(props) => props.theme.backgroundColor};
  color: white;
  height: auto;
  border-top: 1px solid ${style.lightPurple};
`;

export const ChannelListHeader = styled.div`
  margin-left: 20px;
`;

export const ChannelHead = styled.h4`
  display: inline-block;
  margin: 21px 0 0 0;
  color: ${(props) => (props.clicked ? '#fff' : style.lightPurple)};
`;

const toggleList = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

const untoggleList = keyframes`
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const ToggleArrow = styled(CaretRight)`
  width: 1em;
  height: 1em;
  margin-bottom: 3px;
  margin-right: 3px;
  color: ${style.lightPurple};
  animation: ${(props) => (props.clicked ? toggleList : untoggleList)} 0.1s
    linear forwards;
`;

export const AddChannelBtn = styled(Plus)`
  position: relative;
  left: 30px;
  bottom: 1px;
  width: 13px;
  height: 13px;
  color: ${style.lightPurple};

  &:hover {
    color: #fff;
  }
`;

export const ChannelsLinkDiv = styled.div`
  &:hover {
    background-color: #350d36;
  }
`;

export const ChannelsLink = styled.a`
  text-decoration: none;
  display: block;
  margin-block-start: 0em;
  color: ${style.lightPurple};
  margin-left: 35px;
  padding: 0;
  margin-top: 0;

  &:hover {
    color: #fff;
  }
`;

export const ChannelContainer = styled.div`
  flex: 24;
  height: 90vh;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
`;

export const InsertContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: fixed;
  bottom: 10px;
  width: calc(100vw - 20px - (100vw * (1 / 7)));
  height: 15%;
  padding: 20px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #222222;
  width: 98%;
  margin-bottom: 10px;
  border-radius: 3px;
`;

export const Textarea = styled.textarea`
  flex: 2;
  outline: none;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #878787;
  width: 100%;
  padding: 8px;
`;

export const ButtonDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InputButton = styled(Send)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  color: gray;
  cursor: pointer;

  &:hover {
    color: #222222;
  }
`;
