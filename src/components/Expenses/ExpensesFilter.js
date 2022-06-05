import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)      
    };
    
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
        <label>מיון לפי שנה</label>
      </div>
    </div>
  );
};

export default ExpensesFilter;