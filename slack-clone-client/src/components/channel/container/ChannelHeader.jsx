import React, { useState, useEffect } from 'react';
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
  const [isDefaultChannel, setIsDefaultChannel] = useState(true);

  const [deleteChannel, { data, loading }] = useMutation(MUTATION_CHANNEL_DELETE);

  useEffect(() => {
    if (curChannel.id === 1) {
      setIsDefaultChannel(true);
    } else {
      setIsDefaultChannel(false);
    }
  }, [curChannel]);

  return (
    <>
      <ChannelHeaderView
        curChannel={curChannel}
        handleMenuItems={handleMenuItems}
        showMenus={showMenuItems}
        handleCheckModal={handleCheckModal} // 여기서는 check modal이 켜지기만 한다
        isDefaultChannel={isDefaultChannel}
      />
      <ModalContainer
        type="check"
        showModal={showCheckModal}
        handleCheckModal={handleCheckModal} // 여기서는 check modal이 꺼지기만 한다
        deleteChannel={(e) => fetchDeleteChannel(e)}
      />
    </>
  );

  function handleMenuItems() {
    setShowMenuItems(!showMenuItems);
  }

  function handleCheckModal(handle) {
    setShowCheckModal(handle);
  }

  function fetchDeleteChannel(e) {
    e.preventDefault();
    // console.log('delete Channel, current channel is ', curChannel);
    deleteChannel({
      variables: { id: curChannel.id },
    });
    if (!loading) {
      // console.log('data :: ', data);
    }
    props.updateCurChannel({ id: 1, name: 'general' });
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showChannelDetail,
  updateCurChannel,
}, dispatch);

export default connect(null, mapDispatchToProps)(ChannelHeader);
