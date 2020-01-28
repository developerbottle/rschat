import { connect } from 'react-redux';

import Chat from '../components/Chat';
import { sendMessage } from '../redux/actions';

const mapStateToProps = (state) => ({
  connectionStatus: state.connectionStatus,
  myUsername: state.myUsername,
  messages: state.messages
});

const mapDispatchToProps = {
  onMessage: sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
