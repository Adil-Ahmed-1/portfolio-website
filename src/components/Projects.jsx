import React, { useState } from 'react'

const projects = [
  {
    title: 'E-Commerce Store',
    description: 'A responsive online storefront built with React, Tailwind CSS and Firebase authentication.',
    image: '/assets/project1.png',
    details: 'Complete product browsing, cart experience, checkout flow, and responsive design for all devices.',
    viewLink: '#',
    codeLink: '#',
    tags: ['React', 'Firebase', 'Tailwind'],
    comingSoon: true,
  },
  {
    title: 'Portfolio Website',
    description: 'Modern personal portfolio with animated sections, dark mode, and mobile-friendly layout.',
    image: '/assets/project2.png',
    details: 'Showcases projects, skills, contact form, and smooth scroll navigation with polished UI interactions.',
    viewLink: 'https://adil-khoso-eight.vercel.app/',
    codeLink: 'https://github.com/Adil-Ahmed-1/Adil-Khoso-portfolio',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Blog Management System',
    description: 'Admin dashboard for managing posts, comments, and users in a clean interface.',
    image: '/assets/project3.jpg',
    details: 'Includes CRUD post management, user roles, responsive tables, and easy navigation for admins.',
    viewLink: '#',
    codeLink: 'https://github.com/ahmedadilbaloch95/blog-management-system',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Chat & Messaging App',
    description: 'Real-time group chat interface with user presence and message history.',
    image: '/assets/project4.png',
    details: 'Built for fast communication with intuitive chat cards, responsive layout, and smooth interactions.',
    viewLink: '#',
    codeLink: 'https://github.com/ahmedadilbaloch95/chat-app',
    tags: ['PHP', 'JavaScript', 'Socket'],
    comingSoon: true,
  },
]

function Projects({ darkMode }) {
  const [activeProject, setActiveProject] = useState(null)

  const theme = darkMode
    ? {
        title: 'text-white',
        subtitle: 'text-gray-300',
        card: 'bg-white/5 border border-white/10',
        modal: 'bg-slate-950',
      }
    : {
        title: 'text-gray-900',
        subtitle: 'text-gray-600',
        card: 'bg-white shadow-sm border border-gray-200',
        modal: 'bg-white',
      }

  return (
    <section
      id='projects'
      className={`relative py-20 ${
        darkMode
          ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900'
          : 'bg-linear-to-br from-gray-50 to-blue-50'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <span
            className={`inline-block text-sm font-semibold tracking-[0.4em] uppercase ${theme.subtitle}`}
          >
            Projects
          </span>
          <h2 className={`mt-6 text-4xl sm:text-5xl font-bold ${theme.title}`}>
            Recent work with live preview and GitHub code.
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 ${theme.subtitle}`}
          >
            Explore a selection of my recent projects.
          </p>
        </div>

        <div className='mt-14 grid gap-8 md:grid-cols-2'>
          {projects.map((project) => (
            <div
              key={project.title}
              className={`overflow-hidden rounded-3xl ${theme.card} transition-transform duration-300 hover:-translate-y-1`}
            >
              {/* Image */}
              <div className='relative'>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-72 w-full object-cover ${
                    project.comingSoon ? 'blur-sm' : ''
                  }`}
                />

                {/* Coming Soon Overlay */}
                {project.comingSoon && (
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='rounded-3xl bg-black/50 px-6 py-4 text-center backdrop-blur-sm'>
                      <p className='text-sm uppercase tracking-[0.35em] text-orange-300'>
                        Coming soon
                      </p>
                      <h3 className='mt-2 text-2xl font-semibold text-white'>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-orange-500'>
                  {project.title}
                </h3>

                <p className={`mt-4 text-base leading-7 ${theme.subtitle}`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className='mt-5 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='rounded-full border border-orange-500 px-3 py-1 text-sm text-orange-500'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className='mt-8 flex flex-wrap gap-3'>
                  <button
                    type='button'
                    onClick={() => !project.comingSoon && setActiveProject(project)}
                    disabled={project.comingSoon}
                    className={`rounded-full px-5 py-3 text-sm font-semibold text-white transition ${
                      project.comingSoon
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-orange-500 hover:bg-orange-600'
                    }`}
                  >
                    View Project
                  </button>

                  <a
                    href={project.codeLink}
                    target='_blank'
                    rel='noreferrer'
                    className='rounded-full border border-orange-500 px-5 py-3 text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white'
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4'>
          <div
            className={`w-full max-w-4xl rounded-4xl ${theme.modal} p-6 shadow-2xl`}
          >
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h3 className='text-3xl font-bold text-white'>
                  {activeProject.title}
                </h3>
                <p className='mt-3 max-w-2xl text-sm leading-7 text-gray-300'>
                  {activeProject.details}
                </p>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className='rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20'
              >
                Close
              </button>
            </div>

            <div className='mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]'>
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className='h-96 w-full rounded-4xl object-cover'
              />

              <div className='flex flex-col justify-between rounded-4xl bg-black/30 p-6'>
                <div>
                  <h4 className='text-xl font-semibold text-orange-400'>
                    Project Details
                  </h4>
                  <p className='mt-4 text-sm leading-7 text-gray-200'>
                    {activeProject.description}
                  </p>
                </div>

                <div className='mt-6 flex flex-wrap gap-3'>
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className='rounded-full bg-white/10 px-4 py-2 text-sm text-white'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={activeProject.codeLink}
                  target='_blank'
                  rel='noreferrer'
                  className='mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600'
                >
                  View GitHub Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects