import React from 'react';

function Hero({ darkMode }) {
    const socialIcons = [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/',
            svg: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#ig-grad)" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.3" fill="url(#ig-grad)" />
                    <defs>
                        <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FEDA75" />
                            <stop offset="0.3" stopColor="#FA7E1E" />
                            <stop offset="0.6" stopColor="#D62976" />
                            <stop offset="1" stopColor="#962FBF" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/adil-khoso/',
            svg: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/Adil-Ahmed-1',
            svg: (
                <svg viewBox="0 0 24 24" className={`w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6 ${darkMode ? 'fill-white' : 'fill-gray-900'}`} xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
            ),
        },
        {
            name: 'Figma',
            href: 'https://www.figma.com/files/team/1428238607257160238/recents-and-sharing/recently-viewed?fuid=1428238605382308942',
            svg: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 22a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 8.5 15H12v3.5A3.5 3.5 0 0 1 8.5 22z" fill="#0ACF83" />
                    <path d="M5 12a3.5 3.5 0 0 1 3.5-3.5H12v7H8.5A3.5 3.5 0 0 1 5 12z" fill="#A259FF" />
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262" />
                    <path d="M19 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" fill="#1ABCFE" />
                </svg>
            ),
        },
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-500',
        socialBg: 'bg-white/10 hover:bg-white/20 border border-white/10',
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-600',
        buttonSecondary: 'text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-500',
        socialBg: 'bg-gray-900/5 hover:bg-gray-900/10 border border-gray-900/10',
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
            {/* Decorative Blurs */}
            <div className={`absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full ${theme.decorativeCircle} opacity-[0.07] blur-3xl pointer-events-none`} />
            <div className={`absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full ${theme.decorativeCircle} opacity-[0.05] blur-3xl pointer-events-none`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full ${theme.decorativeCircle} opacity-[0.04] blur-3xl pointer-events-none`} />

            {/* Main Content */}
            <section
                id="home"
                data-aos="fade-up"
                data-aos-delay="200"
                className="body-font relative z-10 w-full"
            >
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-14 sm:py-16 md:py-20 lg:py-0 lg:min-h-screen">

                    {/* Left: Text Side */}
                    <div className="w-full lg:w-[55%] xl:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left min-w-0">

                        {/* Heading — smaller now */}
                        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-extrabold leading-tight mb-2 sm:mb-3 ${theme.textPrimary} break-words`}>
                            Hi, I'm{' '}
                            <span className="text-orange-500 whitespace-nowrap">Adil Khoso</span>
                        </h1>

                        {/* Sub-heading — smaller too */}
                        <h2 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 ${theme.textSecondary}`}>
                            Web Developer & UI/UX Designer
                        </h2>

                        {/* Description */}
                        <p className={`text-sm sm:text-[15px] md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 ${theme.textSecondary}`}>
                            I'm a passionate Web Developer with 1.5 years of
                            professional experience, dedicated to building
                            modern, responsive, and user-friendly digital
                            experiences. I specialize in PHP, Laravel, React,
                            JavaScript, WordPress, and modern web technologies.
                            I enjoy transforming creative ideas into powerful
                            websites through clean code, innovative design,
                            and problem-solving.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
                            <a
                                href="mailto:ahmedadilbaloch95@gmail.com"
                                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-orange-600 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Me
                            </a>

                            <a
                                href="/assets/cv.pdf"
                                download
                                className={`inline-flex items-center justify-center gap-2 text-sm sm:text-base font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full ${theme.buttonSecondary} active:scale-[0.97] transition-all duration-200`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                            </a>
                        </div>

                        {/* Social Icons — NOW BELOW BUTTONS */}
                        <div className="flex justify-center lg:justify-start gap-2.5 sm:gap-3 md:gap-4 w-full">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-aos="fade-up"
                                    data-aos-delay={`${450 + index * 80}`}
                                    className={`group inline-flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all duration-300 p-2 sm:p-2.5 rounded-full ${theme.socialBg}`}
                                    aria-label={social.name}
                                >
                                    {social.svg}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Profile Image */}
                    <div className="w-full lg:w-[45%] xl:w-[48%] flex justify-center lg:justify-end min-w-0">
                        <div className="relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[440px] xl:max-w-[480px]">
                            <div className={`absolute inset-0 rounded-[2rem] ${theme.decorativeCircle} opacity-[0.12] blur-2xl scale-90 pointer-events-none`} />
                            <img
                                src="/assets/hero.png"
                                alt="Adil Khoso - Web Developer"
                                className="relative w-full h-auto rounded-2xl sm:rounded-3xl lg:rounded-[2rem] object-cover shadow-2xl"
                                data-aos="fade-left"
                                data-aos-delay="350"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
