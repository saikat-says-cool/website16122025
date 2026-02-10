import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer style={{
            padding: '6rem 4rem',
            borderTop: '1px solid #f0f0f0',
            marginTop: 'auto',
            backgroundColor: '#fff'
        }}>
            <div className="mobile-grid-1" style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
                gap: '4rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                        <Logo size={20} />
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 500, margin: 0, letterSpacing: '-0.02em' }}>Artificialyze</h3>
                    </div>
                    <p style={{ color: '#111', lineHeight: 1.6, maxWidth: '280px', fontSize: '0.95rem' }}>
                        Specialized AI for humanity. Building the infrastructure for a smarter future.
                    </p>
                </div>

                <div className="mobile-text-center">
                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', color: '#111' }}>Connect</h4>
                    <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}><a href="mailto:inquiries@artificialyze.com" className="hover-underline">inquiries@artificialyze.com</a></p>
                    <p style={{ color: '#000', fontSize: '0.9rem' }}>Kolkata, India</p>
                </div>

                <div className="mobile-text-center">
                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', color: '#111' }}>Exploration</h4>
                    <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}><a href="/research" className="hover-underline">Research & Dev</a></p>
                    <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}><a href="/press" className="hover-underline">Company Press</a></p>
                    <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}><a href="/governance" className="hover-underline">Governance</a></p>
                </div>

                <div className="mobile-text-center" style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.75rem', color: '#333', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.6 }}>
                        &copy; {new Date().getFullYear()} Artificialyze. <br />
                        Design & Logic authorized.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
