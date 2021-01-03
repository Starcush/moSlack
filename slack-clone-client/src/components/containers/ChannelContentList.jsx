import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { gql, useQuery } from '@apollo/client';
import moment from 'moment';

import {
  ContentsListDiv,
  ChannelContentsDiv,
  ContentHeader,
  ProfileImgDiv,
  UserDiv,
  Time,
  ContentSection,
  ImgCol,
  ContentCol,
} from '../views/StyledComponents';

const CHAT_QUERY = gql`
  query channelContents($channelId: Int!) {
    channelContents(channelId: $channelId) {
      id
      user_id
      channel_id
      time
      content
      name
      profileImg
    }
  }
`;

const CHAT_SUBSCRIPTION = gql`
  subscription chat($channelId: Int!){
    chat(channelId: $channelId) {
      id
      user_id
      channel_id
      time
      content
      name
      profileImg
    }
  }
`;

const ChannelContentsList = (props) => {
  const { channelID } = props;
  const { loading, data, subscribeToMore } = useQuery(CHAT_QUERY, {
    variables: { channelId: channelID },
  });

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: CHAT_SUBSCRIPTION,
      variables: { channelId: channelID },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { chat } = subscriptionData.data;
        const newContents = {
          ...prev,
          channelContents: [...prev.channelContents, ...chat],
        };
        return newContents;
      },
    });

    return () => unsubscribe();
  }, [channelID, subscribeToMore]);

  return (
    <ContentsListDiv>
      {!loading && data.channelContents.map((c) => (
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
      ))}
    </ContentsListDiv>
  );

  function timeFormatting(time) {
    const newFormat = moment(Date(time)).format('LLL');
    const timeArr = newFormat.split(' ');
    // ["January", "2,", "2021", "6:23", "PM"]
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = months.indexOf(timeArr[0]) + 1;
    const date = timeArr[1].substring(0, timeArr[1].length - 1);
    // return 1월 2일 6:23PM
    const result = `${month}월 ${date}일 ${timeArr[3]}${timeArr[4]}`;
    return result;
  }
};

const mapStateToProps = (state) => ({
  list: state.updateList.list,
  channelID: state.channelReducer.channelID,
});

export default connect(mapStateToProps)(ChannelContentsList);
