import React, { Component } from 'react';

import styles from './send-message-form.module.css';
import TextInput from '../TextInput';
import Button from '../Button';

class SendMessageForm extends Component {
  state = {
    message: ''
  };

  handleChange = e => {
    const message = e.target.value;
    this.setState({ message: message });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message.trim()) {
      this.props.onMessage(this.state.message);
      this.setState({ message: '' });
    }
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <TextInput className={styles.textInput} value={this.state.message} onChange={this.handleChange}
                   placeholder="Message" autoComplete="off" />
        <Button type="submit">Send</Button>
      </form>
    );
  }
}

export default SendMessageForm;
