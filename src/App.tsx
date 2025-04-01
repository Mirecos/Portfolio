import { useState } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import useWindowDimensions from './hooks/useWindowDimensions';
import { generateBackgroundArray } from './utils/backgroundGenerator';
import Avatar from './assets/avatar.png'
function App() {
  const { width, height } = useWindowDimensions();

  const bgArray = generateBackgroundArray();


  return (
    <ParallaxProvider>
      <div className='bg-gradient-to-r from-[#090909] to-[#090909] via-[#11110F] min-w-full'>

        {
          bgArray.map((bg, index) => (
            <Parallax 
              key={index}
              translateX={bg.translateX} 
              translateY={bg.translateY} 
              className={bg.className}
              style={{ 
                top: (height - 40 ) * bg.randomRatioY + 'px',
                left: (width - 100 ) * bg.randomRatioX + 'px'
              }}
            />
          ))
        }


        <div className='flex flex-col justify-center w-3/4 mx-auto gap-60 py-40'>
          <Parallax 
            translateY={[0, 50]}
            speed={-10}
            easing="easeOutQuad"
            className="z-10">
            <div className='flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#10100E] to-[#20201d] backdrop-blur-sm p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]'>
              <div>
                <h1 className="text-white text-5xl font-bold mb-4">Recchia Michel</h1>
                <h2 className="text-gray-300 text-2xl">Full Stack Developer</h2>
              </div>

              {/* Avatar Circle */}
              <div className="mt-6 ">
                <img className='w-64 h-64 rounded-full' alt='avatar' src={Avatar} />
              </div>
            </div>
            
            
          </Parallax>

          <div className='flex flex-col justify-center w-3/4 mx-auto gap-40'>

          </div>
          {/* Skills part */}
          <Parallax
            translateY={[50, 50]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div className="bg-gradient-to-r from-[#10100E] to-[#20201d] p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">

              <h2 className="text-white text-3xl font-bold mb-6">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {['NodeJS', 'JavaScript', 'Python', 'Docker', 'Solidity'].map(skill => (
                  <span key={skill} className="bg-blue-500/20 text-white px-4 py-2 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              <h2 className="text-white text-3xl font-bold my-6">Frameworks</h2>
              <div className="flex flex-wrap gap-3">
                {['React', 'VueJS', 'TailwindCSS', 'React Native', 'Symfony'].map(skill => (
                  <span key={skill} className="bg-blue-500/20 text-white px-4 py-2 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              <h2 className="text-white text-3xl font-bold my-6">Databases</h2>
              <div className="flex flex-wrap gap-3">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Looker'].map(skill => (
                  <span key={skill} className="bg-blue-500/20 text-white px-4 py-2 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Parallax>

          {/* Projects part */}
          <Parallax 
            translateY={[50, 50]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div className="bg-gradient-to-r from-[#10100E] to-[#20201d] backdrop-blur-sm p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              <h2 className="text-white text-3xl font-bold mb-6">My Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/80 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">Web Portfolio</h3>
                  <p className="text-gray-300">A responsive web portfolio built with React and TypeScript. It also uses react-scroll-parallax for cool effects.</p>
                </div>
                
                <div className="bg-gray-800/80 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">Restaurant management web app</h3>
                  <p className="text-gray-300">Dockerized full-stack applications made with : React for the frontend, Express and prisma ORM for the backend, and MYSQL as the database.  </p>
                </div>
              </div>
            </div>
          </Parallax>

          {/* Experiences part */}
          <Parallax 
            translateY={[50, 50]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div className="bg-gradient-to-r from-[#10100E] to-[#20201d] backdrop-blur-sm p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              <h2 className="text-white text-3xl font-bold mb-6">My experiences</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/80 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">Web Portfolio</h3>
                  <p className="text-gray-300">A responsive web portfolio built with React and TypeScript. It also uses react-scroll-parallax for cool effects.</p>
                </div>
                
                <div className="bg-gray-800/80 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">Restaurant management web app</h3>
                  <p className="text-gray-300">Dockerized full-stack applications made with : React for the frontend, Express and prisma ORM for the backend, and MYSQL as the database.  </p>
                </div>
              </div>
            </div>
          </Parallax>


          {/* Contact part */}
          <Parallax 
            translateY={[50, 50]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div className="bg-gradient-to-r from-[#10100E] to-[#20201d] backdrop-blur-sm p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              <h2 className="text-white text-3xl font-bold mb-6">Contact me</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/80 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">Web Portfolio</h3>
                  <p className="text-gray-300">A responsive web portfolio built with React and TypeScript. It also uses react-scroll-parallax for cool effects.</p>
                </div>
                
                <div className="bg-gray-800/80 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">Restaurant management web app</h3>
                  <p className="text-gray-300">Dockerized full-stack applications made with : React for the frontend, Express and prisma ORM for the backend, and MYSQL as the database.  </p>
                </div>
              </div>
            </div>
          </Parallax>

        </div>
      </div>
    </ParallaxProvider>
  )
}

export default App