import React, { Component } from 'react';
import * as T from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`margin-right: 10px;`;

class NumericInput extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(evt) {
    const numericValue = Number(evt.target.value);
    this.props.onChange(numericValue);
  }

  render() {
    const { value, label, min, max } = this.props;
    return (
      <div>
        <Label>
          {label}:
        </Label>
        <input
          min={min}
          max={max}
          type="number"
          value={value}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

NumericInput.defaultProps = {
  max: Infinity,
  min: -Infinity
};

NumericInput.propTypes = {
  onChange: T.func.isRequired,
  value: T.number.isRequired,
  label: T.string.isRequired,
  max: T.number,
  min: T.number
};

export default NumericInput;
