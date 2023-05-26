import { v4 as uuidv4 } from 'uuid';

//Because we're further going to delete the user insde it, means going to make changes, we've to use let.
let users = [];

//1. getUsers
export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}


// 2. createUser
export const createUser = (req, res) => {
    
    const user = req.body;
       
    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database!`);
}


//3. foundUser
export const foundUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
    
}


//4. deleteUser
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id: ${id} deleted from the database.`)
}


//5. updateUser
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;

    if (lastName) user.lastName = lastName;
    
    if (age) user.age = age;
     
    res.send(`User with the Id: ${id} has been updated`)
}