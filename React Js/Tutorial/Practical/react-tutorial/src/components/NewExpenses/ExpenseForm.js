import React, {useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    let [enteredTitle, setEnteredTitle] = useState('');
    let [enteredAmount, setEnteredAmount] = useState('');
    let [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        // Clossing all the default behaviour of an Event using preventDefault();
        event.preventDefault(); 
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.getsaveExpenseData(expenseData);

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='newExpense_controls'>
                <div className="newExpense_control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="newExpense_control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <br />
                <div className="newExpense_control">
                    <label>Date</label>
                    <input type="date" value={enteredDate } onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="newExpense_action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;