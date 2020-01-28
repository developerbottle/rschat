import React from 'react';

import styles from './connection-status.module.css';

const ConnectionStatus = ({ status }) => (
  <div className={styles.status} data-status={status}>{status}</div>
);

export default ConnectionStatus;
