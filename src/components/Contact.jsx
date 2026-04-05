import React from 'react'

function Contact({ darkMode }) {
  const theme = darkMode
    ? {
        title: 'text-white',
        subtitle: 'text-gray-300',
        card: 'bg-white/5 border border-white/10',
        input: 'bg-white/5 border border-white/10 text-white placeholder:text-gray-400',
      }
    : {
        title: 'text-gray-900',
        subtitle: 'text-gray-600',
        card: 'bg-white shadow-sm border border-gray-200',
        input: 'bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400',
      }

  return (
    <section id='contact' className={`relative py-20 ${darkMode ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900' : 'bg-linear-to-br from-gray-50 to-blue-50'}`}>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <span className={`inline-block text-sm font-semibold tracking-[0.4em] uppercase ${theme.subtitle}`}>
            Contact
          </span>
          <h2 className={`mt-6 text-4xl sm:text-5xl font-bold ${theme.title}`}>
            Let’s work together.
          </h2>
          <p className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 ${theme.subtitle}`}>
            Have a project idea or want to collaborate? Send a message and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className='mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className={`rounded-4xl p-8 ${theme.card} shadow-xl`}> 
            <div className='space-y-6'>
              <div>
                <h3 className={`text-2xl font-semibold ${theme.title}`}>Contact Info</h3>
                <p className={`mt-3 text-base leading-7 ${theme.subtitle}`}>
                  Reach out directly or use the form to send your project details. I'm available for freelance, internships, and collaboration.
                </p>
              </div>

              <div className='space-y-4'>
                <div className='rounded-3xl border border-orange-500/20 bg-orange-500/10 p-5'>
                  <p className='text-sm uppercase tracking-[0.3em] text-orange-300'>Email</p>
                  <a href='mailto:ahmedadilbaloch95@gmail.com' className='mt-2 block text-lg font-semibold text-white'>ahmedadilbaloch95@gmail.com</a>
                </div>
                <div className='rounded-3xl border border-blue-500/20 bg-blue-500/10 p-5'>
                  <p className='text-sm uppercase tracking-[0.3em] text-blue-300'>Phone</p>
                  <p className='mt-2 text-lg font-semibold text-white'>+92 323 3703689</p>
                </div>
                <div className='rounded-3xl border border-green-500/20 bg-green-500/10 p-5'>
                  <p className='text-sm uppercase tracking-[0.3em] text-green-300'>Location</p>
                  <p className='mt-2 text-lg font-semibold text-white'>Sindh, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`rounded-4xl p-8 ${theme.card} shadow-xl`}>
            <form className='space-y-6'>
              <div>
                <label className={`block text-sm font-medium ${theme.subtitle}`} htmlFor='name'>Name</label>
                <input
                  id='name'
                  type='text'
                  placeholder='Your name'
                  className={`mt-3 w-full rounded-3xl px-5 py-4 outline-none transition ${theme.input}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${theme.subtitle}`} htmlFor='email'>Email</label>
                <input
                  id='email'
                  type='email'
                  placeholder='Your email'
                  className={`mt-3 w-full rounded-3xl px-5 py-4 outline-none transition ${theme.input}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${theme.subtitle}`} htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  rows='6'
                  placeholder='Brief description of your project or request'
                  className={`mt-3 w-full rounded-3xl px-5 py-4 outline-none transition ${theme.input}`}
                />
              </div>

              <button
                type='submit'
                className='inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact