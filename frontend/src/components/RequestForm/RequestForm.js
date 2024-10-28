import React, { useState } from "react";
import "./RequestForm.css";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    company: "",
    message: "",
    endDate: "",
    startDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Logika za pošiljanje podatkov v bazo podatkov.
  };

  return (
    <div className="request-form">
      <h2>REQUEST FORM</h2>
      <form onSubmit={handleSubmit}>
        <label>Type</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />

        <label>Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <label>Message</label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <div className="date-inputs">
          <div>
            <label>End date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Start date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestForm;
