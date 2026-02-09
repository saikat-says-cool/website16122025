import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Governance = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1, padding: '6rem 1.5rem' }}>

                <section className="reveal" style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '8rem', textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.6em', marginBottom: '2rem', color: '#666' }}>The Rule of Law</span>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 300, letterSpacing: '-0.04em', color: '#000', marginBottom: '3rem' }}>Governing Intelligence.</h1>
                    <p style={{ fontSize: '1.4rem', color: '#333', maxWidth: '800px', margin: '0 auto', lineHeight: 1.5, fontWeight: 300 }}>
                        In an age of unchecked digital expansion, Artificialyze stands for purposeful constraint. We believe that powerful technology requires even more powerful governance.
                    </p>
                </section>

                <div className="reveal" style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    border: '1px solid #f0f0f0',
                    padding: '8rem 6rem',
                    backgroundColor: '#fff',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.03)',
                    position: 'relative'
                }}>
                    {/* Watermark/Stamp effect */}
                    <div style={{
                        position: 'absolute',
                        top: '4rem',
                        right: '4rem',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5em',
                        color: '#eee',
                        border: '1px solid #eee',
                        padding: '1rem',
                        transform: 'rotate(15deg)'
                    }}>
                        Official Charter
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '1.5rem', color: '#333' }}>Supreme Document</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 300, letterSpacing: '-0.02em', margin: 0, color: '#000' }}>The Charter</h2>
                        <div style={{ width: '80px', height: '1px', background: '#000', margin: '3rem auto' }}></div>
                    </div>

                    <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginBottom: '8rem' }}>
                        <div>
                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: '#000' }}>Preamble</h4>
                            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', color: '#111' }}>
                                The Artificialyze Charter is not merely a statement of intent; it is the supreme governing document of our organization. It outlines the ethical, technical, and operational boundaries within which all our projects must operate.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#111' }}>
                                We recognize that the development of specialized AI carries immense responsibility. Therefore, we have chosen a path of purposeful evolution, governed by principles that prioritize human utility and truth over commercial speed.
                            </p>
                        </div>
                        <div style={{ borderLeft: '1px solid #f0f0f0', paddingLeft: '4rem' }} className="mobile-padding-tight">
                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: '#000' }}>The Mandate</h4>
                            <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', color: '#111' }}>
                                Every sub-organization, research lab, and product team within the Artificialyze umbrella remains strictly subordinate to this mission of specialized excellence.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#111' }}>
                                We reject feature bloat and the pursuit of mass-market entertainment. Our focus is the engineering of deterministic cognitive infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* Articles Section */}
                    <div style={{ marginBottom: '8rem' }}>
                        {[
                            {
                                title: 'Article I: The Primacy of Focus',
                                desc: 'Artificialyze will never develop generalized, "all-purpose" tools. Every project must have a clearly defined vertical domain. Broadening the scope of a specialized model to the point of compromising its domain mastery is strictly prohibited.'
                            },
                            {
                                title: 'Article II: Data Sovereignty and Integrity',
                                desc: 'We hold that quality of data is superior to quantity. All data sets used for training must be vetted for high domain-specific accuracy. We will not use "scrape-everything" methodologies that introduce noise or probabilistic bias into our core reasoning engines.'
                            },
                            {
                                title: 'Article III: Adversarial Governance',
                                desc: 'All tools, particularly the DeepEx reasoning engine, must undergo continuous adversarial testing. Our goal is the relentless minimization of hallucinations. A model that cannot prove its reasoning through a deterministic chain shall not be released.'
                            },
                            {
                                title: 'Article IV: Human-Agentic Symbiosis',
                                desc: 'Our AI is designed to augment, not replace. Every agentic workflow must be built with clear human oversight capabilities. The objective is to extend human cognitive reach, enabling experts to achieve more, faster, and with higher precision.'
                            }
                        ].map((article, i) => (
                            <div key={i} style={{ borderTop: '1px solid #f0f0f0', padding: '4rem 0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '1.5rem', color: '#000' }}>{article.title}</h3>
                                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333', maxWidth: '800px' }}>
                                    {article.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{ backgroundColor: '#fafafa', padding: '6rem 4rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#333', marginBottom: '3rem' }}>The Promise</h2>
                        <p style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.2, color: '#000' }}>
                            We do not build chatbots. <br />
                            We build the <span style={{ textDecoration: 'underline' }}>specialized infrastructure</span> for a smarter future.
                        </p>
                    </div>

                    <div style={{ marginTop: '8rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f0f0f0', paddingTop: '3rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#111' }} className="mobile-grid-1 mobile-text-center">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ opacity: 0.5 }}>Authorized by:</span> <br />
                            <span style={{ fontWeight: 500 }}>The Artificialyze Directorate</span>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ opacity: 0.5 }}>Effective Date:</span> <br />
                            <span style={{ fontWeight: 500 }}>January 12, 2026</span>
                        </div>
                        <div>
                            <span style={{ opacity: 0.5 }}>Version:</span> <br />
                            <span style={{ fontWeight: 500 }}>V.1.04 Specialized</span>
                        </div>
                    </div>

                </div>

                <section style={{ maxWidth: '800px', margin: '10rem auto 4rem auto', textAlign: 'center' }} className="reveal">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '2rem' }}>Audit & Accountability.</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#444', marginBottom: '3rem' }}>
                        Compliance with the Charter is mandatory and non-negotiable. We maintain internal and external audit trails for all our agentic workflows to ensure that the standards of tangible utility and deterministic logic are upheld at every level of the organization.
                    </p>
                    <div style={{ width: '40px', height: '1px', background: '#000', margin: '0 auto' }}></div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Governance;
