import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex items-center justify-center h-full flex-col'>
      <div className='w-[50%] flex items-center flex-col'>
        <p>
          Hello, I am Laurin Brechter, a freelance Software Engineer from Heidelberg, Germany currently
          studying Engineering in Dortmund. In 2020 I embarked on a journey to explore the world of data science and statistics.
          In my free time I like to go race biking, running [...]
          I use this website to work on some side projects and to share my thoughts on various topics.
          Currently I am working on projects in the field of federated learning [...]
        </p>
        <Image src={'/profile.jpg'} width={200} height={200} alt='me' />
      </div>
    </div>
  )
}

export default About