import React, { useState } from "react";
import confetti from "canvas-confetti";

const EnrollForm = ({ course }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c0b3083d-dd03-44bd-b569-83db34d83d83",
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          course: "",
        });
        // Trigger confetti only if form submission is successful
        confetti({
          particleCount: 1000,
          angle: 90,
          spread: 100,
          origin: { x: 0.5, y: 0.5 }
        });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={course}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Enroll</button>
      </form>

      {/* Display form status */}
      {status && <p>{status}</p>}
    </div>
  );
};

export default EnrollForm;
