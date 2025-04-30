const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const EMAIL = process.env.EMAIL_USER;
const PASSWORD = process.env.EMAIL_PASS;
const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service:"gmail", // true for port 465, false for other ports
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});


app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      await transporter.sendMail({
        from: email, // Sender's email is the user's email
        to: EMAIL, // You (the website owner) will receive this email
        subject: `Contact Form Submission from ${name}`, // The subject will contain the user's name
        text: `You received a message from ${name} (${email}):\n\n${message}`, // The body contains the user's message
      });
      console.log("Email sent successfully");
      res.status(200).send("success");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email.");
    }
  });
  


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
