import express from "express";
import { getUsers, createUser, foundUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();



//all routes in here are starting with '/' i.e. users.
//  So this is going to indicate.http://localhost:5000/users/
router.get('/', getUsers);


//Browsers only making a get requrest. So for testing the post rout we need a software, which would help to test our api. That's where "Postman" come in handy. This route is gonna add new user in users.
// We can't make any requrest other than other than GET requrest in browerse, for to make rest of all the request (like, POST, DELETE etc.) we've to go in Postman.
router.post('/', createUser);


//user/2 => req.params  {id: 2}, This route is going to find user with specific Id.
router.get('/:id', foundUser);


//This route is going to be deleting user with specific Id.
router.delete('/:id', deleteUser);

/*
To update the user we'll be using PATCH requrest. Patch is used when we want to partially modified something.

                                Difference Between PATCH & PUT Request.
                                Both, Request is used to Update the data.

PUT: PUT is used when we want to completely overwrite something. For Ex: If you wanna change everything in the user, in that case you would use PUT method.

PATCH: PATCH is used when we want to apply partial modification in the data. Meaning, if we just wanna change the age or just the name or the name and age.
*/
router.patch('/:id', updateUser);


export default router;
//when we export as default, we can import it as with any name.