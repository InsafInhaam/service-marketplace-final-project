const Contact = require("../models/Contact");

const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });

    await contact.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const viewContactSubmissions = async (req, res) => {
  try {
    const contactSubmissions = await Contact.find();
    res.json(contactSubmissions);
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  submitContactForm,
  viewContactSubmissions,
};
