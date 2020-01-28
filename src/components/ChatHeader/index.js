import React from 'react';

import styles from './chat-header.module.css';
import ConnectionStatus from '../ConnectionStatus';

const ChatHeader = ({ connectionStatus }) => (
  <header>
    <ConnectionStatus status={connectionStatus} />
  </header>
);

export default ChatHeader;
