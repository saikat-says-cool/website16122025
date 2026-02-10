import React from 'react';

// 01. Vertical Excellence Chart (Home / Mission)
export const VerticalExcellenceChart = () => (
    <div style={{ width: '100%', height: '400px', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '2rem' }}>
        <div className="tech-grid" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3 }}></div>

        {/* Horizontal Baseline (General AI) */}
        <div style={{ position: 'absolute', bottom: '100px', left: '10%', right: '10%', height: '1px', background: '#ddd' }}>
            <span style={{ position: 'absolute', left: 0, bottom: '-2rem', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#888' }}>GENERAL AI SCOPE</span>
        </div>

        {/* The Peak (Vertical AI) */}
        <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none" style={{ position: 'relative', zIndex: 2 }}>
            <defs>
                <linearGradient id="peakGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#000', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.1 }} />
                </linearGradient>
            </defs>
            {/* The Actual Peak */}
            <path d="M 100 300 Q 500 300 500 50 L 500 300 Z" fill="url(#peakGradient)" opacity="0.05" />
            <path d="M 100 300 L 450 300 L 500 50 L 550 300 L 900 300"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
                strokeDasharray="4 4" />
            <circle cx="500" cy="50" r="4" fill="#000" />

            {/* Labels */}
            <text x="515" y="60" fontSize="12" letterSpacing="2" fontWeight="500">PRECISION PEAK</text>
            <text x="515" y="80" fontSize="10" letterSpacing="1" fill="#666">VERTICAL MASTERY</text>
        </svg>

        <div className="corner-mark top-left" style={{ margin: '1rem' }}></div>
        <div className="corner-mark bottom-right" style={{ margin: '1rem' }}></div>
    </div>
);

// 02. Alpha Reasoning Flow (DeepEx)
export const AlphaReasoningFlow = () => (
    <div style={{ width: '100%', padding: '4rem 2rem', position: 'relative', backgroundColor: '#fafafa', border: '1px solid #eee' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', margin: '0 auto', position: 'relative', height: '120px' }}>

            {/* Input Node */}
            <div style={{ textAlign: 'center', zIndex: 2 }}>
                <div style={{ width: '12px', height: '12px', background: '#000', margin: '0 auto 1rem auto' }}></div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#888' }}>INPUT</span>
            </div>

            {/* Branching SVG */}
            <svg width="60%" height="100%" viewBox="0 0 400 120" style={{ position: 'absolute', left: '20%', top: 0 }}>
                <path d="M 0 60 C 50 60, 50 10, 100 10" fill="none" stroke="#ddd" strokeWidth="1" />
                <path d="M 0 60 C 50 60, 50 60, 100 60" fill="none" stroke="#ddd" strokeWidth="1" />
                <path d="M 0 60 C 50 60, 50 110, 100 110" fill="none" stroke="#ddd" strokeWidth="1" />

                <circle cx="100" cy="10" r="3" fill="#000" />
                <circle cx="100" cy="60" r="3" fill="#000" />
                <circle cx="100" cy="110" r="3" fill="#000" />

                <path d="M 100 10 C 200 10, 200 60, 300 60" fill="none" stroke="#000" strokeWidth="1" />
                <path d="M 100 60 C 200 60, 200 60, 300 60" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M 100 110 C 200 110, 200 60, 300 60" fill="none" stroke="#000" strokeWidth="1" />
            </svg>

            {/* Logical Units */}
            <div style={{ position: 'absolute', left: '42%', display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 2 }}>
                <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', background: '#fff', padding: '2px 8px', border: '1px solid #eee' }}>BRANCH_A</span>
                <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', background: '#fff', padding: '2px 8px', border: '1px solid #eee' }}>BRANCH_B</span>
                <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', background: '#fff', padding: '2px 8px', border: '1px solid #eee' }}>BRANCH_C</span>
            </div>

            {/* Verified Truth Node */}
            <div style={{ textAlign: 'center', zIndex: 2 }}>
                <div style={{ width: '16px', height: '16px', border: '1px solid #000', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '4px', height: '4px', background: '#000' }}></div>
                </div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#000', fontWeight: 600 }}>VERIFIED TRUTH</span>
            </div>

        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <span style={{ fontSize: '0.7rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.4em' }}>Inference Phase Collapse</span>
        </div>
    </div>
);

// 03. Agentic Symbiosis Loop (Identity)
export const AgenticSymbiosis = () => (
    <div style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <svg width="240" height="240" viewBox="0 0 240 240">
            {/* The Loop */}
            <circle cx="120" cy="120" r="80" fill="none" stroke="#eee" strokeWidth="1" strokeDasharray="4 4" />

            {/* Nodes */}
            <g transform="translate(120, 40)">
                <rect x="-10" y="-10" width="20" height="20" fill="#fff" stroke="#000" strokeWidth="1" />
                <text y="30" textAnchor="middle" fontSize="9" letterSpacing="1">HUMAN INTENT</text>
            </g>

            <g transform="translate(200, 120)">
                <rect x="-10" y="-10" width="20" height="20" fill="#fff" stroke="#000" strokeWidth="1" />
                <text x="25" y="5" fontSize="9" letterSpacing="1">AGENTIC PLANNING</text>
            </g>

            <g transform="translate(120, 200)">
                <rect x="-10" y="-10" width="20" height="20" fill="#000" stroke="#000" strokeWidth="1" />
                <text y="25" textAnchor="middle" fontSize="9" letterSpacing="1" fontWeight="600">VERTICAL EXECUTION</text>
            </g>

            <g transform="translate(40, 120)">
                <rect x="-10" y="-10" width="20" height="20" fill="#fff" stroke="#000" strokeWidth="1" />
                <text x="-85" y="5" fontSize="9" letterSpacing="1">CAPABILITY DILATION</text>
            </g>

            {/* Transition Arrows Placeholder */}
            <path d="M 120 40 A 80 80 0 0 1 200 120" fill="none" stroke="#000" strokeWidth="1" />
            <path d="M 200 120 A 80 80 0 0 1 120 200" fill="none" stroke="#000" strokeWidth="1" />
            <path d="M 120 200 A 80 80 0 0 1 40 120" fill="none" stroke="#000" strokeWidth="1" />
            <path d="M 40 120 A 80 80 0 0 1 120 40" fill="none" stroke="#000" strokeWidth="1" />
        </svg>
    </div>
);
