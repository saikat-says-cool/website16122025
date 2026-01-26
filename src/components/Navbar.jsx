import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

    const navLinks = [
        { name: 'The Workflow', path: '/workflow' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Professional Services', path: '/professional-services' },
        { name: 'Enterprise Tech', path: '/enterprise-technology' },
        { name: 'Industrial', path: '/industrial' },
        { name: 'Financial Ops', path: '/financial-operations' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled || mobileMenuOpen ? 'bg-black/90 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-xl font-light tracking-tighter flex items-center gap-3 relative z-50 group">
                    <Logo className="w-9 h-9 transition-transform duration-500 group-hover:scale-110" />
                    <span className="group-hover:text-emerald-500 transition-colors">ARTIFICIALYZE</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-8 text-[10px] font-medium text-zinc-400 uppercase tracking-widest items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-white transition-colors ${location.pathname === link.path ? 'text-emerald-500' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4 relative z-50">
                    <Link to="/consultation" className="hidden sm:block bg-white text-black px-4 py-2 text-[10px] font-light uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
                        Consultation
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 lg:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-2xl font-light tracking-widest uppercase hover:text-emerald-500 transition-colors ${location.pathname === link.path ? 'text-emerald-500' : 'text-zinc-500'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/consultation"
                        className="mt-4 bg-emerald-600 text-white px-8 py-4 text-sm font-light uppercase tracking-widest hover:bg-emerald-500 transition-all w-full max-w-xs"
                    >
                        Consultation
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
