import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChannelHeaderView from '../views/ChannelHeaderView';
import { showChannelDetail } from '../../js/redux/actions';

const ChannelHeader = (props) => {
  const { curChannel } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <ChannelHeaderView
      curChannel={curChannel}
      handleDetailDiv={showDetailDiv}
      showModal={showModal}
      deleteChannel={deleteChannel}
    />
  );

  function showDetailDiv() {
    // const showDetail = true;
    // props.showChannelDetail(showDetail);
    setShowModal(!showModal);
  }

  function deleteChannel() {
    console.log('delete Channel, current channel is ', curChannel);
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showChannelDetail,
}, dispatch);

export default connect(null, mapDispatchToProps)(ChannelHeader);
