
import React, { useState } from "react";

export default function RequestForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xpwlvllp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("🙏 Thank you. Your request has been received. Let Love Lead.");
      form.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-card">
      <h2>Quick Request</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" required />

        <label>Your Email</label>
        <input type="email" name="email" required />

        <label>Your Prayer / Support Request</label>
        <textarea name="message" rows="5" required></textarea>

        <button type="submit">Submit Request</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}
