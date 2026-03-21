const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/inquiry", async (req, res) => {
  console.log("REQUEST RECEIVED:", req.body);

  const { name, email, phone } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Booking Inquiry",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
    });

    console.log("EMAIL SENT:", info.response);

    res.status(200).json({ message: "Email sent successfully" });

  } catch (err) {
    console.error("EMAIL ERROR:", err);
    res.status(500).json({ error: "Error sending email" });
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));
