import React from 'react';
import { connect } from 'react-redux';
import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client';

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
    }
  }
`;

const ChannelContentsList = (props) => {
  const { channelID } = props;

  let unsubscribe = null;

  return (
    <Query query={CHAT_QUERY} variables={{ channelId: channelID }}>
      {({ loading, data, subscribeToMore }) => {
        if (loading) return null;

        if (!unsubscribe) {
          unsubscribe = subscribeToMore({
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
        }
        return (<ContentsListView channelContents={data.channelContents} />);
      }}
    </Query>

  );
};

const ContentsListView = (props) => {
  const { channelContents } = props;
  return (
    <ContentsListDiv>
      {channelContents.map((c) => (
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
  channelID: state.channelReducer.channelID,
});

export default connect(mapStateToProps)(ChannelContentsList);
