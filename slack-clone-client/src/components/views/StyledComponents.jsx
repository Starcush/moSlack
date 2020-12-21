import styled, { keyframes } from 'styled-components';
import { CaretRight, Plus, User } from '@styled-icons/fa-solid';
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
  width: calc(100vw - 20px);
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

export const UserIcon = styled(User)`
  color: #0074d9;
  width: 18px;
  height: 18px;
  z-index: 3;
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
  flex: 3;
  background: ${(props) => props.theme.backgroundColor};
  color: white;
  height: auto;
  min-width: 162px;
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

export const ModalHeader = styled.h3`
  color: #000;
  text-align: center;
`;

export const ChannelModal = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.modal ? 'block' : 'none')};
`;

export const ChannelModalMain = styled.section`
  position: fixed;
  z-index: 6;
  background: #fff;
  width: 30vw;
  height: 22vh;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 3px gray;
`;

export const ModalInput = styled.input`
  width: 50%;
  height: 15%;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 15px;
`;

export const ModalBtnDiv = styled.div`
  margin-top: 2vh;
`;

const ModalBtn = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 2px gray;
`;

export const ModalCreateBtn = styled(ModalBtn)`
  margin-right: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: #fff;
`;

export const ModalCancelBtn = styled(ModalBtn)``;

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
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const ChannelContainer = styled.div`
  flex: 24;
  display: flex;
  width: calc((100vw - 20px) * (24 / 28));
  height: calc((100vh - 20px) * (39 / 41));
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
`;

export const ContentsListDiv = styled.div`
  width: calc((100vw - 20px) * (24 / 28));
  flex: 30;
  overflow-y: scroll;
  height: calc((85vh - 20px) * (39 / 41));
`;

export const ChannelContentsDiv = styled.div`
  padding: 20px 30px 20px 30px;
  display: flex;
  width: calc((100vw - 120px) * (24 / 28));

  &:hover {
    background-color: #ededed;
  }
`;

export const ImgCol = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const ContentCol = styled.div`
  flex: 25;
`;

export const ProfileImgDiv = styled.div``;

export const UserDiv = styled.div``;

export const Time = styled.time``;

export const ContentSection = styled.section``;

export const InsertContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: fixed;
  z-index: 3;
  bottom: 10px;
  width: calc((100vw - 20px) * (24 / 28));
  height: 15vh;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
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
  background-color: #fff;
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
