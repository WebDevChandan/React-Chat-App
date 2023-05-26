import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;      //this port can be anything

app.use(bodyParser.json());

//Whenever a user visit Homepage/users, all the routes insde users.js will execute.
app.use('/users', usersRoutes);

//Start Routing
app.get('/', (req, res) => res.send('Hello from Homepage'));//Each callback function in express has the request & response object.

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
