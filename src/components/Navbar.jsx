import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Workflow', path: '/workflow' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Intelligence', path: '/blog' },
        { name: 'Professional', path: '/professional-services' },
        { name: 'Tech', path: '/enterprise-technology' },
        { name: 'Industrial', path: '/industrial' },
        { name: 'Finance', path: '/financial-operations' },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 border-b ${scrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-xl border-zinc-800 py-4 shadow-2xl' : 'bg-transparent border-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[110]">
                <Link to="/" className="text-xl font-light tracking-tighter flex items-center gap-3 group">
                    <Logo className="w-9 h-9 transition-transform duration-500 group-hover:scale-110" />
                    <span className="group-hover:text-emerald-500 transition-colors">ARTIFICIALYZE</span>
                </Link>

                {/* Desktop Links - Hidden below XL */}
                <div className="hidden xl:flex gap-4 2xl:gap-8 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-white transition-all whitespace-nowrap ${location.pathname === link.path ? 'text-emerald-500' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    {/* Consultation Button - Hidden below XL to match Hamburger logic */}
                    <Link to="/consultation" className="hidden xl:block bg-zinc-100 text-black px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all rounded-sm">
                        Consultation
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden text-white p-2 hover:bg-zinc-900 rounded-full transition-colors relative z-[160]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={28} className="text-emerald-500" /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Total Screen Coverage */}
            <div
                className={`fixed inset-0 bg-black z-[1000] transition-all duration-300 xl:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Internal Header for the Overlay to prevent background bleed */}
                <div className="flex justify-between items-center px-6 py-8 bg-black">
                    <div className="flex items-center gap-3">
                        <Logo className="w-9 h-9" />
                        <span className="text-xl font-light tracking-tighter uppercase">ARTIFICIALYZE</span>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-emerald-500 p-2"
                        aria-label="Close Menu"
                    >
                        <X size={32} />
                    </button>
                </div>

                {/* Explicit Scrollable Container for Links */}
                <div className="h-[calc(100vh-120px)] overflow-y-auto px-10 pb-20 bg-black">
                    <div className="flex flex-col items-center gap-10 pt-12">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-2xl font-light tracking-[0.2em] uppercase transition-all duration-300 hover:text-emerald-500 ${location.pathname === link.path ? 'text-emerald-500 font-normal underline underline-offset-8 decoration-emerald-500/20' : 'text-zinc-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="w-12 h-px bg-zinc-800 my-4"></div>

                        <Link
                            to="/consultation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-emerald-600 text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.3em] hover:bg-emerald-500 transition-all w-full max-w-[300px] text-center shadow-lg shadow-emerald-900/20"
                        >
                            Schedule Briefing
                        </Link>

                        <div className="flex flex-col items-center gap-2 pt-12 opacity-30">
                            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Artificialyze Inc.</p>
                            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-light italic text-center">Engineered Acquisition Systems</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
