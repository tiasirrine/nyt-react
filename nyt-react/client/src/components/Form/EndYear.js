import React from 'react';

export const EndYear = props => (
  <div className="form-group">
    <label htmlFor="end">End Date (YYYYMMDD)</label>
    <input className="form-control" name={props.name} onChange={props.onChange} />
  </div>
);

export default EndYear;
