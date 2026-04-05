import React, { useState } from 'react';
import { motion, scale } from 'framer-motion';

const Navbar = ({darkMode, toggleDarkMode}) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];  

    const lightColor ={
        navBg: 'bg-gradient-to-br from-orange-200 to-white',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        textHover: 'text-orange-500',
        textActive: 'text-orange-600',
        indicator: 'bg-orange-500 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    };
        const darkColor ={
        navBg: 'bg-gradient-to-br from-gray-900 to-gray-800',
        textPrimary: 'text-gray-300',
        textSecondary: 'text-gray-500',
        textHover: 'text-blue-400',
        textActive: 'text-blue-500',
        indicator: 'bg-orange-500 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    };

    const colors = darkMode ? darkColor : lightColor;

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };

  return (
      <div className='flex justify-center w-full fixed z-50 mt-4' >
        <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg} rounded-full px-6 py-3 shadow-lg backdrop-blur-md bg-opacity-30 w-11/12 md:w-auto`}>
            <div className='flex items-center justify-between w-full space-x-6 lg:space-x-8'>
                {/* Logo or Brand Name */}
                <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    className='flex items-center space-x-2'>
                        <span className={`text-xl font-bold ${colors.textPrimary}`}>
                            Adil<span className='text-orange-500'>

                            </span>
                        </span>
                </motion.a>
                {/* Navigation Links */}
                <div className='hidden lg:flex items-center space-x-6'>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => handleNavClick(item.name)}
                            className='relative'
                            >
                                <motion.span
                                className={`font-medium transition-colors duration-300 ${
                                    activeSection === item.name.toLowerCase() ? colors.textActive : `${colors.textSecondary} hover:${colors.textHover}`
                                }`}
                                whileHover={{ scale: 1.05 }}
                                >
                                    {item.name}
                                </motion.span>
                        </a>
                        ))}

                </div>

                {/* Dark Mode Toggle & Mobile Menu */}
                <div className='flex items-center space-x-4'>
                    {/* Dark Mode Toggle */}
                    <motion.button
                        onClick={toggleDarkMode}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 rounded-full transition-colors duration-300 ${
                            darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-orange-100 hover:bg-orange-200'
                        }`}
                    >
                        {darkMode ? (
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
                            darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-orange-100 hover:bg-orange-200'
                        }`}
                    >
                        <svg className={`w-5 h-5 ${colors.textPrimary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`lg:hidden absolute top-full left-0 right-0 mt-4 ${colors.navBg} rounded-2xl shadow-xl backdrop-blur-md bg-opacity-95 border border-gray-200 dark:border-gray-700`}
                    >
                        <div className='flex flex-col space-y-4 p-6'>
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.name)}
                                    className={`text-center py-2 px-4 rounded-lg transition-colors duration-300 ${
                                        activeSection === item.name.toLowerCase()
                                            ? colors.textActive + ' bg-orange-100 dark:bg-orange-900/30'
                                            : colors.textSecondary + ' hover:' + colors.textHover + ' hover:bg-orange-50 dark:hover:bg-orange-900/20'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
      </div>
  );
};

export default Navbar;