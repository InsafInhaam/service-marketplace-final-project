import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/contact/submissions")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setContacts(result);
      });
  }, [contacts]);

  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between">
                      <div>
                        <h4 className="card-title">Contact Submissions</h4>
                        <p className="card-description">
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Subject</th>
                            <th>Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          {contacts?.map((contact) => (
                            <tr key={contact._id}>
                              <td>{contact.name}</td>
                              <td>{contact.email}</td>
                              <td>{contact.phone}</td>
                              <td>{contact.subject}</td>
                              <td>{contact.message}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
