// 'use client'

// import React, { useState } from "react";
// import Image from 'next/image'

// const Contact: React.FC = () => {
//   const [phoneNumber, setPhoneNumber] = useState<string>("");
//   const [item, setItem] = useState<string>("");
//   const [price, setPrice] = useState<number>(0);

  
//   const whatsappNumber = "+237696696927";
//   const baseUrl = `https://wa.me/${whatsappNumber}?text=`;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!phoneNumber || !item || price <= 0) {
//       alert("Please fill all fields correctly.");
//       return;
//     }

//     const message = encodeURIComponent(
//       `*Purchase Details*%0APhone Number: ${phoneNumber}%0AItem: ${item}%0APrice: $${price}`
//     );

//     window.open(`${baseUrl}${message}`, "_blank");
//   };
//   return (
//     <div className='w-[80%] h-auto m-auto pt-[20px]' id='CONTACT'>
//                     <h2 className='text-4xl font-semibold text-center mt-[50px]'> CONTACT</h2>
//         <div className='mx-auto flex gap-2 '>
//             <div className='flex justify-center items-center justify-evenly'>

//             <div className="bg-white p-6 rounded-md shadow-md w-96">
//           <h2 className="text-2xl text-[#202224] font-semibold mb-4 text-center">Purchase Form</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                 Whatssap Number
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="item" className="block text-sm font-medium text-gray-700">
//                 Item
//               </label>
//               <input
//                 type="text"
//                 id="item"
//                 value={item}
//                 onChange={(e) => setItem(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                 Price
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 value={price}
//                 onChange={(e) => setPrice(Number(e.target.value))}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 min="1"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-[#1B3D74] text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Submit Purchase
//             </button>
//           </form>
//         </div>
//       </div>



//       <div className="hidden largeTablet:block">
//         <div className=" container mx-auto ">
//           <div className="flex flex-[1]">
//           <div className='flex-[1]'>
//                   <h2 className='text-xl font-semibold text-[#202224] mb-10 ml-10 mt-10'>THANKS FOR CONTACTING US</h2>
//                   <div className='flex gap-3 '>
//                       <div>
//                       <Image
//                       src="/loc.PNG"
//                       alt="LOCATION LOGO"
//                       width={50}
//                       height={50}
//                     />
//                     <div>
//                     <ul>
//                               <li className='font-medium'>DOUALA</li>
//                               <p  className='ml-3'>CAMPUS-II </p>
//                               <p className='ml-3'>ANGE RAPHAEL</p>
//                               <li className='font-medium'>YAOUNDE</li>
//                              <p className='ml-3'>BIYEM-ASSI LAC</p>
//                        </ul>
//                     </div>
//                       </div>
    
//                       <div>
//                       <Image
//                       src="/phone.PNG"
//                       alt="phone LOGO"
//                       width={50}
//                       height={50}
//                     />
//                     <div>
//                     <ul>
//                               <li>699557415</li>
//                               <li>675309658</li>
//                           </ul>
//                     </div>
//                       </div>
    
//                       <div>
//                       <Image
//                       src="/emai.PNG"
//                       alt="email LOGO"
//                       width={50}
//                       height={50}
//                     />
//                     <div>
//                     <ul>
//                               <li>flexacademy237@gmail.com</li>
//                           </ul>
//                     </div>
//                       </div>
//                   </div>
//               </div>

//               <div className="flex-[1]">

//               </div>

//           </div>
//         </div>
        
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Contact



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

    const message = `Hello, my name is ${name}.%0AEmail: ${email}%0APhone: ${phone}%0AProject Details: ${project}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <div > 
        <h2 className='text-4xl font-semibold text-center mt-[100px]' id="CONTACT"> CONTACT</h2>
        <div className="w-[80%] h-auto flex flex-col md:flex-row p-10" >
        
          {/* Left Side – WhatsApp Form */}
          <div className="flex-1 p-10 rounded-md shadow-md md:mr-5 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-#DFECFF mb-4">
              Currently available to work as a freelancer.
            </h2>
            <p className="text-lg text-#DFECFF mb-6">
              Got a project in mind? Fill this form and let’s bring it to life.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded bg-[#1D2531]"
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded bg-[#1D2531]"
              />
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded bg-[#1D2531]"
              />
              <textarea
                id="project"
                placeholder="Project Details"
                rows={4}
                value={formData.project}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded bg-[#1D2531]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#00419D] hover:bg-[#1D2531] text-[#DFECFF] py-3 px-4 rounded-md font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Right Side – Contact Info */}
          <div className="flex-1 p-10 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-[#DFECFF] mb-6">Contact Information</h2>
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <Image src="/loc.PNG" alt="Location" width={40} height={40} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p>BUEA - CAMEROON</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Image src="/phone.PNG" alt="Phone" width={40} height={40} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p>+237 694 186 513</p>
                  <p>+237 652 256 321</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <Image src="/emai.PNG" alt="Email" width={40} height={40} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>gracenguedia@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
