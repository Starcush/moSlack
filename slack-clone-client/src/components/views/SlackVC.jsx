import React from 'react';
import styled from 'styled-components';
import { slackBoxWidth, slcakBoxHeight } from './styledVariables';

const SlackBox = styled.div`
  border: 2px solid black;
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 30px;
`;

const SlackVC = () => (
  <SlackBox width={slackBoxWidth} height={slcakBoxHeight} />
);

export default SlackVC;
