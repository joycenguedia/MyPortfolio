import React from 'react'
import Link from 'next/link'

export default function TopNavbar() {
  return (
    <div className='w-full md:w-[80%] h-auto mx-auto pt-4 md:pt-5'>
        <nav>
            <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
                <Link 
                    href="#HOME" 
                    className='text-sm md:text-base hover:text-blue-400 transition-colors duration-200'
                >
                    HOME
                </Link>
                <Link 
                    href="#ABOUT" 
                    className='text-sm md:text-base hover:text-blue-400 transition-colors duration-200'
                >
                    ABOUT ME
                </Link>
                <Link 
                    href="#PROJECTS" 
                    className='text-sm md:text-base hover:text-blue-400 transition-colors duration-200'
                >
                    MY PROJECTS
                </Link>
                <Link 
                    href="#CONTACT" 
                    className='text-sm md:text-base hover:text-blue-400 transition-colors duration-200'
                >
                    CONTACT
                </Link>
            </div>
        </nav>
    </div>
  )
}











// import React from 'react'
// import Link from 'next/link'

// const TopNavbar = () => {
//   return (
//     <div className='w-[80%] h-auto m-auto pt-[20px]'>
//         <div>

//         <div className=" flex justify-center items-center justify-evenly">
//                             <Link href="#HOME" className=''>HOME</Link>
//                             <Link href="#ABOUT">ABOUT ME</Link>
//                             <Link href="#PROJECTS">MY PROJECTS</Link>
//                             <Link href="#CONTACT">CONTACT</Link>
//                         </div>
//         </div>
//     </div>
//   )
// }

// export default TopNavbar