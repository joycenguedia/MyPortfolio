

'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
  });

  const whatsappNumber = '237694186513'; // Replace with your WhatsApp number

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, project } = formData;

    if (!name || !email || !phone || !project) {
      alert('Please fill in all fields.');
      return;
    }

    const message = `Hello, my name is ${name}.\nEmail: ${email}\nPhone: ${phone}\nProject Details: ${project}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <h2 className='text-4xl font-semibold text-center mb-10' id="CONTACT">CONTACT</h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row p-4">
        
        {/* Left Side – WhatsApp Form */}
        <div className="flex-1 p-6 md:p-10 rounded-md shadow-md md:mr-5 mb-10 md:mb-0 bg-[#1D2531]">
          <h2 className="text-3xl font-bold text-[#DFECFF] mb-4">
            Currently available to work as a freelancer.
          </h2>
          <p className="text-lg text-[#DFECFF] mb-6">
            Got a project in mind? Fill this form and lets bring it to life.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded bg-[#1D2531] text-white"

              suppressHydrationWarning
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded bg-[#1D2531] text-white"

              suppressHydrationWarning
            />
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded bg-[#1D2531] text-white"

              suppressHydrationWarning
            />
            <textarea
              id="project"
              placeholder="Project Details"
              rows={4}
              value={formData.project}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded bg-[#1D2531] text-white"

              suppressHydrationWarning
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#00419D] border-2 border-[#00419D] rounded-lg px-8 py-3 text-lg font-semibold hover:bg-[#1D2531] transition-colors"
              suppressHydrationWarning
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Right Side – Contact Info */}
        <div className="flex-1 p-6 md:p-10 rounded-md shadow-md bg-[#1D2531]">
          <h2 className="text-2xl font-semibold text-[#DFECFF] mb-6">Contact Information</h2>
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start gap-4">
              <Image src="/loc.png" alt="Location" width={40} height={40} />
              <div>
                <h4 className="font-medium text-[#DFECFF]">Location</h4>
                <p className="text-white">BUEA - CAMEROON</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-4">
              <Image src="/phone.png" alt="Phone" width={40} height={40} />
              <div>
                <h4 className="font-medium text-[#DFECFF]">Phone</h4>
                <p className="text-white">+237 694 186 513</p>
                <p className="text-white">+237 652 256 321</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4">
              <Image src="/emai.png" alt="Email" width={40} height={40} />
              <div>
                <h4 className="font-medium text-[#DFECFF]">Email</h4>
                <p className="text-white">gracenguedia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
