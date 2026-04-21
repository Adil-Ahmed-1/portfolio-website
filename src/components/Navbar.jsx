import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Handle scroll for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home', icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )},
        { name: 'About', href: '#about', icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        )},
        { name: 'Projects', href: '#projects', icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        )},
        { name: 'Contact', href: '#contact', icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )},
    ];

    const lightColor = {
        navBg: 'bg-white/80',
        navBgScrolled: 'bg-white/95',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-600',
        textHover: 'hover:text-orange-500',
        textActive: 'text-orange-600',
        indicator: 'bg-orange-500',
        buttonBg: 'bg-orange-100 hover:bg-orange-200',
        mobileBg: 'bg-white/95',
        mobileItemBg: 'bg-orange-50',
        mobileItemHoverBg: 'hover:bg-orange-100',
        border: 'border-gray-200',
        shadow: 'shadow-orange-100/50',
    };

    const darkColor = {
        navBg: 'bg-gray-900/80',
        navBgScrolled: 'bg-gray-900/95',
        textPrimary: 'text-gray-100',
        textSecondary: 'text-gray-400',
        textHover: 'hover:text-blue-400',
        textActive: 'text-blue-400',
        indicator: 'bg-blue-500',
        buttonBg: 'bg-gray-700 hover:bg-gray-600',
        mobileBg: 'bg-gray-900/95',
        mobileItemBg: 'bg-blue-500/10',
        mobileItemHoverBg: 'hover:bg-blue-500/20',
        border: 'border-gray-700',
        shadow: 'shadow-gray-900/50',
    };

    const colors = darkMode ? darkColor : lightColor;
    const navBgClass = isScrolled ? colors.navBgScrolled : colors.navBg;

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };

    // Mobile menu variants
    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: 'easeIn',
            },
        },
    };

    const mobileItemVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };

    // Overlay variants
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 mt-3 sm:mt-4">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`flex items-center justify-between ${navBgClass} rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 shadow-lg backdrop-blur-xl border ${colors.border} ${colors.shadow} max-w-5xl mx-auto w-full`}
                >
                    {/* Logo */}
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 shrink-0"
                    >
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm sm:text-base">Adil</span>
                        </div>
                        <span className={`text-lg sm:text-xl font-bold ${colors.textPrimary} hidden sm:inline`}>
                            Adil
                        </span>
                    </motion.a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => handleNavClick(item.name)}
                                className="relative px-4 py-2"
                            >
                                <motion.span
                                    className={`font-medium text-sm transition-colors duration-300 ${
                                        activeSection === item.name.toLowerCase()
                                            ? colors.textActive
                                            : `${colors.textSecondary} ${colors.textHover}`
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.span>
                                {activeSection === item.name.toLowerCase() && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full ${colors.indicator}`}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={toggleDarkMode}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-2 sm:p-2.5 rounded-xl sm:rounded-full transition-colors duration-300 ${colors.buttonBg}`}
                            aria-label="Toggle dark mode"
                        >
                            <AnimatePresence mode="wait">
                                {darkMode ? (
                                    <motion.svg
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                            clipRule="evenodd"
                                        />
                                    </motion.svg>
                                ) : (
                                    <motion.svg
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </motion.svg>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`lg:hidden p-2 sm:p-2.5 rounded-xl sm:rounded-full transition-colors duration-300 ${colors.buttonBg}`}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.svg
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`w-5 h-5 ${colors.textPrimary}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </motion.svg>
                                ) : (
                                    <motion.svg
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`w-5 h-5 ${colors.textPrimary}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </motion.svg>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={`fixed top-20 left-3 right-3 sm:left-4 sm:right-4 z-40 ${colors.mobileBg} rounded-2xl shadow-2xl backdrop-blur-xl border ${colors.border} overflow-hidden lg:hidden`}
                        >
                            <div className="p-4 sm:p-6">
                                {/* Menu Header */}
                                <div className={`flex items-center justify-between pb-4 mb-4 border-b ${colors.border}`}>
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center`}>
                                            <span className="text-white font-bold">A</span>
                                        </div>
                                        <div>
                                            <p className={`font-bold ${colors.textPrimary}`}>Adil</p>
                                            <p className={`text-xs ${colors.textSecondary}`}>Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation Items */}
                                <motion.div
                                    className="flex flex-col space-y-1 sm:space-y-2"
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.08,
                                            },
                                        },
                                    }}
                                >
                                    {navItems.map((item) => (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => handleNavClick(item.name)}
                                            variants={mobileItemVariants}
                                            whileTap={{ scale: 0.98 }}
                                            className={`flex items-center space-x-4 px-4 py-3.5 sm:py-4 rounded-xl transition-all duration-300 ${
                                                activeSection === item.name.toLowerCase()
                                                    ? `${colors.textActive} ${colors.mobileItemBg}`
                                                    : `${colors.textSecondary} ${colors.mobileItemHoverBg}`
                                            }`}
                                        >
                                            <span className={activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondary}>
                                                {item.icon}
                                            </span>
                                            <span className="font-medium text-base sm:text-lg">{item.name}</span>
                                            {activeSection === item.name.toLowerCase() && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className={`ml-auto w-2 h-2 rounded-full ${colors.indicator}`}
                                                />
                                            )}
                                        </motion.a>
                                    ))}
                                </motion.div>

                                {/* Mobile CTA Button */}
                                <motion.div
                                    variants={mobileItemVariants}
                                    className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
                                >
                                    <a
                                        href="#contact"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full text-center py-3.5 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow duration-300"
                                    >
                                        Let's Talk
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;