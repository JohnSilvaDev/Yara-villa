import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import * as url from "url";
import serverless from "serverless-http";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/inquiry", async (req, res) => {
  console.log("REQUEST RECEIVED:", req.body);

  const { name, email, phone, checkIn, checkOut, guests, roomType } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
      <h3>Nova Solicitação de Reserva</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Contato:</strong> ${email || phone}</p>
      <hr />
      <p><strong>Check-in:</strong> ${checkIn}</p>
      <p><strong>Check-out:</strong> ${checkOut}</p>
      <p><strong>Hóspedes:</strong> ${guests}</p>
      <p><strong>Acomodação:</strong> ${roomType}</p>
    `;

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nova Reserva - ${name}`,
      html: emailBody,
    });

    console.log("EMAIL SENT:", info.response);

    res.status(200).json({ message: "Email sent successfully" });

  } catch (err) {
    console.error("EMAIL ERROR:", err);
    res.status(500).json({ error: "Error sending email" });
  }
});


let server;

if (process.argv[1] && process.argv[1].endsWith("server.js")) {
  server = app.listen(5000, () => console.log("Server running on port 5000"));
}

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("Shutting down server...");
  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

export const handler = serverless(app);
export default app;