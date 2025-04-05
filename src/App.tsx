import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import useWindowDimensions from './hooks/useWindowDimensions';
import { generateBackgroundArray } from './utils/backgroundGenerator';
import Avatar from './assets/avatar.png'
import { Book, ChevronsDown, Cpu, Database, Github, Hammer, Linkedin } from 'lucide-react';
import { Projects } from './data/Projects';
import { Skills } from './data/Skills';
import { Experiences } from './data/Experiences';
import { useEffect, useState } from 'react';

function App() {
  const { width, height } = useWindowDimensions();
  const bgArray = generateBackgroundArray();


  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [message, setMessage] = useState(''); // State for the contact form message
  const [subject, setSubject] = useState(''); // State for the email subject
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value); // Update the state with the textarea value
  };
  


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

        <div hidden={hasScrolled} className='invisible md:visible md:fixed animate-bounce bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white flex flex-row gap-2 items-center shadow-[0_0_10px_rgba(255,255,255,0.7)] p-2 rounded-2xl z-50'>
          <ChevronsDown className='w-10 h-10' color='white' size={64} />
        </div>

      <div className='fixed top-10 left-1/2 transform -translate-x-1/2 text-white p-4 bg-gradient-to-r from-[#10100E] to-[#20201d] w-fit max-w-[80%] rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)] z-50'>
        <div className='flex flex-row gap-4 md:gap-8 text-xs md:text-md '>
          <a 
            href='#About' 
            className="text-white hover:text-blue-500 hover:underline hover:scale-110 hover:rotate-1 transition duration-300"
          >
            About me
          </a>
          <a 
            href='#Skills' 
            className="text-white hover:text-blue-500 hover:underline hover:scale-110 hover:rotate-1 transition duration-300"
          >
            Skills
          </a>
          <a 
            href='#Projects' 
            className="text-white hover:text-blue-500 hover:underline hover:scale-110 hover:rotate-1 transition duration-300"
          >
            Projects
          </a>
          <a 
            href='#Experiences' 
            className="text-white hover:text-blue-500 hover:underline hover:scale-110 hover:rotate-1 transition duration-300"
          >
            Experiences
          </a>
          <a 
            href='#Contact' 
            className="text-white hover:text-blue-500 hover:underline hover:scale-110 hover:rotate-1 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>


        <div className='flex flex-col justify-center w-3/4 mx-auto gap-40 md:gap-60 py-20 md:py-40'>
          <Parallax 
            translateY={[20, 20]}
            speed={-10}
            easing="easeOutQuad"
            className="z-10">
            <div id='About' className='flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#10100E] to-[#20201d] p-4 md:p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]'>
              <div className='flex flex-col md:flex-row gap-8'>
                <div>
                  <h1 className="text-white text-5xl font-bold mb-4">Recchia Michel</h1>
                  <h2 className="text-gray-300 text-2xl">Full Stack Developer</h2>
                  <div className='flex flex-row gap-16 mt-16 justify-center'>
                  <Linkedin
                    color='white'
                    size={64}
                    className="hover:bg-[#0A66C2] hover:rounded-md hover:scale-110 transition duration-300"
                    onClick={() => {
                      window.open('https://www.linkedin.com/in/michel-recchia-2601a5255/');
                    }}
                  />
                  <Github
                    color='white'
                    size={64}
                    className="hover:bg-[#010409] hover:rounded-md hover:scale-110 transition duration-300"
                    onClick={() => {
                      window.open('https://github.com/Mirecos');
                    }}
                  />
                  </div>
                </div>
              </div>

              {/* Avatar Circle */}
              <div className="mt-6">
                <img className='w-48 h-48 md:w-64 md:h-64 rounded-full' alt='avatar' src={Avatar} />
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
            <div id='Skills' className="bg-gradient-to-r from-[#10100E] to-[#20201d] p-4 md:p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)] flex flex-col gap-6">
              <div className='flex flex-row items-baseline gap-2'>
                <Book color='white' />
                <h2 className="text-white text-3xl font-bold">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {Skills.Skills.map(skill => (
                  <span key={skill.name} className="bg-blue-500/20 text-white text-sm md:text-md px-4 py-2 rounded-full flex items-center gap-1">
                    <img src={skill.icon} className='w-5 h-5 md:w-8 md:h-8'></img>
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
                  <span key={skill.name} className="bg-blue-500/20 text-white text-sm md:text-md px-4 py-2 rounded-full flex items-center gap-1">
                    <img src={skill.icon} className='w-5 h-5 md:w-8 md:h-8'></img>
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
                  <span key={skill.name} className="bg-blue-500/20 text-white text-sm md:text-md px-4 py-2 rounded-full flex items-center gap-1">
                    <img src={skill.icon} className='w-5 h-5 md:w-8 md:h-8'></img>
                    {skill.name}
                  </span>
                ))}
              </div>

              <div className='flex flex-row items-baseline gap-2'>
                <Hammer color='white' />
                <h2 className="text-white text-3xl font-bold ">Tools</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {Skills.Tools.map(skill => (
                  <span key={skill.name} className="bg-blue-500/20 text-white text-sm md:text-md px-4 py-2 rounded-full flex items-center gap-1">
                    <img src={skill.icon} className='w-5 h-5 md:w-8 md:h-8'></img>
                    {skill.name}
                  </span>
                ))}
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
            <div id='Experiences' className="bg-gradient-to-r from-[#10100E] to-[#20201d] p-4 md:p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              <h2 className="text-white text-3xl font-bold mb-6">My Experiences</h2>
              {
                Experiences.map((experience, index) => (
                  <div key={index} className="bg-gray-800/80 p-3 md:p-6 rounded-lg mb-4">
                    <h3 className="text-white text-xl font-semibold mb-2">{experience.title}</h3>
                    <p className="text-gray-300">{experience.company}</p>
                    <p className="text-gray-500">{experience.date}</p>
                    <p className="text-gray-300 mt-2">{experience.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {experience.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-500/20 text-white text-sm md:text-md px-4 py-2 rounded-full flex items-center gap-1">
                          <img src={skill.icon} className='w-5 h-5 md:w-8 md:h-8'></img>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              }

            </div>
          </Parallax>

          {/* Projects part */}
          <Parallax 
            translateY={[20, 20]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div id='Projects' className="bg-gradient-to-r from-[#10100E] to-[#20201d] p-4 md:p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              <h2 className="text-white text-3xl font-bold mb-6">My Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                  Projects.map((project, index) => (
                    <div key={index} className="bg-gray-800/80  p-3 md:p-6 rounded-lg">
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


          {/* Contact part */}
          <Parallax 
            translateY={[20, 20]}
            speed={-10}
            scale={[0.9, 1.1]}
            className="z-10"
          >
            <div id="Contact" className="bg-gradient-to-r from-[#10100E] to-[#20201d] p-4 md:p-8 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              <h2 className="text-white text-3xl font-bold mb-6">Contact Me</h2>
              <form className="flex flex-col gap-4">
                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    value={subject} // Bind the subject state
                    onChange={(e) => setSubject(e.target.value)} // Update the subject state
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
                    value={message}
                    onChange={handleMessageChange}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <a
                  href={`mailto:michelrecchia1@gmail.com?subject=${subject}&body=${message}`}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
                >
                  Send Message
                </a>

              </form>
            </div>

          </Parallax>
        </div>

        <div className='mt-80 w-full bg-gradient-to-r from-[#10100E] to-[#20201d] p-4 shadow-[0_0_10px_rgba(255,255,255,0.7)] flex justify-between items-center'>
            <div className="flex flex-wrap gap-3">
              <div className='text-white font-bold'>@2025 - RECCHIA Michel - All Rights Reserved</div>
            </div>

            <div className='flex flex-col gap-2 text-right'>
              <div className='text-white font-bold'>Deployed with Vercel !</div>
            </div>
            

          </div>
      </div>
    </ParallaxProvider>
  )
}

export default App