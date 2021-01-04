import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gql, useQuery } from '@apollo/client';

import { updateChannelID } from '../../js/redux/actions';
import { ChannelsLinkDiv, ChannelsLink } from '../views/StyledComponents';

const CHANNEL_QUERY = gql`
  query channelList {
    channelList {
      id
      name
    }
  }
`;

const CHANNEL_SUBSCRIPTION = gql`
  subscription channelSubscription {
    channelSubscription {
      id
      name
    }
  }
`;

const Channels = (props) => {
  const [clickedChannel, setClickedChannel] = useState(1);
  const { loading, data, subscribeToMore } = useQuery(CHANNEL_QUERY);

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: CHANNEL_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { channelSubscription } = subscriptionData.data;
        const newContents = {
          ...prev,
          channelList: [...channelSubscription],
        };
        return newContents;
      },
    });
    return () => unsubscribe();
  }, [subscribeToMore]);

  return (
    <>
      {!loading && data.channelList.map((el) => (
        <ChannelsLinkDiv>
          <ChannelsLink key={el.id} check={(clickedChannel === el.id)} onClick={() => handleClickChannelID(el.id)}>{`# ${el.name}`}</ChannelsLink>
        </ChannelsLinkDiv>
      ))}
    </>
  );

  function handleClickChannelID(id) {
    props.updateChannelID(id);
    setClickedChannel(id);
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateChannelID,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Channels);
