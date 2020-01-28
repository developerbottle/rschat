import React, { Component } from 'react';

import styles from './conversation.module.css';

import Message from '../Message';

class Conversation extends Component {
  ref = React.createRef();

  scrollToLastMessage() {
    this.ref.current.scrollTo(0, this.ref.current.scrollHeight);
  }

  componentDidMount() {
    this.scrollToLastMessage();
  }

  componentDidUpdate() {
    this.scrollToLastMessage();
  }

  render() {
    return (
      <ul className={styles.conversation} ref={this.ref}>
        {
          this.props.messages.map(({ id, message, from, time }) => (
            <li className={styles.messageItem} key={id}>
              <Message msg={message} from={from} when={time} isMine={this.props.myUsername === from} />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Conversation;
