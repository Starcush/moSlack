import styled, { keyframes } from 'styled-components';
import { CaretRight, Plus } from '@styled-icons/fa-solid';
import { MoreHoriz } from '@styled-icons/material';

import style from './styledVariables';

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

export const MoreBtn = styled(MoreHoriz)`
  display: ${({ check }) => (check ? 'inline' : 'none')};
  color: #fff;
  width: 20px;
  height: 20px;
  padding-top: 5px;
  margin-right: 15px;
`;
