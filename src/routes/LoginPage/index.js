import React from 'react';
import { connect } from 'react-redux';

import { login, cancelLogin } from './actions';

import validator from 'email-validator';
import TextInput from '../../components/TextInput';

import './styles.scss';

class LoginPage extends React.Component {
  state = {};

  login = () => {
    const email = this.emailField.value();

    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });

      return;
    }

    this.setState({
      errorText: null,
    });

    this.props.login(email);
  };

  cancelLogin = () => {
    this.props.cancelLogin();
  };

  render() {
    return (
      <div className="login">
        <div className="heading">Login with your email</div>

        <TextInput
          placeholder="Your email"
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
    );
  }
}

const mapStateToProps = function (state) {
  return {
    articles: state.loginReducer.email,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    login: (email) => dispatch(login(email)),
    cancelLogin: () => dispatch(cancelLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
