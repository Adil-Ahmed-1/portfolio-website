import React, { useState } from 'react'

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle', 'submitting', 'success'

  const theme = darkMode
    ? {
        title: 'text-white',
        subtitle: 'text-gray-300',
        card: 'bg-white/5 border border-white/10',
        input: 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500',
        // Info Card Colors (Dark Mode)
        emailCard: 'border-orange-500/20 bg-orange-500/10',
        phoneCard: 'border-blue-500/20 bg-blue-500/10',
        locCard: 'border-green-500/20 bg-green-500/10',
        labelColor: 'text-orange-300/90',
        contentColor: 'text-white',
      }
    : {
        title: 'text-gray-900',
        subtitle: 'text-gray-600',
        card: 'bg-white shadow-xl border border-gray-100',
        input: 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500',
        // Info Card Colors (Light Mode - adjusted for contrast)
        emailCard: 'border-orange-100 bg-orange-50',
        phoneCard: 'border-blue-100 bg-blue-50',
        locCard: 'border-green-100 bg-green-50',
        labelColor: 'text-orange-700',
        contentColor: 'text-gray-900',
      }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section
      id='contact'
      className={`relative py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
    >
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center'>
          <span className={`inline-block text-sm font-semibold tracking-[0.4em] uppercase ${theme.subtitle}`}>
            Contact
          </span>
          <h2 className={`mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold ${theme.title}`}>
            Let’s work together.
          </h2>
          <p className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 ${theme.subtitle}`}>
            Have a project idea or want to collaborate? Send a message and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className='mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]'>
          
          {/* Left Column: Contact Info */}
          <div className={`rounded-[2rem] p-6 sm:p-8 ${theme.card}`}>
            <div className='space-y-8'>
              <div>
                <h3 className={`text-2xl font-bold ${theme.title}`}>Contact Info</h3>
                <p className={`mt-3 text-base leading-7 ${theme.subtitle}`}>
                  Reach out directly or use the form to send your project details. I'm available for freelance, internships, and collaboration.
                </p>
              </div>

              <div className='space-y-4'>
                {/* Email Card */}
                <div className={`rounded-3xl border p-5 transition hover:scale-[1.02] ${theme.emailCard}`}>
                  <p className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] ${theme.labelColor}`}>Email</p>
                  <a href='mailto:ahmedadilbaloch95@gmail.com' className={`mt-2 block text-lg font-semibold ${theme.contentColor} hover:underline`}>
                    ahmedadilbaloch95@gmail.com
                  </a>
                </div>

                {/* Phone Card */}
                <div className={`rounded-3xl border p-5 transition hover:scale-[1.02] ${theme.phoneCard}`}>
                  <p className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] ${theme.labelColor}`}>Phone</p>
                  <a href='tel:+923233703689' className={`mt-2 block text-lg font-semibold ${theme.contentColor} hover:underline`}>
                    +92 323 3703689
                  </a>
                </div>

                {/* Location Card */}
                <div className={`rounded-3xl border p-5 transition hover:scale-[1.02] ${theme.locCard}`}>
                  <p className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] ${theme.labelColor}`}>Location</p>
                  <p className={`mt-2 text-lg font-semibold ${theme.contentColor}`}>
                    Sindh, Pakistan
                  </p>
                </div>
              </div>

              {/* Social Links (Added) */}
              <div className='pt-4 border-t border-gray-200/10'>
                <p className={`text-sm font-semibold ${theme.subtitle}`}>Connect on Socials</p>
                <div className='mt-4 flex gap-4'>
                  {/* GitHub */}
                  <a href='https://github.com/ahmedadilbaloch95' target='_blank' rel='noreferrer' className={`p-3 rounded-full border transition-colors ${darkMode ? 'border-white/10 text-gray-300 hover:bg-white/10 hover:text-white' : 'border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-black'}`}>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                      <path fillRule='evenodd' d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' clipRule='evenodd' />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href='#' target='_blank' rel='noreferrer' className={`p-3 rounded-full border transition-colors ${darkMode ? 'border-white/10 text-gray-300 hover:bg-white/10 hover:text-white' : 'border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-blue-600'}`}>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={`rounded-[2rem] p-6 sm:p-8 ${theme.card}`}>
            {status === 'success' ? (
              <div className='flex h-full flex-col items-center justify-center py-12 text-center'>
                <div className='mb-4 rounded-full bg-green-100 p-4 text-green-500 dark:bg-green-500/20 dark:text-green-400'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold ${theme.title}`}>Message Sent!</h3>
                <p className={`mt-2 ${theme.subtitle}`}>
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className='mt-6 text-sm font-semibold text-orange-500 hover:text-orange-600'
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label className={`block text-sm font-medium ${theme.subtitle}`} htmlFor='name'>
                    Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    required
                    placeholder='Your name'
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-3 w-full rounded-3xl px-5 py-4 outline-none transition-all duration-300 ${theme.input}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${theme.subtitle}`} htmlFor='email'>
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    placeholder='Your email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-3 w-full rounded-3xl px-5 py-4 outline-none transition-all duration-300 ${theme.input}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${theme.subtitle}`} htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='6'
                    required
                    placeholder='Brief description of your project or request'
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-3 w-full rounded-3xl px-5 py-4 outline-none transition-all duration-300 ${theme.input}`}
                  />
                </div>

                <button
                  type='submit'
                  disabled={status === 'submitting'}
                  className={`inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed sm:w-auto`}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact