const UsersModel = require('../Model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
         user: "farmananees234@gmail.com",
        pass: 'foan gbfq hffa bgea'     // Use the App Password generated from your Google account
    }
});

module.exports = {
    register: async function (req, res) {
        try {
            const { name, email, password } = req.body;

            // Check if the user already exists
            const existingUser = await UsersModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Create the new user
            const newUser = await UsersModel.create({ name, email, password });

            res.status(201).json({ message: 'You have signed up successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong!', error: err.message });
        }
    },

    authenticate : async function (req, res, next) {
        try {
            const userInfo = await UsersModel.findOne({ email: req.body.email });
            if (!userInfo) {
                return res.status(401).json({ status: "error", message: "Authentication failed." });
            }
    
            const isMatch = await bcrypt.compare(req.body.password, userInfo.password);
            if (isMatch) {
                const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                return res.json({ status: "success", message: "Authentication successful!", token: token });
            } else {
                return res.status(401).json({ status: "error", message: "Authentication failed." });
            }
        } catch (err) {
            return next(err);
        }
    },
    
    forgotPassword: async function (req, res) {
        try {
            const { email } = req.body; // Extract email from the request body

            // Find the user by email
            const user = await UsersModel.findOne({ email });
            if (!user) { // If the user does not exist
                return res.status(400).json({ message: 'User with given email does not exist' });
            }

            // Generate a random token
            const token = crypto.randomBytes(20).toString('hex');
            // Set the reset token and expiration time on the user object
            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

            // Save the updated user object to the database
            await user.save();

            // Create the password reset link
            const link = `http://localhost:5173/password-reset/${token}`;
            // Send the password reset email
            await transporter.sendMail({
                from: 'your-email@gmail.com',
                to: user.email,
                subject: 'Password reset',
                html: `<h3>Reset your password</h3><p>Click <a href="${link}">here</a> to reset your password.</p>`
            });

            // Send a response to the client indicating success
            res.json({ message: 'Password reset link sent to your email account' });
        } catch (err) { // Handle any errors that occur
            res.status(500).json({ message: 'Something went wrong!', error: err.message });
        }
    },

    resetPassword: async function (req, res) {
        try {
            const { token } = req.params;
            const { password } = req.body;
    
            const user = await UsersModel.findOne({
                resetPasswordToken: token,
                resetPasswordExpires: { $gt: Date.now() }
            });
    
            if (!user) {
                return res.status(400).json({ message: 'Invalid or expired password reset token' });
            }
            
            // Hash the new password
            user.password = await bcrypt.hash(password, 10); // Ensure you are using a salt round here
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
    
            await user.save();
    
            res.json({ message: 'Password reset successful' });
        } catch (err) {
            console.error('Backend Error:', err);
            res.status(500).json({ message: 'Something went wrong!', error: err.message });
        }
    }
};



































































// var UsersModel = require('../Model/UserModel')

// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const { model } = require('mongoose')


// module.exports = {

//     register: function (req, res) {
//         UsersModel.create(req.body)
//             .then(iteam => {
//                 res.send("You have Signup now:")
//             })
//             .catch(err => {
//                 res.send(" Something went wrong!" + err)
//             })
//     }
//     ,
//     // authenticate means login
    
  
//     authenticate : async function (req, res, next) {
//     try {
//         const userInfo = await UsersModel.findOne({ email: req.body.email });
//         if (!userInfo) {
//             return res.status(401).json({ status: "error", message: "Authentication failed." });
//         }

//         const isMatch = await bcrypt.compare(req.body.password, userInfo.password);
//         if (isMatch) {
//             const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
//             return res.json({ status: "success", message: "Authentication successful!", token: token });
//         } else {
//             return res.status(401).json({ status: "error", message: "Authentication failed." });
//         }
//     } catch (err) {
//         return next(err);
//     }
// }


// }

