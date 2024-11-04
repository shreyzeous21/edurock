import React from "react";
import "./EnrollForm.css"; // Import CSS for styling the modal

function EnrollForm({ show, handleClose }) {
  if (!show) return null; // Don't render anything if `show` is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <h2>Enroll Now</h2>
        <form>
          <div className="form-group">
            <label htmlFor="formName">Name</label>
            <input type="text" id="formName" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="formEmail">Email address</label>
            <input type="email" id="formEmail" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="formPhone">Phone</label>
            <input
              type="tel"
              id="formPhone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formMessage">Message</label>
            <textarea id="formMessage" rows="3" placeholder="Your message" />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={handleClose}
              className="btn-secondary"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => alert("Form submitted!")}
              className="btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnrollForm;
