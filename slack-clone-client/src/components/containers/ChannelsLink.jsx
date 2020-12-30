import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateChannelID } from '../../js/redux/actions';
import { ChannelsLinkDiv, ChannelsLink } from '../views/StyledComponents';

const Channels = (props) => {
  const { channelList } = props;

  return (
    <>
      {channelList.map((el) => (
        <ChannelsLinkDiv>
          <ChannelsLink key={el.id} onClick={() => handleClickChannelID(el.id)}>{`# ${el.name}`}</ChannelsLink>
        </ChannelsLinkDiv>
      ))}
    </>
  );

  function handleClickChannelID(id) {
    props.updateChannelID(id);
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateChannelID,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Channels);
