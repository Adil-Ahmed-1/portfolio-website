import React from 'react'

function MySkills({ darkMode }) {
  const theme = darkMode
    ? {
        title: 'text-white',
        subtitle: 'text-gray-300',
        card: 'bg-white/5 border border-white/10',
      }
    : {
        title: 'text-gray-900',
        subtitle: 'text-gray-600',
        card: 'bg-white shadow-sm border border-gray-200',
      }

  const skills = [
    { name: 'React', level: 'Expert', width: 'w-[95%]' },
    { name: 'JavaScript', level: 'Advanced', width: 'w-[90%]' },
    { name: 'Tailwind CSS', level: 'Advanced', width: 'w-[88%]' },
    { name: 'Node.js', level: 'Intermediate', width: 'w-[80%]' },
    { name: 'PHP', level: 'Intermediate', width: 'w-[75%]' },
    { name: 'WordPress', level: 'Intermediate', width: 'w-[70%]' },
  ]

  return (
    <section id='skills' className={`relative py-20 ${darkMode ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900' : 'bg-linear-to-br from-gray-50 to-blue-50'}`}>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <span className={`inline-block text-sm font-semibold tracking-[0.4em] uppercase ${theme.subtitle}`}>
            My Skills
          </span>
          <h2 className={`mt-6 text-4xl sm:text-5xl font-bold ${theme.title}`}>
            Technology expertise I bring to every project.
          </h2>
          <p className={`mt-6 text-base sm:text-lg leading-8 ${theme.subtitle}`}>
            I deliver modern web applications with strong front-end and back-end foundations, using tools that make user experiences fast, responsive, and beautiful.
          </p>
        </div>

        <div className='mt-14 grid gap-6 md:grid-cols-2'>
          {skills.map((skill) => (
            <div key={skill.name} className={`rounded-4xl p-6 ${theme.card}`}>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-semibold text-orange-500'>{skill.name}</h3>
                <span className={`text-sm font-medium ${theme.subtitle}`}>{skill.level}</span>
              </div>
              <div className='h-3 rounded-full bg-white/10'>
                <div className={`h-3 rounded-full bg-linear-to-r from-orange-500 to-amber-400 ${skill.width}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MySkills