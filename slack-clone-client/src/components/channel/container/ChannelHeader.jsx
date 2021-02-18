import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMutation } from '@apollo/client';

import ChannelHeaderView from '../view/ChannelHeaderView';
import { showChannelDetail, updateCurChannel } from '../../../js/redux/actions';
import ModalContainer from '../../modal/container/ModalContainer';
import { MUTATION_CHANNEL_DELETE } from '../../../js/apis/query';

const ChannelHeader = (props) => {
  const { curChannel } = props;
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [showCheckModal, setShowCheckModal] = useState(false);

  const [deleteChannel] = useMutation(MUTATION_CHANNEL_DELETE);

  return (
    <>
      <ChannelHeaderView
        curChannel={curChannel}
        handleMenuItems={handleMenuItems}
        showMenus={showMenuItems}
        handleCheckModal={handleCheckModal} // 여기서는 check modal이 켜지기만 한다
      />
      <ModalContainer
        type="check"
        showModal={showCheckModal}
        handleCheckModal={handleCheckModal} // 여기서는 check modal이 꺼지기만 한다
        deleteChannel={(e) => fetchDeleteChannel(e)}
      />
    </>
  );

  // 채널 삭제 메뉴가 보임, general 채널은 삭제 불가능
  function handleMenuItems() {
    setShowMenuItems(!showMenuItems);
  }

  function handleCheckModal(handle) {
    setShowCheckModal(handle);
  }

  function fetchDeleteChannel(e) {
    e.preventDefault();
    // console.log('delete Channel, current channel is ', curChannel);
    if (curChannel.id === 1) return;
    deleteChannel({
      variables: { id: curChannel.id },
    });
    setShowCheckModal(false);
    setShowMenuItems(false);
    // 이게 saga에서 작동해야할까?
    props.updateCurChannel(1);
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showChannelDetail,
      updateCurChannel,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(ChannelHeader);
