import React from 'react'

function About({ darkMode }) {
  // Determine styles based on dark mode prop
  const theme = darkMode
    ? {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        cardBg: 'bg-white/5 border border-white/10',
      }
    : {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-600',
        cardBg: 'bg-white shadow-sm border border-gray-200',
      }

  return (
    <section 
      id='about' 
      // Changed bg-linear-to-br to bg-gradient-to-br (Standard Tailwind)
      className={`relative py-20 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          
          {/* Left Column: Content */}
          <div className='lg:w-1/2'>
            <span className={`inline-block text-sm font-semibold tracking-[0.4em] uppercase ${theme.textSecondary}`}>
              About Me
            </span>
            
            <h2 className={`mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight ${theme.textPrimary}`}>
              I build fast, modern web experiences that help businesses grow.
            </h2>
            
            <p className={`mt-6 text-base sm:text-lg leading-8 ${theme.textSecondary}`}>
              I am a Full Stack Developer with a Bachelor's degree in Computer Science from Sindh University (2024). 
              I have completed two internships at Hidaya Institute in PHP development and WordPress.
            </p>
            
            <p className={`mt-4 text-base sm:text-lg leading-8 ${theme.textSecondary}`}>
              Currently, I am working as a developer at Spark Lab Pvt. Ltd., Karachi, where I continue to build and improve modern web applications. 
              I am passionate about creating efficient, user-friendly websites and applications that help businesses succeed in the digital world.
            </p>

            {/* Stats Cards */}
            <div className='mt-10 grid gap-4 sm:grid-cols-3'>
              <div className={`rounded-2xl p-6 backdrop-blur-sm transition-transform hover:scale-105 duration-300 ${theme.cardBg}`}>
                <p className='text-4xl font-bold text-orange-500'>1</p>
                <p className={`mt-2 text-sm font-medium ${theme.textSecondary}`}>Years Experience</p>
              </div>
              <div className={`rounded-2xl p-6 backdrop-blur-sm transition-transform hover:scale-105 duration-300 ${theme.cardBg}`}>
                <p className='text-4xl font-bold text-orange-500'>30+</p>
                <p className={`mt-2 text-sm font-medium ${theme.textSecondary}`}>Projects Completed</p>
              </div>
              <div className={`rounded-2xl p-6 backdrop-blur-sm transition-transform hover:scale-105 duration-300 ${theme.cardBg}`}>
                <p className='text-4xl font-bold text-orange-500'>5+</p>
                <p className={`mt-2 text-sm font-medium ${theme.textSecondary}`}>Awards & Internships</p>
              </div>
            </div>

            {/* Skills */}
            <div className='mt-10 flex flex-wrap gap-3'>
              {['React', 'JavaScript', 'PHP', 'Tailwind', 'Node.js', 'Python'].map((skill) => (
                <span 
                  key={skill} 
                  className='rounded-full border border-orange-500 px-5 py-2 text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-default'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className='lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0'>
            <div className='relative w-full max-w-lg group'>
              {/* Decorative blob behind image (optional visual flair) */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`}></div>
              
              <img
                src='/assets/about.png'
                alt='Developer workspace environment'
                // Using arbitrary value for radius to match '4xl' look if not configured
                className='relative w-full h-auto rounded-[2.5rem] object-cover shadow-2xl border border-white/10'
                data-aos='fade-left'
                data-aos-delay='250'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About