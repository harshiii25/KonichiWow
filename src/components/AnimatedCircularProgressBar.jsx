import { useEffect, useState } from "react"

function AnimatedCircularProgressBar({ 
  value = 0, 
  max = 100,
  size = 200,
  strokeWidth = 12,
  gaugePrimaryColor = "#EC265F",
  gaugeSecondaryColor = "rgba(0, 0, 0, 0.1)",
  className = ""
}) {
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    const duration = 1000
    const steps = 60
    const increment = (value - displayValue) / steps
    let current = 0
    
    const timer = setInterval(() => {
      current++
      setDisplayValue(prev => {
        const next = prev + increment
        if (current >= steps) {
          clearInterval(timer)
          return value
        }
        return next
      })
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [value])
  
  const center = size / 2
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const percentage = (displayValue / max) * 100
  const offset = circumference - (percentage / 100) * circumference
  
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={gaugeSecondaryColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={gaugePrimaryColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.3s ease"
            }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="circular-progress-text">
            {Math.round(displayValue)}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default AnimatedCircularProgressBar