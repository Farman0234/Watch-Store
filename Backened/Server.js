const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Database Connection
require('./Database/database');

// Routes
const userRoute = require('./Routes/Route');
app.use('/user', userRoute);

// "secretKey" is coming from the "userController"
// "set" is a method used to store a value
app.set('secretKey', 'I am a developer 12332100');

// Function to validate user
function validateUser(req, res, next) {
    const secretKey = req.app.get('secretKey');
    console.log('Secret Key:', secretKey); // Log the secret key to verify it is retrieved

    jwt.verify(req.headers['x-access-token'], secretKey, function(err, decoded) {
        // req.headers['x-access-token']  This is just the path to enter in the header section  
        // req.app.get('secretKey') This is the secret key  that we had made it before & it should be secured.
        if (err) {
            return res.json({ status: 'error', message: err.message });
        } else {
            req.body.id = decoded.id; // Assuming the token payload has an 'id' field
            next();
        }
    });
}

// Server Setup
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Node.js with Express backend</h1>');
});

app.listen(5217, () => {
    console.log('Your server is running on port 5217');
});
