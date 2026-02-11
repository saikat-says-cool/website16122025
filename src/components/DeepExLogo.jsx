import React from 'react';

const DeepExLogo = ({ size = 48, color = "currentColor", style }) => {
    const height = typeof size === 'number' ? size * 0.6 : size;
    const rawId = React.useId ? React.useId() : React.useMemo(() => `deepex-${Math.random().toString(36).substr(2, 9)}`, []);
    const uniqueId = rawId.replace(/:/g, ''); // Sanitize ID for SVG url refs

    // Geometry parameters
    const strokeWidth = 2.5;
    const gapWidth = strokeWidth * 2.2; // Width of the "cut" for the interlock

    return (
        <svg
            width={size}
            height={height}
            viewBox="0 0 50 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={style}
        >
            <defs>
                {/* Mask for Left Diamond: Hides the segment where Right goes OVER Left (Bottom Crossing) */}
                <mask id={`${uniqueId}-maskLeft`}>
                    <rect x="0" y="0" width="50" height="32" fill="white" />
                    {/* Cut out the shape of the Right Diamond's bottom-left segment */}
                    <path
                        d="M34 30 L22 16"
                        stroke="black"
                        strokeWidth={gapWidth}
                        strokeLinecap="square"
                    />
                </mask>

                {/* Mask for Right Diamond: Hides the segment where Left goes OVER Right (Top Crossing) */}
                <mask id={`${uniqueId}-maskRight`}>
                    <rect x="0" y="0" width="50" height="32" fill="white" />
                    {/* Cut out the shape of the Left Diamond's top-right segment */}
                    <path
                        d="M16 2 L28 16"
                        stroke="black"
                        strokeWidth={gapWidth}
                        strokeLinecap="square"
                    />
                </mask>
            </defs>

            {/* Left Diamond */}
            <path
                d="M16 2 L28 16 L16 30 L4 16 Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="square"
                mask={`url(#${uniqueId}-maskLeft)`}
            />

            {/* Right Diamond */}
            <path
                d="M34 2 L46 16 L34 30 L22 16 Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="square"
                mask={`url(#${uniqueId}-maskRight)`}
            />
        </svg>
    );
};

export default DeepExLogo;
