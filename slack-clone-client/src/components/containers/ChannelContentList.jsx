import React, { useEffect, useState } from 'react';
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
import { getChannelContents } from '../../js/apis/api';

const ChannelContentsList = (props) => {
  // from redux
  const { channelID } = props;

  const [channelList, setChannelList] = useState([]);

  useEffect(() => {
    const fetchChannelContents = async () => {
      console.log('fetch channel contents');
      try {
        const data = await getChannelContents(channelID);
        setChannelList([...data]);
      } catch (e) {
        console.log('fetch channel contents', e);
      }
    };

    fetchChannelContents();
  }, [channelID]);

  return (
    <ContentsListDiv>
      {channelList.map((c) => (
        <ChannelContentsDiv>
          <ImgCol>
            {/* <ProfileImgDiv>{c.img}</ProfileImgDiv> */}
          </ImgCol>
          <ContentCol>
            {/* <UserDiv>{c.user}</UserDiv>
            <Time dateTime={c.time} /> */}
            <ContentSection>{c.content}</ContentSection>
          </ContentCol>
        </ChannelContentsDiv>
      ))}
    </ContentsListDiv>
  );
};

const mapStateToProps = (state) => ({
  list: state.updateList.list,
  channelID: state.updateChannelID.channelID,
});

export default connect(mapStateToProps)(ChannelContentsList);
