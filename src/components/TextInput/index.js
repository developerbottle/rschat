import React from 'react';

import styles from './text-input.module.css';

const TextInput = (props) => (
  <input {...props} className={styles.textInput + ' ' + props.className} type="text" />
);

export default TextInput;
