import React from 'react';

const Logo = ({ size = 32, color = "black" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
            <path
                d="M16 4L26 26H6L16 4Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <rect x="14" y="16" width="4" height="1" fill={color} />
        </svg>
    );
};

export default Logo;
