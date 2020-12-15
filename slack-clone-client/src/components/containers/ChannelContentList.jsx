import React from 'react';
import { connect } from 'react-redux';

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

const ChannelContentsList = (props) => {
  const { list } = props;

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

const mapStateToProps = (state) => ({
  list: state.updateList.list,
});

export default connect(mapStateToProps)(ChannelContentsList);
