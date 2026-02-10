import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const navLinks = [
        { name: 'Identity', path: '/identity' },
        { name: 'Mission', path: '/mission' },
        { name: 'DeepEx', path: '/deepex' },
        { name: 'R&D', path: '/research' },
        { name: 'Governance', path: '/governance' },
        { name: 'Press', path: '/press' },
        { name: 'Blog', path: '/blog' }
    ];

    return (
        <>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 2.5rem',
                borderBottom: '1px solid #f0f0f0',
                backgroundColor: '#fff',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', fontWeight: 500, letterSpacing: '-0.04em' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <Logo size={22} />
                        <span>Artificialyze</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} className="hover-underline" style={{
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontWeight: 400
                                }}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`sidebar-toggle ${isSidebarOpen ? 'open' : ''}`}
                    onClick={toggleSidebar}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>

            {/* Sidebar Overlay */}
            <div
                className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`}
                onClick={toggleSidebar}
            ></div>

            {/* Mobile Sidebar */}
            <aside className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div style={{ marginBottom: '4rem' }}>
                    <Logo size={32} />
                </div>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={toggleSidebar}
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 300,
                                        color: '#000',
                                        display: 'block',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <a href="https://x.com/Artificialyze" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#000' }}>Twitter</a>
                        <a href="https://www.instagram.com/artificialyze" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#000' }}>Instagram</a>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                        Specialized Excellence
                    </p>
                </div>
            </aside>
        </>
    );
};

export default Header;
