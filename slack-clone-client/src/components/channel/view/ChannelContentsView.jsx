import React from 'react';
import styled from 'styled-components';

const ChannelContentsView = ({ data, channelID, timeFormatting }) => (
  <ContentsListDiv>
    {data.channelContents.map((c) => {
      if (c.channel_id !== channelID) {
        return <></>;
      }
      return (
        <ChannelContentsDiv>
          <ImgCol>
            <ProfileImgDiv img={c.profileImg} />
          </ImgCol>
          <ContentCol>
            <ContentHeader>
              <UserDiv>{c.name}</UserDiv>
              <Time>{timeFormatting(c.time)}</Time>
            </ContentHeader>
            <ContentSection>{c.content}</ContentSection>
          </ContentCol>
        </ChannelContentsDiv>
      );
    })}
  </ContentsListDiv>
);

const ContentsListDiv = styled.div`
  box-sizing: border-box;
  width: inherit;
  flex: 13;
  overflow-y: auto;
  height: calc((85vh - 20px) * (39 / 41));
`;

const ChannelContentsDiv = styled.div`
  padding: 20px 30px 20px 30px;
  display: flex;
  /* width: calc((100vw - 120px) * (24 / 28)); */
  width: inherit;
  box-sizing: border-box;

  &:hover {
    background-color: #ededed;
  }
`;

const ImgCol = styled.div`
  flex: 1;
  margin-right: 4px;
`;

const ContentCol = styled.div`
  flex: 25;
`;

const ProfileImgDiv = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-size: cover;
`;

const ContentHeader = styled.div`

`;

const UserDiv = styled.div`
  display: inline-block;
  font-size: 21px;
  font-weight: 800;
`;

const Time = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: gray;
  margin-left: 4px;
  display: inline-block;
`;

const ContentSection = styled.section`
  margin-top: 5px;
`;

export default ChannelContentsView;
