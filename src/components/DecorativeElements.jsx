import React from 'react';

const GridBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {/* Perspective Grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), 
                                     linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                    transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(0)',
                    transformOrigin: 'top center'
                }}
            ></div>

            {/* Animated Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
    );
};

export const GlobeElement = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_120s_linear_infinite]">
                <defs>
                    <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                {/* Latitudes */}
                {[...Array(8)].map((_, i) => (
                    <ellipse
                        key={`lat-${i}`}
                        cx="50" cy="50" rx="48" ry={10 + i * 10}
                        fill="none" stroke="url(#globeGrad)" strokeWidth="0.1"
                    />
                ))}
                {/* Longitudes */}
                {[...Array(8)].map((_, i) => (
                    <ellipse
                        key={`long-${i}`}
                        cx="50" cy="50" rx={10 + i * 10} ry="48"
                        fill="none" stroke="url(#globeGrad)" strokeWidth="0.1"
                    />
                ))}
            </svg>
        </div>
    );
};

export const SectionGrid = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), 
                                     linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            ></div>
        </div>
    );
};

export const GridFloor = () => {
    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * 0.2);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), 
                                     linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                    maskImage: 'linear-gradient(to top, black, transparent 60%)',
                    transform: `perspective(1000px) rotateX(70deg) translateY(${offset}px)`,
                    transformOrigin: 'center center',
                    width: '200%',
                    left: '-50%',
                    height: '200%',
                    top: '20%'
                }}
            ></div>
        </div>
    );
};

export default GridBackground;
