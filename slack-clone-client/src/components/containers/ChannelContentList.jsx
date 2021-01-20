import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import styled from 'styled-components';

import { QUERY_CHAT, SUBSCRIPTION_CHAT } from '../../js/apis/query';

const ChannelContentsList = (props) => {
  const { channel } = props;
  const channelID = channel.id;
  const { loading, data, subscribeToMore } = useQuery(QUERY_CHAT, {
    variables: { channelId: channelID },
  });

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: SUBSCRIPTION_CHAT,
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
      {!loading && data.channelContents.map((c) => {
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

  function timeFormatting(time) {
    const newFormat = moment(time).format('LLL');
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
  channel: state.channelReducer.channel,
});

export default connect(mapStateToProps)(ChannelContentsList);

const ContentsListDiv = styled.div`
  /* width: calc((100vw - 20px) * (24 / 28)); */
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
