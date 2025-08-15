const Contact = require("../Models/ContactModel");
const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // app password
    },
  });

  await transporter.sendMail({
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
};

exports.addContact = async (req, res) => {
  const { name, description, contactInfo } = req.body;

  try {
    const newContact = new Contact({
      name,
      description,
      contactInfo,
    });

    await newContact.save();

    // If it's an email, send it to you
    if (/\S+@\S+\.\S+/.test(contactInfo)) {
      await sendEmail(
        process.env.NOTIFY_EMAIL, // where you want to receive it
        "New Contact Email",
        `Name: ${name}\nDescription: ${description}\nEmail: ${contactInfo}`
      );
    }

    res.status(201).json({
      message: "Contact added successfully",
      contact: newContact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding contact",
      error: error.message,
    });
  }
};
