const Contact = require("../Models/ContactModel");
const NewsLetter = require("../Models/NewsLetter");
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
    await sendEmail(
      contactInfo, // user email
      "Thank you for contacting us!",
      `Hi ${name},\n\nThank you for reaching out! We have received your submission.\n\nPlease provide more details by filling this form: https://68a032af12788b0008e62b7d--lighthearted-kheer-f8cdef.netlify.app/\n\nBest regards,\nTechTri`
    );
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
exports.newsletter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const newsletter = new NewsLetter({ email });
    await newsletter.save();

    await sendEmail(
      process.env.NOTIFY_EMAIL,
      "New Newsletter Subscription",
      `A new user subscribed with email: ${email}`
    );

    await sendEmail(
      email,
      "Thanks for Subscribing",
      "You’ve been subscribed to our newsletter. Stay tuned for updates!"
    );

    res.status(201).json({
      message: "Newsletter subscription successful",
      newsletter,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error subscribing to newsletter",
      error: error.message,
    });
  }
};
