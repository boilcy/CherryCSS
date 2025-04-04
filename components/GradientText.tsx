import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
  showBorder?: boolean
}

export default function GradientText({
  children,
  className = '',
  colors = ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  }

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
      <style jsx scoped>
        {`
          .animated-gradient-text {
            position: relative;
            margin: 0 auto;
            display: flex;
            max-width: fit-content;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-radius: 1.25rem;
            /* 20px */
            font-weight: 500;
            backdrop-filter: blur(10px);
            transition: box-shadow 0.5s ease-out;
            overflow: hidden;
            cursor: pointer;
          }

          .gradient-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-size: 300% 100%;
            animation: gradient linear infinite;
            border-radius: inherit;
            z-index: 0;
            pointer-events: none;
          }

          .gradient-overlay::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            border-radius: inherit;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #060606;
            z-index: -1;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }
          }

          .text-content {
            display: inline-block;
            position: relative;
            z-index: 2;
            background-size: 300% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: gradient linear infinite;
          }
        `}
      </style>
    </div>
  )
}
