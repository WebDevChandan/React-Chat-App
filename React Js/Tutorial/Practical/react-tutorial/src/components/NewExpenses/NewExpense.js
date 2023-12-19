import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseData = (receivedExpenseData) => {
        let ExpenseData = {
            ...receivedExpenseData,
            id: Math.round(Math.random() * 1000).toLocaleString()
        };
        props.getNewExpense(ExpenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm getsaveExpenseData={ saveExpenseData}/>
        </div>
    );
}
export default NewExpense;