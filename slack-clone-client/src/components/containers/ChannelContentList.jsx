import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { gql, useQuery } from '@apollo/client';

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
            <UserDiv>{c.name}</UserDiv>
            <Time>{c.time}</Time>
            <ContentSection>{c.content}</ContentSection>
          </ContentCol>
        </ChannelContentsDiv>
      ))}
    </ContentsListDiv>
  );
};

const mapStateToProps = (state) => ({
  list: state.updateList.list,
  channelID: state.channelReducer.channelID,
});

export default connect(mapStateToProps)(ChannelContentsList);
