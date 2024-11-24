const express = require('express');
const apps = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// middleware
apps.use(cors())
apps.use(express.json());

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabina', email: 'sabina@gmail.com' },
    { id: 3, name: 'Nabila', email: 'nabila@gmail.com' },

]

// Basic route to check if server is running
apps.get('/', (req, res) => {
    res.send("User management server is running.")
})

// Route to get users
apps.get('/users', (req, res) => {
    res.send(users);
})

// 1. create a post api on the server side.
apps.post('/users', (req, res) => {
    console.log('post api hitting.');
    console.log(req.body);// Logs the body of the request sent from the client
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)


})

// 2. client side send data via post

apps.listen(port, () => {
    console.log(`server is running on PORT:${port}`); //this callback function is optional. The mandatory one is the port.
})
// now we will use nodemon index.js in the command prompt to immediately save the changes. we will not have to use the command prompt again.

// now see localhost:5000 in your browser.