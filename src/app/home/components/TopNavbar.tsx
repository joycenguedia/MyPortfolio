import React from 'react'
import Link from 'next/link'

const TopNavbar = () => {
  return (
    <div className='w-[80%] h-auto m-auto pt-[20px]'>
        <div>

        <div className=" flex justify-center items-center justify-evenly">
                            <Link href="#HOME" className=''>HOME</Link>
                            <Link href="#ABOUT">ABOUT ME</Link>
                            <Link href="#PROJECTS">MY PROJECTS</Link>
                            <Link href="#CONTACT">CONTACT</Link>
                        </div>
        </div>
    </div>
  )
}

export default TopNavbar