import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import classNames from 'classnames';

class TextInput extends React.Component {
  value() {
    return this.field.value;
  }

  render() {
    const { errorText } = this.props;
    const fieldError = errorText ? <div className={styles.errorMessage}>{errorText}</div> : null;

    return (
      <div>
        <input
          className={classNames(styles.input, this.props.className, { [styles.inputError]: errorText })}
          placeholder={this.props.placeholder}
          ref={(f) => {
            this.field = f;
          }}
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
};
export default TextInput;
