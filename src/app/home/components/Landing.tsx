import React from 'react'
import Image from 'next/image'

const Landing = () => {
  return (
    <div className='w-full px-4 md:w-[80%] h-auto mx-auto py-10' id='HOME'>
      <div className='container mx-auto mt-10 md:mt-[100px]'>
        {/* Mobile: Image above text (flex-col) */}
        {/* Desktop: Image beside text (flex-row) */}
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          {/* Image - Always full width on mobile, constrained on desktop */}
          <div className='w-full md:w-1/2 lg:w-1/3 relative aspect-square min-h-[250px] md:min-h-[350px] order-1 md:order-2'>
            <Image
              src="/header.png"
              alt="NGUEDIA JOYCE"
              fill
              className='object-contain rounded-lg'
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text - Below image on mobile, beside on desktop */}
          <div className='w-full md:w-1/2 lg:w-2/3 space-y-4 md:space-y-6 order-2 md:order-1'>
            <h2 className='text-[#00419D] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'>
              Hello I am NGUEDIA JOYCE,
            </h2>
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug'>
              a bilingual, creative and detailed-oriented Graphic, UI/UX designer, web and front end mobile app developer
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing






// import React from 'react'

// const Landing = () => {
//   return (
//     <div className='w-[80%] h-auto m-auto pt-[20px]' id='HOME' >
//         <div className='container mx-auto mt-[100px]'>
//             <div className='flex flex-[1]'>
//                 <div className='flex  flex-col flex-[3] mr-12 text-xl'>
//                     <h2 className='text-[#00419D] text-6xl font-bold'>Hello I am NGUEDIA JOYCE,</h2>
//                     <h3 className='text-4xl font-semibold'>a creative and detailed-oriented Graphic, UI/UX designer  and Front-end web developer </h3>
                   
//                 </div>

//                 <div className='leftblue flex-[1]'>

//                 </div>

//             </div>

//         </div>

//     </div>
//   )
// }

// export default Landing