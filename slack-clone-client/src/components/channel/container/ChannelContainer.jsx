import React, { useState } from 'react';
import { connect } from 'react-redux';

import ChannelView from '../view/ChannelView';

const Channel = ({ channelState }) => {
  const [showLoginErrorModal, setShowLoginErrorModal] = useState(false);
  const { channelInfo: curChannel, showDetail } = channelState;

  return (
    <ChannelView
      showDetail={showDetail}
      curChannel={curChannel}
      channelState={channelState}
      showLoginErrorModal={showLoginErrorModal}
      setShowLoginErrorModal={setShowLoginErrorModal}
    />
  );
};

const mapStateToProps = (state) => ({
  channelState: state.channelReducer,
});

export default connect(mapStateToProps)(Channel);
