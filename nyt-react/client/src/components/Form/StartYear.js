import React from 'react';

export const StartYear = props => (
  <div className="form-group">
    <label htmlFor="start">Start Date (YYYYMMDD)</label>
    <input className="form-control" name={props.name} onChange={props.onChange} />
  </div>
);

export default StartYear;
