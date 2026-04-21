import React, { useState, useEffect } from 'react'

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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeProject])

  const theme = darkMode
    ? {
        title: 'text-white',
        subtitle: 'text-gray-300',
        card: 'bg-white/5 border border-white/10',
        modal: 'bg-[#0d182e]', // Darker shade for modal
        modalText: 'text-white',
        modalDesc: 'text-gray-300',
        modalTag: 'bg-white/10 text-white',
      }
    : {
        title: 'text-gray-900',
        subtitle: 'text-gray-600',
        card: 'bg-white shadow-lg border border-gray-200',
        modal: 'bg-white',
        modalText: 'text-gray-900',
        modalDesc: 'text-gray-600',
        modalTag: 'bg-gray-100 text-gray-800',
      }

  return (
    <section
      id='projects'
      className={`relative py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
    >
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center'>
          <span
            className={`inline-block text-sm font-semibold tracking-[0.4em] uppercase ${theme.subtitle}`}
          >
            Projects
          </span>
          <h2 className={`mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold ${theme.title}`}>
            Recent work with live preview and GitHub code.
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 ${theme.subtitle}`}
          >
            Explore a selection of my recent projects.
          </p>
        </div>

        {/* Grid */}
        <div className='mt-14 grid gap-8 md:grid-cols-2'>
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group overflow-hidden rounded-[2rem] ${theme.card} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Image */}
              <div className='relative overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    project.comingSoon ? 'blur-sm grayscale' : ''
                  }`}
                />

                {/* Coming Soon Overlay */}
                {project.comingSoon && (
                  <div className='absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]'>
                    <div className='rounded-2xl bg-black/60 px-8 py-4 text-center border border-white/10 shadow-xl'>
                      <p className='text-xs uppercase tracking-[0.35em] text-orange-400 font-bold'>
                        Coming soon
                      </p>
                      <h3 className='mt-1 text-2xl font-semibold text-white'>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='p-6 sm:p-8'>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-orange-500 transition-colors`}>
                  {project.title}
                </h3>

                <p className={`mt-3 text-base leading-7 ${theme.subtitle}`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className='mt-5 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs sm:text-sm font-medium border border-orange-500 text-orange-500`}
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
                    className={`rounded-full px-6 py-3 text-sm font-semibold text-white transition-all transform active:scale-95 ${
                      project.comingSoon
                        ? 'bg-gray-700 cursor-not-allowed opacity-50'
                        : 'bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30'
                    }`}
                  >
                    {project.comingSoon ? 'Unavailable' : 'View Project'}
                  </button>

                  <a
                    href={project.codeLink}
                    target='_blank'
                    rel='noreferrer'
                    className={`rounded-full px-6 py-3 text-sm font-semibold transition-all transform active:scale-95 ${
                        darkMode 
                        ? 'border border-white/20 text-white hover:bg-white hover:text-gray-900' 
                        : 'border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                    }`}
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
        <div 
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200'
          onClick={() => setActiveProject(null)} // Close on backdrop click
        >
          <div
            className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] ${theme.modal} shadow-2xl animate-in zoom-in-95 duration-200`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className='sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-200/10 bg-inherit rounded-t-[2rem]'>
              <h3 className={`text-2xl sm:text-3xl font-bold ${theme.modalText}`}>
                {activeProject.title}
              </h3>
              <button
                onClick={() => setActiveProject(null)}
                className={`rounded-full p-2 transition-colors ${darkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-gray-500'}`}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className='p-6 grid gap-8 lg:grid-cols-5'>
              {/* Image Side */}
              <div className='lg:col-span-3'>
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className='w-full h-auto rounded-2xl object-cover shadow-lg'
                />
                
                <div className='mt-6'>
                  <h4 className={`text-lg font-semibold ${theme.modalText}`}>Overview</h4>
                  <p className={`mt-2 leading-7 ${theme.modalDesc}`}>
                    {activeProject.details}
                  </p>
                </div>
              </div>

              {/* Details Side */}
              <div className='lg:col-span-2 flex flex-col gap-6'>
                <div className={`rounded-2xl p-6 border ${darkMode ? 'border-white/10 bg-white/5' : 'border-gray-100 bg-gray-50'}`}>
                  <h4 className={`text-xl font-semibold ${theme.modalText}`}>
                    Technologies
                  </h4>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-4 py-2 text-sm font-medium ${theme.modalTag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`rounded-2xl p-6 border ${darkMode ? 'border-white/10 bg-white/5' : 'border-gray-100 bg-gray-50'}`}>
                   <h4 className={`text-xl font-semibold ${theme.modalText}`}>
                    Quick Info
                  </h4>
                  <p className={`mt-2 text-sm ${theme.modalDesc}`}>
                    {activeProject.description}
                  </p>
                </div>

                <a
                  href={activeProject.codeLink}
                  target='_blank'
                  rel='noreferrer'
                  className='mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25'
                >
                  View GitHub Code
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
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