import React from 'react';
import styled from 'styled-components';

const WorkSpace = () => (
  <WorkSpaceContainer>
    <WorkSpaceDiv>
      S
    </WorkSpaceDiv>
  </WorkSpaceContainer>
);

const WorkSpaceContainer = styled.div`
flex: 1;
background: ${(props) => props.theme.backgroundColor};
color: white;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
border-top: 1px solid ${(props) => props.theme.secondaryColor};
border-right: 1px solid ${(props) => props.theme.secondaryColor};
`;

const WorkSpaceDiv = styled.div`
background-color: ${(props) => props.theme.secondaryColor};
width: 37px;
height: 37px;
margin-top: 20px;
border-radius: 5px;
text-align: center;
line-height: 37px;
font-weight: 800;
font-size: 20px;
`;

export default WorkSpace;
