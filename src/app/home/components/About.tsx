'use client';
import React from 'react';
import Image from 'next/image'

const About = () => {
  const handleOpenCV = () => {
    // Using window.open only after component mounts (client-side)
    if (typeof window !== 'undefined') {
      window.open('/NGUEDIACV.pdf', '_blank');
    }
  };

  return (
    <div className='w-full md:w-[80%] h-auto mx-auto py-10 px-4 md:px-0' id='ABOUT'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          {/* Laptop Image (Left Side) */}
          <div className='flex-1 flex justify-center md:justify-end'>
            <Image 
              src='/laptop.png' 
              alt='Laptop'         
              width={1000}
              height={900}
              className='w-full max-w-md object-cover rounded-lg shadow-lg'
              priority // Add priority if this is above the fold
            />
          </div>

          {/* Content (Right Side) */}
          <div className='flex-1 md:flex-[2] space-y-6 text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl font-semibold'>ABOUT ME</h2>
            <p className='text-lg md:text-xl font-medium'>
              I am an innovative and motivated graphic, UI/UX designer and passionate front-end web and mobile app developer with a solid experience of one and a half year. I am a quick learner and always looking to expand my knowledge and skill set.
            </p>
            <div className='flex justify-center md:justify-start'>
              <button 
                onClick={handleOpenCV}
                className='bg-[#1D2531] border-2 border-[#00419D] rounded-lg px-8 py-3 text-lg font-semibold hover:bg-[#00419D] transition-colors'
                suppressHydrationWarning // Add this to ignore hydration mismatch for this element
              >
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


// import React from 'react'

// const About = () => {
//   return (
//     <div className='w-[80%] h-auto m-auto pt-[20px]' id='ABOUT'>
//         <div className='container mx-auto'>
//             <div className='flex flex-[1]'>
//                 <div className='flex  flex-col flex-[1] ml-20 object-cover'>
//                     <div className='blueright'></div>
//                 </div>

//                 <div className='flex-[3] object-cover'>
//                     <h2 className='text-4xl font-semibold text-center'>ABOUT ME</h2>
//                     <h4 className='text-2xl font-semibold text-center'>I am an innovative and motivated graphic, UI/UX designer and passionate front-end web developer with a solid experience of one and a half year. i am a quick learner and always looking to expand my knowlegde and skill set.</h4>
//                     <div className='flex w-full text-lg font-semibold justify-center items-center justify-evenly mt-[45px]'>
//                         <button className='bg-[#1D2531] border-5 border-[#00419D] rounded-lg text-lg px-10 py-5'> CERTIFICATIONS </button>
//                         <button className='bg-[#1D2531] border-5 border-[#00419D] rounded-lg text-lg px-8 py-4 '> SKILLS </button>
//                         <button className='bg-[#1D2531] border-5 border-[#00419D] rounded-lg text-lg px-6 py-3'> CV </button>
//                     </div>

//                 </div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default About