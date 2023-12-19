// There is a hook in react library called 'useState' and All hooks start with 'use' keyword. Basically, useState is function.
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
//Here, props is a parameter, fetching data from passing while calling component. This will further act like an object.
const ExpenseItem = (props) => {
    //useState()function always passes a value. ForEx: "" (blank Value). useState returns an array consisting elements ( a Variable & a Function). 
    // So, Here, we're going to perform array Destructuring.
    // Note: Array destructuring means assigning each element of an array to respective variables.
    // const [title, setTitle] = useState(props.title);
    // const [newTitle, setNewTitle] = useState("");

    // const clickHandler = () => {
    //     //Work of this function is to change the value of the variable (title) by fetching the value get stored in the newTitle.
    //     setTitle(newTitle);
    // }
    // const changeHandler = (event) => {
    //     //onChanging the value of input field, this function will call and update/change the value of newTitle. 
    //     setNewTitle(event.target.value);    
    // }

    return (
        <Card className="expenseItem">
            {/* Date coming from the database (read.json) in string format. So to convert this string to an object we've to use Date constructor. */}
            <ExpenseDate date ={new Date(props.date)} />
            <div className="expenseItem_Description">
                <h2>{props.title}</h2>
                <div className="expenseItem_price">${props.amount}</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={changeHandler} />
            <button onClick={ clickHandler }>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;