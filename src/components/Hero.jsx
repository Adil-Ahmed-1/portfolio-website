import React from 'react'

function Hero({darkMode}) {
    const socialIcons = [
        { icon: '/assets/instagram.png', alt: 'Instagram' },
        { icon: '/assets/linkedin.png', alt: 'LinkedIn' },
        { icon: '/assets/github.png', alt: 'GitHub' },
        { icon: '/assets/figma.png', alt: 'Figma' },
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle:'bg-orange-500 opacity-10',
    };
    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-500',
        buttonSecondary: 'text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle:'bg-orange-500 opacity-10',
    };

    const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className={`relative overflow-hidden min-h-screen flex flex-col ${darkMode ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900' : 'bg-linear-to-br from-gray-50 to-blue-50'}`}>
        <section id='home' data-aos='fade-up'
        data-aos-delay='250'
        className='body-font z-10'>
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-24'>
                <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                        {socialIcons.map((social, index) => (
                           <a 
                           key={index}
                           href='#'
                           target='_blank'
                           data-aos-delay={`${400 + index * 100}`}
                           className='transform hover:scale-110 transition-transform duration-300'>
                            <img src={social.icon} alt={social.alt} className='w-6 h-6 sm:w-10 sm:h-10 object-contain' />

                           </a> 
                        ))}

                    </div>

                    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${theme.textPrimary}`}>Hi, I'm Adil</h1>

                    <h2 className={`text-xl sm:text-2xl lg:text-3xl mb-6 ${theme.textSecondary}`}>Full stack Developer</h2>

                    <p className={`text-lg mb-8 ${theme.textSecondary}`}>Adil is a dedicated Web Developer with a strong passion for creating modern, responsive, and user-friendly websites. He is skilled in HTML, CSS, JavaScript, and React, and enjoys turning ideas into functional digital experiences.</p>

                    <div className='flex gap-4'>

                        <a href="mailto:ahmedadilbaloch95@gmail.com" className='bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors'>Contact Me</a>

                        <a href="public/assets/cv.pdf" className={`px-6 py-3 rounded-full ${theme.buttonSecondary} transition-colors`}>Download Resume</a>

                    </div>

                </div>

                <div className='lg:w-1/2 w-full flex justify-center lg:justify-end'>
                    <div className='max-w-xl w-full'>
                        <img
                            src='/assets/hero.png'
                            alt='Hero'
                            className='w-full h-auto rounded-4xl object-cover shadow-2xl'
                            data-aos='fade-left'
                            data-aos-delay='300'
                        />
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Hero