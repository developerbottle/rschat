import React from 'react';

import styles from './button.module.css';

const Button = (props) => (
  <button {...props} className={styles.btn + ' ' + props.className}>{props.children}</button>
);

export default Button;
