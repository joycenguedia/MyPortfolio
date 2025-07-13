import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='w-80% h-auto mt-[90px]' id='PROJECTS'>
        <div className='text-center'>
            <h2 className='text-4xl font-semibold'> MY PROJECTS</h2>
            <h5 className='text-2xl font-normal'>Below are some of the projects I have worked on. Crafted with purpose, passion and attention to details</h5>
        </div>
        <div className='w-[80%] mx-auto flex gap-4 mt-[40px]'>

        <div className="  w-1/2 object-cover relative group overflow-hidden rounded-lg shadow-lg">
  <Image
    src="/agri.png"
    alt="Example"
    width={1000}
    height={900}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <h2 className="text-[#DFECFF] text-lg font-bold text-center">Design of a crop selling software <p className='text-[#DFECFF] text-sm font-medium'>AGRIFRESH is a streamlined crop selling platform designed for farmers and local distributors. I created an intuitive, mobile-first UI that simplifies listing products, tracking sales, and managing transactions, making it easier than ever for growers to connect directly with buyers. The clean, modern design ensures accessibility even in rural areas with limited connectivity. Built with usability and trust at the core, AGRIFRESH helps bridge the gap between farms and markets.</p></h2>
  </div>
</div>

<div className="  w-1/2 object-cover relative group overflow-hidden rounded-lg shadow-lg">
  <Image
    src="/visacard.png"
    alt="Example"
    width={1000}
    height={900}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <h2 className="text-[#DFECFF] text-lg font-bold text-center">Design of a restaurant app for food ordering <p className='text-[#DFECFF] text-sm font-medium'>This restaurant food ordering app was designed to make browsing and ordering meals effortless. Users can explore dynamic menus, view high-quality images of dishes, and discover ongoing promotions all in a clean, intuitive interface. The goal was to create a seamless experience that turns food browsing into quick, satisfying orders, while also helping restaurants boost visibility of featured items and deals</p></h2>
  </div>
</div>

        </div>

<div className='w-[80%] mx-auto flex gap-4 mt-[40px]'>

<div className="  w-1/2 object-cover relative group overflow-hidden rounded-lg shadow-lg">
  <Image
    src="/FLEX.png"
    alt="Example"
    width={1000}
    height={900}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <h2 className="text-[#DFECFF] text-lg font-bold text-center">Design of a training center website <p className='text-[#DFECFF] text-sm font-medium'>This training center website was designed to inspire learning and simplify enrollment. With a clean, modern layout, it showcases available courses, schedules, and certifications in an easy-to-navigate interface. Clear calls-to-action, informative course pages, and responsive design help guide users from curious visitors to committed learners while reinforcing the center’s credibility and educational mission</p></h2>
  </div>
</div>

<div className="  w-1/2 object-cover relative group overflow-hidden rounded-lg shadow-lg">
  <Image
    src="/flexa.png"
    alt="Example"
    width={1000}
    height={900}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <h2 className="text-[#DFECFF] text-lg font-bold text-center">Design of a training center website <p className='text-[#DFECFF] text-sm font-medium'>This training center website was designed to inspire learning and simplify enrollment. With a clean, modern layout, it showcases available courses, schedules, and certifications in an easy-to-navigate interface. Clear calls-to-action, informative course pages, and responsive design help guide users from curious visitors to committed learners while reinforcing the center’s credibility and educational mission</p></h2>
  </div>
</div>

</div>


        <div className='w-[60%] mx-auto flex gap-4 mt-[40px]'>

        <div className="  w-1/2 object-cover relative group overflow-hidden rounded-lg shadow-lg">
  <Image
    src="/STYLEFLYER.jpg"
    alt="Example"
    width={200}
    height={200}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <h2 className="text-[#DFECFF] text-lg font-bold text-center">Design of a Tailor flyer <p className='text-[#DFECFF] text-sm font-medium'> This flyer was designed to capture the essence of craftsmanship and personal style, this tailor flyer combines clean visuals with compelling content to attract both modern professionals and style-conscious clients. With a focus on elegance, readability, and strong call-to-action elements, the design highlights the tailor’s key offerings custom garments, expert alterations, and premium service while reinforcing a brand image built on precision and sophistication</p></h2>
  </div>
</div>

<div className="  w-1/2 object-cover relative group overflow-hidden rounded-lg shadow-lg">
  <Image
    src="/MarriagCard.jpg"
    alt="Example"
    width={200}
    height={200}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <h2 className="text-[#DFECFF] text-lg font-bold text-center">Design of a Marriage Invitation Card <p className='text-[#DFECFF] text-sm font-medium'>This marriage invitation card design blends elegance with a modern aesthetic. Featuring carefully chosen typography, soft color palettes, and ornamental accents, the layout captures the warmth and joy of the occasion. Every detail from the layout to the finishing touches was crafted to reflect the couple’s personality and set the tone for a memorable celebration</p></h2>
  </div>
</div>

        </div>

    </div>
  )
}

export default Project