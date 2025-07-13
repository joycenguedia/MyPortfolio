
import React from 'react'

const About = () => {
  return (
    <div className='w-[80%] h-auto m-auto pt-[20px]' id='ABOUT'>
        <div className='container mx-auto'>
            <div className='flex flex-[1]'>
                <div className='flex  flex-col flex-[1] ml-20 object-cover'>
                    <div className='blueright'></div>
                </div>

                <div className='flex-[3] object-cover'>
                    <h2 className='text-4xl font-semibold text-center'>ABOUT ME</h2>
                    <h4 className='text-2xl font-semibold text-center'>I am an innovative and motivated graphic, UI/UX designer and passionate front-end web developer with a solid experience of one and a half year. i am a quick learner and always looking to expand my knowlegde and skill set.</h4>
                    <div className='flex w-full text-lg font-semibold justify-center items-center justify-evenly mt-[45px]'>
                        <button className='bg-[#1D2531] border-5 border-[#00419D] rounded-lg text-lg px-10 py-5'> CERTIFICATIONS </button>
                        <button className='bg-[#1D2531] border-5 border-[#00419D] rounded-lg text-lg px-8 py-4 '> SKILLS </button>
                        <button className='bg-[#1D2531] border-5 border-[#00419D] rounded-lg text-lg px-6 py-3'> CV </button>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default About