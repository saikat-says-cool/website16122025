import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';

const Nav = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tabs = [
        { id: '', label: 'Overview' },
        { id: 'blueprint', label: 'The System' },
        { id: 'economics', label: 'Economics' },
        { id: 'casestudy', label: 'Proof' },
        { id: 'manifesto', label: 'Manifesto' }
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#F5F4F0] border-b border-gray-300 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
            <div className="flex items-center gap-2 cursor-pointer z-50" onClick={() => { navigate('/'); closeMenu(); }}>
                <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-tech font-bold text-lg">A</div>
                <span className="font-hand text-2xl font-bold tracking-tight">Artificialyze</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8">
                {tabs.map(tab => (
                    <NavLink
                        key={tab.id}
                        to={`/${tab.id}`}
                        className={({ isActive }) =>
                            `font-tech text-sm uppercase tracking-wider nav-link ${isActive ? 'font-bold active' : 'text-gray-600'}`
                        }
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => { navigate('/booking'); closeMenu(); }}
                    className="btn-primary text-xs md:text-sm hidden sm:block"
                >
                    Contact Strategy
                </button>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden z-50 p-2 text-black hover:bg-gray-200 transition-colors"
                >
                    {isMenuOpen ? <X size={28} /> : <List size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#F5F4F0] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                {tabs.map(tab => (
                    <NavLink
                        key={tab.id}
                        to={`/${tab.id}`}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `font-hand text-4xl tracking-tight ${isActive ? 'text-[#2B4C7E] font-bold underline decoration-1 underline-offset-8' : 'text-gray-800'}`
                        }
                    >
                        {tab.label}
                    </NavLink>
                ))}
                <button
                    onClick={() => { navigate('/booking'); closeMenu(); }}
                    className="btn-primary mt-8 sm:hidden"
                >
                    Contact Strategy
                </button>

                <div className="absolute bottom-12 flex flex-col items-center text-gray-400 font-tech text-xs">
                    <span>Engineering Growth for Cybersecurity</span>
                    <span className="mt-2 tracking-widest uppercase">Artificialyze.com</span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
