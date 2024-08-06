import React from 'react'
import Expcard from './expcard'
import BlurFade from '@/components/magicui/blur-fade'
import { DATA } from '../components/data'

const work = () => {
  return (
    <>
    <BlurFade delay={0.25} inView className='flex flex-col items-center'>
    <h1 className='p-8 text-6xl bg-my-gradient bg-clip-text text-transparent'>Work Experience</h1>
    <div className='w-40% p-5'>
      <BlurFade delay={0.25} inView>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.experience.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={0.25}
                >
                  <Expcard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
    </div>
    </BlurFade>
    </>
  )
}

export default work
