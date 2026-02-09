import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1, padding: '10rem 4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', fontWeight: 200, marginBottom: '2rem', letterSpacing: '-0.04em' }}>
                    Blog.
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#666', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Coming Soon
                </p>
                <div style={{ width: '40px', height: '1px', background: '#000', margin: '4rem auto' }}></div>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
