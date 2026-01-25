import React from 'react';

const Logo = ({ className = "w-8 h-8" }) => {
    return (
        <div className={`relative ${className}`}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Outer Geometric 'A' frame */}
                <path
                    d="M50 10L15 85H30L50 40L70 85H85L50 10Z"
                    fill="#10b981"
                    className="opacity-20"
                />
                <path
                    d="M50 15L20 80H32L50 42L68 80H80L50 15Z"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />

                {/* Central Bolt/Signal element */}
                <path
                    d="M55 35L40 55H50L45 75L65 50H55L60 35H55Z"
                    fill="#10b981"
                    className="animate-pulse"
                />

                {/* Circuit points */}
                <circle cx="20" cy="80" r="3" fill="#10b981" />
                <circle cx="80" cy="80" r="3" fill="#10b981" />
                <circle cx="50" cy="15" r="3" fill="#10b981" />

                {/* Connecting lines */}
                <path d="M20 80L35 80" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M80 80L65 80" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
        </div>
    );
};

export default Logo;
