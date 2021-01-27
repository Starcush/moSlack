import styled, { keyframes } from 'styled-components';
import { CaretRight, Plus } from '@styled-icons/fa-solid';
import { MoreHoriz } from '@styled-icons/material';

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
