import React from 'react';

export const Input = props => (
  <div className="form-group">
    <input className="form-control" name="search" onChange={props.onChange} />
  </div>
);

export default Input;
