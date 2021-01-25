import styled, { keyframes } from 'styled-components';
import { CaretRight, Plus } from '@styled-icons/fa-solid';
import { MoreHoriz } from '@styled-icons/material';
import GoogleIcon from '../../google.png';

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

export const UserIcon = styled.div`
  content: url(${GoogleIcon});
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
  background-color: ${style.lightPurple};;
  width: 37px;
  height: 37px;
  margin-top: 20px;
  border-radius: 5px;
  text-align: center;
  line-height: 37px;
  font-weight: 800;
  font-size: 20px;
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
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ChannelsLink = styled.a`
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  margin-block-start: 0em;
  color: ${({ check }) => (check ? '#fff' : style.lightPurple)};
  background-color: ${({ check }) => (check ? '#1164a3' : 'none')};
  padding: 1px 0 0 35px;
  margin-top: 0;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${({ check }) => (check ? '#1164a3' : '#350d36')};
  }
`;

export const ChannelContainer = styled.div`
  flex: 24;
  display: flex;
  flex-direction: column;
  width: calc((100vw - 20px) * (24 / 28));
  height: calc((100vh - 20px) * (39 / 41));
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
`;

export const ContentsListDiv = styled.div`
  width: calc((100vw - 20px) * (24 / 28));
  flex: 30;
  overflow-y: auto;
  height: calc((85vh - 20px) * (39 / 41));
`;

export const MoreBtn = styled(MoreHoriz)`
  display: ${({ check }) => (check ? 'inline' : 'none')};
  color: #fff;
  width: 20px;
  height: 20px;
  padding-top: 5px;
  margin-right: 15px;
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
  margin-right: 4px;
`;

export const ContentCol = styled.div`
  flex: 25;
`;

export const ProfileImgDiv = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-size: cover;
`;

export const ContentHeader = styled.div`

`;

export const UserDiv = styled.div`
  display: inline-block;
  font-size: 21px;
  font-weight: 800;
`;

export const Time = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: gray;
  margin-left: 4px;
  display: inline-block;
`;

export const ContentSection = styled.section`
  margin-top: 5px;
`;
