// Note:-
//-- For  the sake of ease, we'll consider App.js as the master/parent componenet which will be act as a gateway for all components consisted by components folder.

// -- We'll create all components in components folder then send it to --> master component'app.js' then send it to --> 'index.js' further index.js send it to 'index.html', finally this index.html will render to the browser.

//-- For the sake of ease, we give componenet name as per file name.

//-- Each file contain 1 componenet

//-- we can call components as an empty tag as well as with a closing tag. ForEx:- <FirstComponent/> or <FirstComponent></FirstComponent>

//-- Components tag's first letter should always be Capital in letter so that react wil able to differentiate between JSX (HTML) tags & Component tags. Because by default we use html tag's first letter in small.

//-- A functionreturn onlyone JSX tag. So try to keep multiple JSX tag under single div tag.

//-- In react JSX = HTML, JSX is that HTML code that we can write in Js file which only possible in react.

//-- In JSX, JavaScript Code write under {}.

//-- way to passing data in the component called props.

//Hook
import React, {useState, useEffect} from 'react'; 
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';

let Dummy_Data = [
    // Going to Store Dummy_Data in json format in read.json file, to fetch it further as an API.

    // {
    //     id: "e1",
    //     title: "School Fee",
    //     amount: 300,
    //     date: new Date(2022, 5, 21)
    // }
];



const App = () => {
    const [expenses, setExpense] = useState(Dummy_Data);


    //useEffect passes 2 parameter, 1st callback Function, 2nd An array.
    //Basically useEffect Hook came with a solution to avoid things to get repeated.
    //An array, expected state(variable), if that state got changed, it will then loop the block of code inside useEffect Ex: [expenses]. Whereas, blank array indicate to run the code inside useEffect at once.
    //The code inside useEffect Hook will repeat only, when the state (variable) given inside blank array got changed.
    useEffect(() => {
        fetch("http://localhost:3000/sample-api/index.php"
        ).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                // Whenever we change a state (Here, we're changeing state [expenses] with setExpenses(data) function), react always re-render the whole application and update only those section where changes got takes place.
            
                // So, whenever dealing with an API, state changes takes place everytime. and react re-render the whole application everytime, which lead to an "Infinite loop".
                // Hence, to avoid this situation, we use a Hook called "useEffect".
                console.log(data);
                // setExpense(data);
            }
        
        ).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });
    }, [expenses]);

    
    
    const addNewExpense = (receivedNewExpense) => { 
        let newExpenseData = [receivedNewExpense, ...expenses];
        setExpense(newExpenseData);
    };
    return (
        < div className='app-container'>
            <NewExpense getNewExpense={ addNewExpense}/>
            <Expenses items={expenses}/>
        </div >
        
        ); 
}

export default App;
//We use default keyword, so that while importing this component We'll able to import it as with any name whatever we want. Moreover we don't need to import it by keeping it under curly braces {}. 