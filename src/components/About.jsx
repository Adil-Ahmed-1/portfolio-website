import React from 'react'

function About({ darkMode }) {
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
    <section id='about' className={`relative py-20 ${darkMode ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900' : 'bg-linear-to-br from-gray-50 to-blue-50'}`}>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          <div className='lg:w-1/2'>
            <span className={`inline-block text-sm font-semibold tracking-[0.4em] uppercase ${theme.textSecondary}`}>
              About Me
            </span>
            <h2 className={`mt-6 text-2xl sm:text-4xl font-bold ${theme.textPrimary}`}>
              I build fast, modern web experiences that help businesses grow.
            </h2>
            <p className={`mt-6 text-base sm:text-lg leading-8 ${theme.textSecondary}`}>
              I am a Full Stack Developer with a Bachelor's degree in Computer Science from Sindh University (2024). I have completed two internships at Hidaya Institute in PHP development and WordPress.

Currently, I am working as a developer at Spark Lab Pvt. Ltd., Karachi, where I continue to build and improve modern web applications. I am passionate about creating efficient, user-friendly websites and applications that help businesses succeed in the digital world.
            </p>

            <div className='mt-10 grid gap-4 sm:grid-cols-3'>
              <div className={`rounded-3xl p-6 ${theme.cardBg}`}>
                <p className='text-3xl font-bold text-orange-500'>1</p>
                <p className={`mt-2 text-sm ${theme.textSecondary}`}>Years Experience</p>
              </div>
              <div className={`rounded-3xl p-6 ${theme.cardBg}`}>
                <p className='text-3xl font-bold text-orange-500'>30+</p>
                <p className={`mt-2 text-sm ${theme.textSecondary}`}>Projects Completed</p>
              </div>
              <div className={`rounded-3xl p-6 ${theme.cardBg}`}>
                <p className='text-3xl font-bold text-orange-500'>5+</p>
                <p className={`mt-2 text-sm ${theme.textSecondary}`}>Awards & Internships</p>
              </div>
            </div>

            <div className='mt-10 flex flex-wrap gap-3'>
              {['React', 'JavaScript', 'PHP', 'Tailwind', 'Node.js', 'Python'].map((skill) => (
                <span key={skill} className='rounded-full border border-orange-500 px-4 py-2 text-sm text-orange-500'>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className='lg:w-1/2 flex justify-center lg:justify-end'>
            <div className='relative w-full max-w-lg'>
              <img
                src='/assets/about.png'
                alt='About section'
                className='w-full h-auto rounded-4xl object-cover shadow-2xl'
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