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
      pass: process.env.EMAIL_PASS, // Use your App Password stored in .env
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // The sender's email will show in the "From" field
    to: "affan.work05@gmail.com", // Your email
    replyTo: email, // Ensures replies go to the sender
    subject: `New Contact Form Submission from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  const confirmationMailOptions = {
    from: `"DeepSeek Team" <affan.work05@gmail.com>`, // Your email
    to: email, // Send confirmation to sender
    subject: "Thank you for reaching out!",
    text: `Hi ${name},\n\nThank you for contacting us. We have received your message and will get back to you soon.\n\nYour message:\n"${message}"\n\nBest regards,\nDeepSeek Team`,
    html: `
      <h2>Thank You for Contacting Us!</h2>
      <p>Hi ${name},</p>
      <p>We have received your message and will get back to you soon.</p>
      <blockquote>"${message}"</blockquote>
      <p>Best regards,<br><strong>DeepSeek Team</strong></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions); // Send to you
    await transporter.sendMail(confirmationMailOptions); // Send confirmation to sender
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
