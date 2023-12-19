import React from 'react';
import './ExpenseDate.css';

const ExpenseDate =(props)=> {
    const month = props.date.toLocaleString('en-US', { month: 'long' }),
        year = props.date.getFullYear(),
        day = props.date.toLocaleString('en-US', { day: '2-digit' });
    return (
        <div className='expenseDate'>
            <div className="expenseYear">{ year }</div>
            <div className="expenseMonth">{ month }</div>
            <div className="expenseDay">{ day }</div>
        </div>
    );
}
export default ExpenseDate;