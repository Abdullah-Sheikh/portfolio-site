
import { useState, useEffect } from 'react';

const AnimatedExpertise = () => {
  const expertiseAreas = [
    "software engineering",
    "mobile development",
    "web development",
    "ai development",
    'software consulting',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === expertiseAreas.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`
        inline-block min-w-[200px] 
        transition-all duration-300 ease-in-out
        ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}
      `}
    >
      {expertiseAreas[currentIndex]}
    </span>
  );
};

export default AnimatedExpertise;

