import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login, cancelLogin } from './actions';
import selectLogin from './selectors';

import validator from 'email-validator';
import TextInput from '../../components/TextInput';

import './styles.scss';
import { Prompt } from 'react-router-dom';

export class LoginPage extends React.PureComponent {
  state = {
    value: '',
  };

  login = () => {
    const email = this.state.value;

    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });

      return;
    }

    this.setState({
      errorText: null,
    });

    this.props.doLogin(email);
  };

  cancelLogin = () => {
    this.props.cancelLogin();
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <>
        <Prompt when={this.state.value !== ''} message="You will lose your data" />
        <div className="login">
          <div className="heading">Login with your email</div>

          <TextInput
            placeholder="Your email"
            onChangeInput={this.handleChange}
            ref={(f) => {
              this.emailField = f;
            }}
            errorText={this.state.errorText}
          />

          <div className="actionContainer">
            <div className="button" onClick={this.cancelLogin}>
              cancel
            </div>
            <div className="button" onClick={this.login}>
              log in
            </div>
          </div>
        </div>
      </>
    );
  }
}

LoginPage.propTypes = {
  doLogin: PropTypes.func.isRequired,
  cancelLogin: PropTypes.func.isRequired,
};

const mapStateToProps = selectLogin;

function mapDispatchToProps(dispatch) {
  return {
    doLogin: (email) => dispatch(login(email)),
    cancelLogin: () => dispatch(cancelLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
