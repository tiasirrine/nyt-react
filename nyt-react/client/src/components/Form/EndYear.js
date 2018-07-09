import React from 'react';

export const EndYear = props => (
  <div className="form-group">
    <label htmlFor="end-year">End Date (YYYYMMDD)</label>
    <input className="form-control" onChange={props.onChange} />
  </div>
);

export default EndYear;
