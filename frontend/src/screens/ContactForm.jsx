import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact/submit`,
        formData
      );
      toast.success("Message sent successfully!"); // Show success toast
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Error sending message. Please try again."); // Show error toast
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n.form-control {\n  border: none;\n  border-bottom: 1px solid #d9d9d9;\n  padding-left: 0;\n  padding-right: 0;\n  border-radius: 0; }\n  .form-control:active, .form-control:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border-color: #000; }\n\n.btn, .form-control {\n  height: 55px; }\n\nform.border-right {\n  padding-right: 6rem !important; }\n  @media (max-width: 991.98px) {\n    form.border-right {\n      padding-right: 0 !important;\n      border-right: none !important; } }\n\nlabel.error {\n  font-size: 12px;\n  color: red; }\n\n#message {\n  resize: vertical; }\n\n#form-message-warning, #form-message-success {\n  display: none; }\n\n#form-message-warning {\n  color: #B90B0B; }\n\n#form-message-success {\n  color: #55A44E;\n  font-size: 18px;\n  font-weight: bold; }\n\n.submitting {\n  float: left;\n  width: 100%;\n  padding: 10px 0;\n  display: none;\n  font-weight: bold;\n  font-size: 12px;\n  color: #000; }\n  \n  ",
        }}
      />
      <div className="page-wraper" style={{ position: "relative" }}>
        <Navbar />
        <div className="page-content">
          <div className="aon-page-benner-area2">
            <div className="aon-banner-large2-title">Contact Us</div>
          </div>
          <div className="aon-page-jobs-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div className="row align-items-center">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                      <h2 className="mb-5">
                        Fill the form. <br /> It's easy.
                      </h2>
                      <form
                        className="border-right pr-5 mb-5"
                        id="contactForm"
                        name="contactForm"
                        noValidate="novalidate"
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              id="phone"
                              placeholder="Phone number"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 form-group">
                            <textarea
                              className="form-control"
                              name="message"
                              id="message"
                              cols={30}
                              rows={7}
                              placeholder="Write your message"
                              defaultValue={""}
                              value={formData.message}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-12">
                            <input
                              type="submit"
                              defaultValue="Send Message"
                              className="btn btn-primary rounded-0 py-2 px-4"
                            />
                            <span className="submitting" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-4 ml-auto">
                      <h3 className="mb-4">Let's talk about everything.</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil deleniti itaque similique magni. Magni,
                        laboriosam perferendis maxime!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactForm;
