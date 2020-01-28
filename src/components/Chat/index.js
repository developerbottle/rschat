import React from 'react';

import styles from './chat.module.css';

import Container from '../Container';
import SendMessageForm from '../SendMessageForm';
import Conversation from '../Conversation';
import Wrapper from '../Wrapper';
import ConnectionStatus from '../ConnectionStatus';

const Chat = ({ myUsername, messages, onMessage, connectionStatus }) => (
  <section>
    <Wrapper className={styles.wrapper}>
      <ConnectionStatus status={connectionStatus} />

      <Wrapper className={styles.conversationWrapper}>
        <Container>
          <Conversation myUsername={myUsername} messages={messages} />
        </Container>
      </Wrapper>

      <Container>
        <SendMessageForm onMessage={onMessage} />
      </Container>
    </Wrapper>
  </section>
);

export default Chat;
