import React from 'react';
import * as T from 'prop-types';

const NumericInput = ({ onChange, value }) => {
  return <input type="number" value={value} onChange={onChange} />;
};

NumericInput.propTypes = {
  onChange: T.func.isRequired,
  value: T.number.isRequired
};

export default NumericInput;
