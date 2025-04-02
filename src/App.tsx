import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import useWindowDimensions from './hooks/useWindowDimensions';
import { generateBackgroundArray } from './utils/backgroundGenerator';
import Avatar from './assets/avatar.png'
import { Book, Cpu, Database, Github, Linkedin } from 'lucide-react';
import { Projects } from './data/Projects';
import { Skills } from './data/Skills';
import { Experiences } from './data/Experiences';
function App() {
  const { width, height } = useWindowDimensions();
  const bgArray = generateBackgroundArray();


  return (
    <ParallaxProvider>
      <div className='bg-gradient-to-r from-[#090909] to-[#090909] via-[#11110F] min-w-full z-0'>

        {
          bgArray.map((bg, index) => (
            <Parallax 
              key={index}
              className={bg.className}
              style={{ 
                top: (height * 3 - 40 ) * bg.randomRatioY + 'px',
                left: (width - 100 ) * bg.randomRatioX + 'px',
                height: bg.height + 'px',
                width: bg.width + 'px',
              }}
            />
          ))
        }

      <div className='fixed top-10 left-1/2 transform -translate-x-1/2 text-white p-4 bg-gradient-to-r from-[#10100E] to-[#20201d] w-fit max-w-[80%] rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)] z-50'>
        <div className='flex flex-row gap-8'>
          <a href='#About' >About me</a>
          <a href='#Skills' >Skills</a>
          <a href='#Projects' >Projects</a>
          <a href='#Experiences' >Experiences</a>
          <a href='#Contact' >Contact</a>
        </div>
      </div>

        


        <div className='flex flex-col justify-center w-3/4 mx-auto gap-60 py-40'>
          <Parallax 
            translateY={[0, 50]}
            speed={-10}
            easing="easeOutQuad"
            className="z-10">
            <div id='About' className='flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#10100E] to-[#20201d] p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]'>
              <div>
                <h1 className="text-white text-5xl font-bold mb-4">Recchia Michel</h1>
                <h2 className="text-gray-300 text-2xl">Full Stack Developer</h2>
                <div className='flex flex-row gap-16 mt-16 justify-center'>
                  <Linkedin color='white' size={64} onClick={()=>{window.open('https://www.linkedin.com/in/michel-recchia-2601a5255/')}} />
                  <Github color='white' size={64} onClick={()=>{window.open('https://github.com/Mirecos')}} />
                </div>
              </div>

              {/* Avatar Circle */}
              <div className="mt-6 ">
                <img className='w-64 h-64 rounded-full' alt='avatar' src={Avatar} />
              </div>
            </div>
            
            
          </Parallax>

          {/* Skills part */}
          <Parallax
            translateY={[20, 20]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div id='Skills' className="bg-gradient-to-r from-[#10100E] to-[#20201d] p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)] flex flex-col gap-6">
              <div className='flex flex-row items-baseline gap-2'>
                <Book color='white' />
                <h2 className="text-white text-3xl font-bold">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {Skills.Skills.map(skill => (
                  <span key={skill.name} className="bg-blue-500/20 text-white px-4 py-2 rounded-full flex items-center gap-1">
                    <img src={skill.icon} className='w-8 h-8'></img>
                    {skill.name}
                  </span>
                ))}
              </div>

              <div className='flex flex-row items-baseline gap-2'>
                <Cpu color='white' />
                <h2 className="text-white text-3xl font-bold ">Frameworks</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {Skills.Frameworks.map(skill => (
                  <span key={skill.name} className="bg-blue-500/20 text-white px-4 py-2 rounded-full flex items-center gap-1">
                    <img src={skill.icon} className='w-8 h-8'></img>
                    {skill.name}
                  </span>
                ))}
              </div>

              <div className='flex flex-row items-baseline gap-2'>
                <Database color='white' />
                <h2 className="text-white text-3xl font-bold ">Databases</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {Skills.Databases.map(skill => (
                  <span key={skill.name} className="bg-blue-500/20 text-white px-4 py-2 rounded-full flex items-center gap-1">
                    <img src={skill.icon} className='w-8 h-8'></img>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Parallax>

          {/* Projects part */}
          <Parallax 
            translateY={[20, 20]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div id='Projects' className="bg-gradient-to-r from-[#10100E] to-[#20201d] p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              <h2 className="text-white text-3xl font-bold mb-6">My Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                  Projects.map((project, index) => (
                    <div key={index} className="bg-gray-800/80 p-6 rounded-lg">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                      />
                      <h3 className="text-white text-xl font-semibold mb-2">{project.name}</h3>
                      <p className="text-gray-300">{project.description}</p>
                      <p className="text-gray-500 mt-2">{project.year}</p>
                    </div>
                  ))  
                }
              </div>
            </div>
          </Parallax>

          {/* Experiences part */}
          <Parallax 
            translateY={[20, 20]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div id='Experiences' className="bg-gradient-to-r from-[#10100E] to-[#20201d] p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              <h2 className="text-white text-3xl font-bold mb-6">My Experiences</h2>
              {
                Experiences.map((experience, index) => (
                  <div key={index} className="bg-gray-800/80 p-6 rounded-lg mb-4">
                    <h3 className="text-white text-xl font-semibold mb-2">{experience.title}</h3>
                    <p className="text-gray-300">{experience.company}</p>
                    <p className="text-gray-500">{experience.date}</p>
                    <p className="text-gray-300 mt-2">{experience.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {experience.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-500/20 text-white px-4 py-2 rounded-full flex items-center gap-1">
                          <img src={skill.icon} className='w-8 h-8'></img>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              }

            </div>
          </Parallax>


          {/* Contact part */}
          <Parallax 
            translateY={[20, 20]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div id="Contact" className="bg-gradient-to-r from-[#10100E] to-[#20201d] p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              <h2 className="text-white text-3xl font-bold mb-6">Contact Me</h2>
              <form className="flex flex-col gap-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your Name" 
                    className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your Message" 
                    rows={5} 
                    className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

          </Parallax>
        </div>

        <div className='mt-80 w-full bg-gradient-to-r from-[#10100E] to-[#20201d] p-4 shadow-[0_0_10px_rgba(255,255,255,0.7)]'>
            <h2 className="text-white text-3xl font-bold mb-6">Thanks for your time !</h2>
            <div className="flex flex-wrap gap-3">
              {['LinkedIn', 'GitHub'].map(skill => (
                <span key={skill} className="bg-blue-500/20 text-white px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
            <div className='text-white'>This site is deployed with Vercel !</div>
            <div className='text-white'>Made in 2025</div>

          </div>
      </div>
    </ParallaxProvider>
  )
}

export default App