import React from 'react';
import styled from 'styled-components';
import { optionBoxWidth, optionBoxHeight } from './styledVariables';

const OptionBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: blue;
`;

const OptionVC = () => (
  <OptionBox width={optionBoxWidth} height={optionBoxHeight}>
    <p>Helloooo</p>
  </OptionBox>
);

export default OptionVC;
