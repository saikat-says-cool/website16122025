import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer style={{
            padding: '6rem 4rem',
            borderTop: '1px solid #eaeaea',
            marginTop: 'auto',
            backgroundColor: '#fff'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '4rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                        <Logo size={20} />
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 400, margin: 0 }}>Artificialyze</h3>
                    </div>
                    <p style={{ color: '#111', lineHeight: 1.6, maxWidth: '300px' }}>
                        Specialized AI for humanity. Building the infrastructure for a smarter future.
                    </p>
                </div>

                <div>
                    <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: '#111' }}>Connect</h4>
                    <p style={{ marginBottom: '1rem' }}><a href="mailto:inquiries@artificialyze.com">inquiries@artificialyze.com</a></p>
                    <p style={{ color: '#000' }}>Kolkata, India</p>
                </div>

                <div>
                    <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: '#111' }}>Philosophy</h4>
                    <p style={{ color: '#000' }}>Vertical Excellence</p>
                    <p style={{ color: '#000' }}>Agentic Framework</p>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.8rem', color: '#333', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        &copy; {new Date().getFullYear()} Artificialyze. <br />
                        All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
