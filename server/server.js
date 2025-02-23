const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "affan.work05@gmail.com", // Your Gmail
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  const mailOptions = {
    from: `"${name} <${email}>" via DeepSeek" <affan.work05@gmail.com>`, // Shows sender’s name + email
    to: "affan.work05@gmail.com",
    replyTo: email, // Ensures replies go to the sender
    subject: `New Message from ${name}`,
    text: `You received a message from ${name} (${email}):\n\n${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
