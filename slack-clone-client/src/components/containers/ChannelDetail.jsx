import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChannelDetailView from '../views/ChannelDetailView';
import { showChannelDetail } from '../../js/redux/actions';

const ChannelDetail = (props) => {
  const { channelState } = props;
  return <ChannelDetailView showDetail={channelState.showDetail} closeDetail={closeDetail} />;

  function closeDetail() {
    props.showChannelDetail(false);
  }
};

const mapStateToProps = ({ channelReducer }) => ({
  channelState: channelReducer,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showChannelDetail,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
