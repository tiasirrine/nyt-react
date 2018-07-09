import React from 'react';

export const StartYear = props => (
  <div className="form-group">
    <label htmlFor="start-year">Start Date (YYYYMMDD)</label>
    <input className="form-control" onChange={props.onChange} />
  </div>
);

export default StartYear;
