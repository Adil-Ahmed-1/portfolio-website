import React from 'react'
import instagramImg from '/assets/instagram.png';
import linkedinImg from '/assets/linkedin.png';

function Hero({ darkMode }) {
const socialIcons = [
  { icon: '/assets/instagram.png', alt: 'Instagram', href: '#' }, // Added /
  { icon: '/assets/linkedin.png', alt: 'LinkedIn', href: '#' },
  { icon: '/assets/github.png', alt: 'GitHub', href: '#' },
  { icon: '/assets/figma.png', alt: 'Figma', href: '#' }, // Added /
];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-500',
        socialIconFilter: 'brightness-0 invert opacity-70 hover:opacity-100',
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-600',
        buttonSecondary: 'text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-500',
        socialIconFilter: 'brightness-0 opacity-50 hover:opacity-100',
    };

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <div
            className={`relative overflow-hidden min-h-screen flex items-center ${
                darkMode
                    ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900'
                    : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
            }`}
        >
            {/* ── Decorative Blurs ── */}
            <div
                className={`absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full ${theme.decorativeCircle} opacity-[0.07] blur-3xl pointer-events-none`}
            />
            <div
                className={`absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full ${theme.decorativeCircle} opacity-[0.05] blur-3xl pointer-events-none`}
            />
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full ${theme.decorativeCircle} opacity-[0.04] blur-3xl pointer-events-none`}
            />

            {/* ── Main Content ── */}
            <section
                id='home'
                data-aos='fade-up'
                data-aos-delay='200'
                className='body-font relative z-10 w-full'
            >
                <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-0 lg:min-h-screen'>
                    
                    {/* ── Left: Text Side ── */}
                    <div className='w-full lg:w-[55%] xl:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left'>
                        
                        {/* Social Icons Row */}
                        <div className='flex justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-8 w-full'>
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    data-aos='fade-down'
                                    data-aos-delay={`${300 + index * 80}`}
                                    className={`group transform hover:scale-110 active:scale-95 transition-all duration-300 p-1.5 sm:p-2 rounded-lg ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-900/5'}`}
                                    aria-label={social.alt}
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.alt}
                                        className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain transition-opacity duration-300 ${theme.socialIconFilter}`}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Heading */}
                        <h1
                            className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-6xl font-extrabold leading-tight sm:leading-tight md:leading-[1.1] mb-2 sm:mb-3 md:mb-4 ${theme.textPrimary}`}
                        >
                            Hi, I'm{' '}
                            <span className='text-orange-500'>Adil</span>
                        </h1>

                        {/* Sub-heading */}
                        <h2
                            className={`text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] font-semibold mb-4 sm:mb-5 md:mb-6 ${theme.textSecondary}`}
                        >
                            Web Developer
                        </h2>

                        {/* Description */}
                        <p
                            className={`text-sm sm:text-base md:text-lg leading-relaxed md:leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 md:mb-10 ${theme.textSecondary}`}
                        >
                            A dedicated Web Developer with a strong passion for creating
                            modern, responsive, and user-friendly websites. Skilled in
                            HTML, CSS, JavaScript, and React — turning ideas into
                            functional digital experiences.
                        </p>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto'>
                            <a
                                href='mailto:ahmedadilbaloch95@gmail.com'
                                className='inline-flex items-center justify-center gap-2 bg-orange-500 text-white text-sm sm:text-base font-medium px-7 py-3 sm:py-3.5 rounded-full hover:bg-orange-600 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40'
                            >
                                <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4 sm:w-5 sm:h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                </svg>
                                Contact Me
                            </a>

                            <a
                                href='/assets/cv.pdf'
                                download
                                className={`inline-flex items-center justify-center gap-2 text-sm sm:text-base font-medium px-7 py-3 sm:py-3.5 rounded-full ${theme.buttonSecondary} active:scale-[0.97] transition-all duration-200`}
                            >
                                <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4 sm:w-5 sm:h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* ── Right: Image Side ── */}
                    <div className='w-full lg:w-[45%] xl:w-[48%] flex justify-center lg:justify-end'>
                        <div className='relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]'>
                            
                            {/* Glow behind image */}
                            <div
                                className={`absolute inset-0 rounded-[2rem] ${theme.decorativeCircle} opacity-[0.12] blur-2xl scale-90 pointer-events-none`}
                            />

                            <img
                                src='/assets/hero.png'
                                alt='Adil — Full Stack Developer'
                                className='relative w-full h-auto rounded-2xl sm:rounded-3xl lg:rounded-[2rem] object-cover shadow-2xl'
                                data-aos='fade-left'
                                data-aos-delay='350'
                                loading='eager'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero