import React from 'react';

export const Input = props => (
  <div className="form-group">
    <input className="form-control" onChange={props.onChange} />
  </div>
);

export default Input;
