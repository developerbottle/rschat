import React, { Component } from 'react';
import styles from './login-form.module.css';
import TextInput from '../TextInput';
import Button from '../Button';

class LogInForm extends Component {
  state = {
    username: ''
  };

  handleChange = e => {
    const username = e.target.value;
    this.setState({ username });
  };

  handleSubmit = e => {
    e.preventDefault();

    const username = this.state.username.trim();
    if (username) {
      this.props.handleSubmit(username);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className={styles.title}>Log In</h1>
        <TextInput onChange={this.handleChange} value={this.state.username} placeholder="Username" />
        <Button>Log In</Button>
      </form>
    );
  }
}

export default LogInForm;
