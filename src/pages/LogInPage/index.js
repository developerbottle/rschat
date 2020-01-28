import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './login-page.module.css';

import { saveUsername } from '../../redux/actions';

import Wrapper from '../../components/Wrapper';
import LogInForm from '../../components/LogInForm';

class LogInPage extends Component {
  handleSubmit = username => {
    this.props.handleSubmit(username);
    this.props.history.push('/');
  };

  render() {
    return (
      <Wrapper className={styles.wrapper}>
        <LogInForm handleSubmit={this.handleSubmit} />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  handleSubmit: saveUsername
};

export default connect(null, mapDispatchToProps)(withRouter(LogInPage));
