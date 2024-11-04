import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 1,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace "YOUR_FORM_ENDPOINT" with your actual Getform endpoint URL
    fetch('https://getform.io/f/bpjjjedb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Your message has been sent successfully!');
          setFormData({ name: '', email: '', rating: 1, message: '' });
        } else {
          alert('Oops! Something went wrong.');
        }
      })
      .catch(() => alert('There was an error sending your message.'));
  };

  return (
    <section id="contact" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 text-gray-800">
      <h2 className="text-3xl font-bold font-roboto mb-8"><span className="bg-pink-200 p-2 rounded-md shadow-md">CONTACT ME</span></h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 w-4/5 md:w-1/2">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-2 border border-gray-400 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-2 border border-gray-400 rounded"
        />
        <label className="flex items-center">
          <span className="mr-2">Rating:</span>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded"
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="p-2 border border-gray-400 rounded h-24 resize-none"
        />
        <button type="submit" className="p-2 bg-blue-700 text-white rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
