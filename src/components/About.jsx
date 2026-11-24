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

  const skills = ['React', 'JavaScript', 'PHP', 'Tailwind', 'Node.js', 'Python']

  const stats = [
    { value: '1', label: 'Years Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: '5+', label: 'Awards & Internships' },
  ]

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-16 sm:py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 min-w-0">
            <span
              className={`inline-block text-xs sm:text-sm font-semibold tracking-[0.35em] sm:tracking-[0.4em] uppercase ${theme.textSecondary}`}
            >
              About Me
            </span>

            <h2
              className={`mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight break-words ${theme.textPrimary}`}
            >
              I build fast, modern web experiences that help businesses grow.
            </h2>

            <p
              className={`mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 ${theme.textSecondary}`}
            >
              I am a Full Stack Developer with a Bachelor's degree in Computer
              Science from Sindh University (2024). I have completed two
              internships at Hidaya Institute in PHP development and WordPress.
            </p>

            <p
              className={`mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 ${theme.textSecondary}`}
            >
              Currently, I am working as a developer at Spark Lab Pvt. Ltd.,
              Karachi, where I continue to build and improve modern web
              applications. I am passionate about creating efficient,
              user-friendly websites and applications that help businesses
              succeed in the digital world.
            </p>

            {/* Stats Cards */}
            <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-5 sm:p-6 backdrop-blur-sm transition-transform hover:scale-105 duration-300 ${theme.cardBg}`}
                >
                  <p className="text-3xl sm:text-4xl font-bold text-orange-500">
                    {stat.value}
                  </p>
                  <p
                    className={`mt-2 text-xs sm:text-sm font-medium ${theme.textSecondary}`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-orange-500 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 min-w-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg group">
              {/* Decorative glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-600 rounded-[2rem] sm:rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 pointer-events-none"></div>

              <img
                src="/assets/about.png"
                alt="Developer workspace environment"
                className="relative w-full h-auto rounded-[2rem] sm:rounded-[2.5rem] object-cover shadow-2xl border border-white/10"
                data-aos="fade-left"
                data-aos-delay="250"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
