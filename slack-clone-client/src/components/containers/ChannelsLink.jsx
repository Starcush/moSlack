import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gql, useQuery } from '@apollo/client';

import { updateChannelID } from '../../js/redux/actions';
import { ChannelsLinkDiv, ChannelsLink, MoreBtn } from '../views/StyledComponents';
import { QUERY_CHANNEL, SUBSCRIPTION_CHANNEL } from '../../js/apis/query';

const Channels = (props) => {
  const [clickedChannel, setClickedChannel] = useState(1);
  const { loading, data, subscribeToMore } = useQuery(QUERY_CHANNEL);

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: SUBSCRIPTION_CHANNEL,
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
          <ChannelsLink
            key={el.id}
            check={(clickedChannel === el.id)}
            onClick={() => handleClickChannelID(el.id)}
          >
            {`# ${el.name}`}
            {/* <MoreBtn check={(clickedChannel === el.id)} /> */}
          </ChannelsLink>
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
