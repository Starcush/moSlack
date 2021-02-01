import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { QUERY_CHANNEL, SUBSCRIPTION_CHANNEL } from '../../../js/apis/query';
import { updateCurChannel } from '../../../js/redux/actions';
import ChannelListView from '../view/ChannelListView';

const ChannelList = (props) => {
  const [toggleClicked, setToggleClicked] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [curChannelId, setCurChannelId] = useState(1);

  const { loading, data, subscribeToMore } = useQuery(QUERY_CHANNEL);

  // channel header에 채널 이름을 보여주기 위한 useEffect, redux async로 변경 예정
  useEffect(() => {
    if (!loading) {
      const { channelList } = data;
      const curChannel = channelList.find((channel) => channel.id === curChannelId);
      props.updateCurChannel(curChannel);
    }
  }, [curChannelId, data, loading, props]);

  // subscription을 위한 useEffect
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
      {!loading
    && (
      <ChannelListView
        data={data}
        curChannelId={curChannelId}
        showAddModal={showAddModal}
        toggleClicked={toggleClicked}
        toggleList={toggleList}
        handleShowModal={handleShowModal}
        handleCurChannel={handleCurChannel}
      />
    )}
    </>
  );

  function toggleList() {
    setToggleClicked(!toggleClicked);
  }

  function handleShowModal(type) {
    if (type === 'open') {
      setShowAddModal(true);
    } else {
      setShowAddModal(false);
    }
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
