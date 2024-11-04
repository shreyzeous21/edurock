import React from "react";
import "./EnrollForm.css"; // Import CSS for styling the modal

function EnrollForm({ show, handleClose }) {
  if (!show) return null; // Don't render anything if `show` is false

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <h2>Enroll Now</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Name
            </label>
            <input required type="text" name="name" placeholder="Name..." />
          </div>
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Email Address
            </label>
            <input required type="email" name="email" placeholder="Email..." />
          </div>
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Phone
            </label>
            <input required type="tel" name="phone" placeholder="Phone..." />
          </div>
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Select Course
            </label>
            <select required name="course">
              <option value="">Select Course...</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
            </select>
          </div>
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Select Program
            </label>
            <select required name="program">
              <option value="">Select Program...</option>
              <option value="program1">Program 1</option>
              <option value="program2">Program 2</option>
              <option value="program3">Program 3</option>
            </select>
          </div>
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Select College
            </label>
            <select required name="college">
              <option value="">Select College...</option>
              <option value="college1">College 1</option>
              <option value="college2">College 2</option>
              <option value="college3">College 3</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="button -md -purple-1 text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnrollForm;
