import React from 'react';

import styles from './message.module.css';

const getTime = timestamp => {
  const datetime = new Date(timestamp);
  return datetime.toLocaleTimeString(undefined, { timeStyle: 'short', hour12: true });
};

const Message = ({ msg, from, when, isMine }) => (
  <div className={styles.msg} data-is-mine={isMine}>
    <small className={styles.author}>{from}</small>

    <div className={styles.body}>
      <p className={styles.text}>{msg}</p>
      <i className={styles.time}>{getTime(when)}</i>
    </div>
  </div>
);

export default Message;
