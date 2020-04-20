import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import './styles.scss';
import classNames from 'classnames';

class TextInput extends React.Component {
  state = {
    value: '',
  };

  didChange = debounce(() => {
    this.props.handleChange(this.state.value);
  }, 300);

  handleChange = (event) => {
    this.setState({ value: event.target.value }, () => {
      this.didChange();
    });
  };

  render() {
    const { errorText } = this.props;
    const fieldError = errorText ? <div className="errorMessage">{errorText}</div> : null;

    return (
      <div>
        <input
          className={classNames('input', this.props.className, { inputError: errorText })}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          value={this.state.value}
          type="text"
        />

        {fieldError}
      </div>
    );
  }
}

TextInput.propTypes = {
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
export default TextInput;
