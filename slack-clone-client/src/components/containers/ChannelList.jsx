import React, { useEffect, useState } from 'react';
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
import getChannelList, { addChannel } from '../../js/apis/api';
import { updateChannelList } from '../../js/redux/actions';

const ChannelList = () => {
  const [isError, setIsError] = useState(false);
  const [toggleClicked, setToggleClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [channelList, setChannelList] = useState([]);

  useEffect(() => {
    const fetchChannelList = async () => {
      console.log('fetch channel list');
      setIsError(false);
      try {
        const data = await getChannelList();
        setChannelList([...data]);
      } catch (e) {
        setIsError(true);
        console.log(e);
      }
    };
    fetchChannelList();

    return () => {
      fetchChannelList();
    };
  }, []);

  return (
    <ChannelListContainer>
      <ChannelListHeader>
        <ToggleArrow onClick={toggleList} clicked={toggleClicked} />
        <ChannelHead clicked={toggleClicked}>Channels</ChannelHead>
        <AddChannelBtn onClick={handleOpen} />
      </ChannelListHeader>
      {toggleClicked && channelList.length > 0 ? (
        <Channels channelList={channelList} />
      ) : (
        <></>
      )}
      <AddChannelModal
        showModal={show}
        handleClose={handleClose}
        handleChannelName={handleChannelName}
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

  async function handleChannelName(name) {
    try {
      const data = await addChannel(name);
      setChannelList([...data]);
    } catch (e) {
      console.log('handelChannelName ', e);
    }
    handleClose();
  }
};

const mapStateToProps = (state) => ({
  channelList: state.channelReducer.channelList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateChannelList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
