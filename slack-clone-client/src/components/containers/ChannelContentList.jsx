import React from 'react';

import {
  ContentsListDiv,
  ChannelContentsDiv,
  ProfileImgDiv,
  UserDiv,
  Time,
  ContentSection,
  ImgCol,
  ContentCol,
} from '../views/StyledComponents';

const ChannelContentsList = () => {
  const list = [];

  for (let i = 0; i < 20; i += 1) {
    const content = {
      user: `jun${i}`,
      date: `someday${i}`,
      img: `img${i}`,
      content: `suallasuallaasdfasdfasdfasdfasdfasdfasdf1${i}`,
    };

    list.push(content);
  }

  return (
    <ContentsListDiv>
      {list.map((c) => (
        <ChannelContentsDiv>
          <ImgCol>
            <ProfileImgDiv>{c.img}</ProfileImgDiv>
          </ImgCol>
          <ContentCol>
            <UserDiv>{c.user}</UserDiv>
            <Time dateTime={c.time} />
            <ContentSection>{c.content}</ContentSection>
          </ContentCol>
        </ChannelContentsDiv>
      ))}
    </ContentsListDiv>
  );
};

export default ChannelContentsList;
