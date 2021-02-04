import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { QUERY_CHANNEL, SUBSCRIPTION_CHANNEL } from '../../../js/apis/query';
import { updateCurChannel, updateChannelList } from '../../../js/redux/actions';
import ChannelListView from '../view/ChannelListView';

const ChannelList = (props) => {
  const { channelState } = props;
  const [toggleClicked, setToggleClicked] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  // const [curChannelId, setCurChannelId] = useState(1);

  const { loading, data, subscribeToMore } = useQuery(QUERY_CHANNEL);

  //
  useEffect(() => {
    if (!loading) {
      props.updateChannelList(data.channelList);
    }
  }, [data]);

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
        curChannelId={channelState.channelInfo.id}
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
    props.updateCurChannel(id);
  }
};

function mapStateToProps(state) {
  return {
    channelState: state.channelReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCurChannel,
    updateChannelList,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
