import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  ChannelListContainer,
  ChannelListHeader,
  ChannelHead,
  ToggleArrow,
  AddChannelBtn,
} from '../views/StyledComponents';
import Channels from './ChannelsLink';
import AddChannelModal from './AddChannelModal';
import { QUERY_CHANNEL, SUBSCRIPTION_CHANNEL } from '../../js/apis/query';
import { updateCurChannel } from '../../js/redux/actions';

const ChannelList = (props) => {
  const [toggleClicked, setToggleClicked] = useState(true);
  const [show, setShow] = useState(false);
  const [curChannelId, setCurChannelId] = useState(1);

  const { loading, data, subscribeToMore } = useQuery(QUERY_CHANNEL);

  useEffect(() => {
    if (!loading) {
      const { channelList } = data;
      const curChannel = channelList.find((channel) => channel.id === curChannelId);
      props.updateCurChannel(curChannel);
    }
  }, [curChannelId]);

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
    <ChannelListContainer>
      <ChannelListHeader>
        <ToggleArrow onClick={toggleList} clicked={toggleClicked} />
        <ChannelHead clicked={toggleClicked}>Channels</ChannelHead>
        <AddChannelBtn onClick={handleOpen} />
      </ChannelListHeader>
      {toggleClicked && !loading && data.channelList.length > 0 ? (
        <Channels
          channelList={data.channelList}
          handleCurChannel={handleCurChannel}
          curChannelId={curChannelId}
        />
      ) : (
        <></>
      )}
      <AddChannelModal
        showModal={show}
        handleClose={handleClose}
      />
    </ChannelListContainer>
  );

  function toggleList() {
    setToggleClicked(!toggleClicked);
  }

  function handleOpen() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }
  function handleCurChannel(id) {
    setCurChannelId(id);
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCurChannel,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChannelList);
