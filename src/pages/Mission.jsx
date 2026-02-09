import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Mission = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
            <Header />
            <main style={{ flex: 1 }}>

                <section className="reveal" style={{
                    padding: '10rem 2rem 8rem 2rem',
                    borderBottom: '1px solid #f0f0f0',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    <span style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5em', marginBottom: '3rem', color: '#666' }}>The Goal</span>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', fontWeight: 300, marginBottom: '4rem', letterSpacing: '-0.04em' }}>
                        Mission Statement.
                    </h1>
                    <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '2rem', lineHeight: 1.4, fontWeight: 300, color: '#000' }}>
                        "We make <span style={{ textDecoration: 'underline' }}>specialized AI tools</span> and agentic applications that help humanity across specialized fields."
                    </p>
                    <div style={{ marginTop: '6rem', maxWidth: '700px', margin: '6rem auto 0 auto' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#444' }}>
                            Our mission is not to reach "Singularity" or a distant sci-fi future. Our mission is grounded in the present: to solve the friction points in the world's most critical systems through the application of precise, agentic intelligence.
                        </p>
                    </div>
                </section>

                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #f0f0f0' }}>
                    {[
                        {
                            id: '01',
                            title: 'Vertical Specialization',
                            desc: 'General AI is an wide ocean with an inch of depth. We choose to build wells of knowledge. For high-stakes environments—scientific research, legal analysis, industrial optimization—shallow knowledge is dangerous. We obsess over the intricacies of each vertical, ensuring our AI doesn\'t just "talk" like an expert, but thinks and operates like one. This requires a different class of data and a more rigorous training philosophy.'
                        },
                        {
                            id: '02',
                            title: 'Agentic Framework',
                            desc: 'A chat box is a limited interface for intelligence. We believe the future is agentic. Our tools are not passive responders; they are proactive participants. They observe complex environments, plan multi-step solutions, and execute tasks with a degree of autonomy that empowers human experts. We are moving humanity from the age of "conversation with AI" to the age of "agency through AI."'
                        },
                        {
                            id: '03',
                            title: 'Deterministic Reasoning',
                            desc: 'Probability is the enemy of trust in critical systems. While mass-market models are optimized for creativity and "hallucination," our systems are optimized for deterministic logic. If an AI cannot provide a verifiable path to its conclusion, it fails our mission. We are building the vanguard of reasoning engines—systems where "how" it arrived at a solution is as important as the solution itself.'
                        }
                    ].map((item, i) => (
                        <div key={i} className="reveal nav-card" style={{
                            borderRight: i !== 2 ? '1px solid #f0f0f0' : 'none',
                            padding: '6rem 4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.4s ease'
                        }}>
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '4rem', display: 'block', color: '#111' }}>Mission Pillar {item.id}</span>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '3rem', lineHeight: 1.1 }}>{item.title}</h3>
                            <div style={{ width: '40px', height: '1px', background: '#000', marginBottom: '3rem' }}></div>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333', marginTop: 'auto' }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* New Section: The Humanitarian Metric */}
                <section style={{ padding: '10rem 4rem', backgroundColor: '#fff' }} className="mobile-padding-tight reveal">
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem' }} className="mobile-grid-1">
                        <div>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 300, marginBottom: '3rem', letterSpacing: '-0.04em' }}>The Humanitarian <br /> Metric.</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#111', marginBottom: '2rem' }}>
                                We measure our success not in shareholder value or user engagement, but in the "Dilation of Capability." How much more can a researcher achieve in a day because of our tools? What margin of error were we able to eliminate in a critical industrial process?
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'center' }}>
                            <div style={{ padding: '2rem', border: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Accuracy over Empathy</h4>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#444' }}>
                                    We do not build AI to "feel" human. We build it to be right. In our mission, factual correctness is the ultimate form of empathy for the end-user.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', border: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Trust through Transparency</h4>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#444' }}>
                                    We provide white-box insights into our black-box models. Trust is not a gift; it is earned through verifiable reasoning and consistent performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div style={{ borderTop: '1px solid #f0f0f0', padding: '8rem 2rem', textAlign: 'center', backgroundColor: '#fafafa' }}>
                    <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto', color: '#000', fontWeight: 300, lineHeight: 1.6 }}>
                        Artificialyze is the conduit through which advanced computation meets tangible human need. We turn complex cognitive tasks into streamlined, reliable, and agentic workflows.
                    </p>
                    <div style={{ marginTop: '4rem' }}>
                        <a href="/identity" className="hover-underline" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Learn about our Identity</a>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Mission;
