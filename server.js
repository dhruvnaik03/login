const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle sending verification code via email
app.post('/sendVerificationEmail', (req, res) => {
    const { email, verificationCode } = req.body;

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'd23it164@charusat.edu.in', // Your Gmail email address
            pass: '1122DHruv@12' // Your Gmail password
        }
    });

    // Email message configuration
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Verification Code',
        text: `Your verification code is: ${verificationCode}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'Failed to send verification email' });
        } else {
            console.log('Verification email sent:', info.response);
            res.json({ success: true });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
