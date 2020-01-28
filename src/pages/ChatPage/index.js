import React from 'react';
import Chat from '../../containers/Chat';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ChatPage = ({ isAuthorized }) => (
  <div>
    {isAuthorized ? <Chat /> : <Redirect to="/login" />}
  </div>
);

const mapStateToProps = state => ({
  isAuthorized: !!state.myUsername
});

export default connect(mapStateToProps)(ChatPage);
