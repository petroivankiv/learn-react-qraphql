import React from 'react';

import './styles.scss';
import validator from 'email-validator';
import TextInput from '../../components/TextInput';

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
    console.log('cancel login');
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
          <div className="button" onClick={this.props.cancelLogin}>
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

export default LoginPage;
