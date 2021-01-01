import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateChannelID } from '../../js/redux/actions';
import { ChannelsLinkDiv, ChannelsLink } from '../views/StyledComponents';

const Channels = (props) => {
  const { channelList } = props;
  const [clickedChannel, setClickedChannel] = useState(1);

  return (
    <>
      {channelList.map((el) => (
        <ChannelsLinkDiv>
          <ChannelsLink key={el.id} check={(clickedChannel === el.id)} onClick={() => handleClickChannelID(el.id)}>{`# ${el.name}`}</ChannelsLink>
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
