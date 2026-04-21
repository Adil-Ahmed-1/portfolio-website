import React, { useState, useEffect, useRef } from 'react'

function MySkills({ darkMode }) {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const theme = darkMode
    ? {
        title: 'text-white',
        subtitle: 'text-gray-300',
        card: 'bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20',
        barBg: 'bg-white/10',
        badge: 'bg-orange-500/10 text-orange-400',
      }
    : {
        title: 'text-gray-900',
        subtitle: 'text-gray-600',
        card: 'bg-white shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300',
        barBg: 'bg-gray-200',
        badge: 'bg-orange-50 text-orange-600',
      }

  const skills = [
    { name: 'React', level: 'Expert', pct: 95, icon: '⚛' },
    { name: 'JavaScript', level: 'Advanced', pct: 90, icon: 'JS' },
    { name: 'Tailwind CSS', level: 'Advanced', pct: 88, icon: '🎨' },
    { name: 'Node.js', level: 'Intermediate', pct: 80, icon: '🟢' },
    { name: 'PHP', level: 'Intermediate', pct: 75, icon: '🐘' },
    { name: 'WordPress', level: 'Intermediate', pct: 70, icon: '📘' },
  ]

  return (
    <section
      id='skills'
      ref={sectionRef}
      className={`relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
      }`}
    >
      {/* Decorative blurs */}
      <div
        className={`absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-orange-500 opacity-[0.04] blur-3xl pointer-events-none`}
      />
      <div
        className={`absolute bottom-0 left-0 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-orange-500 opacity-[0.03] blur-3xl pointer-events-none`}
      />

      <div className='container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10'>
        {/* ── Header ── */}
        <div className='max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16'>
          <span
            className={`inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.4em] uppercase ${theme.subtitle}`}
            data-aos='fade-down'
          >
            My Skills
          </span>

          <h2
            className={`mt-3 sm:mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-snug ${theme.title}`}
            data-aos='fade-up'
            data-aos-delay='100'
          >
            Technology expertise I bring to{' '}
            <span className='text-orange-500'>every project.</span>
          </h2>

          <p
            className={`mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed md:leading-8 ${theme.subtitle}`}
            data-aos='fade-up'
            data-aos-delay='150'
          >
            I deliver modern web applications with strong front-end and back-end
            foundations, using tools that make user experiences fast, responsive,
            and beautiful.
          </p>
        </div>

        {/* ── Skills Grid ── */}
        <div className='max-w-4xl mx-auto grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2'>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 transition-all duration-300 ${theme.card}`}
              data-aos='fade-up'
              data-aos-delay={`${200 + index * 80}`}
            >
              {/* Top row */}
              <div className='flex items-center justify-between mb-3 sm:mb-4'>
                <div className='flex items-center gap-2 sm:gap-3'>
                  <span className='flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-orange-500/10 text-sm sm:text-base md:text-lg'>
                    {skill.icon}
                  </span>
                  <h3 className='text-base sm:text-lg font-semibold text-orange-500'>
                    {skill.name}
                  </h3>
                </div>
                <span
                  className={`text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full ${theme.badge}`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Progress bar */}
              <div className='relative'>
                <div
                  className={`h-2 sm:h-2.5 md:h-3 rounded-full overflow-hidden ${theme.barBg}`}
                >
                  <div
                    className='h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-1000 ease-out'
                    style={{
                      width: visible ? `${skill.pct}%` : '0%',
                      transitionDelay: `${300 + index * 120}ms`,
                    }}
                  />
                </div>
                {/* Percentage label */}
                <span
                  className={`absolute -top-6 right-0 text-xs font-semibold tabular-nums ${theme.subtitle} opacity-0 transition-opacity duration-500`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transitionDelay: `${800 + index * 120}ms`,
                  }}
                >
                  {skill.pct}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MySkills