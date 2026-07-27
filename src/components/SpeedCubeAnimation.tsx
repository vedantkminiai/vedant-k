import React, { useEffect, useState } from 'react';

const SpeedCubeAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [cubeState, setCubeState] = useState(0);

  useEffect(() => {
    const animationDuration = 4000; // 4 seconds
    const steps = 20;
    const stepDuration = animationDuration / steps;

    const interval = setInterval(() => {
      setCubeState(prev => (prev + 1) % steps);
    }, stepDuration);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
      clearInterval(interval);
    }, animationDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!isAnimating) return null;

  const getRotation = () => {
    const baseRotation = cubeState * 18; // 360 degrees over 20 steps
    return {
      transform: `rotateX(${baseRotation}deg) rotateY(${baseRotation * 1.5}deg) rotateZ(${baseRotation * 0.5}deg)`,
    };
  };

  const getFaceColor = (face: string) => {
    const colors = {
      front: ['#ff4444', '#ff6666', '#ff8888'],
      back: ['#44ff44', '#66ff66', '#88ff88'],
      right: ['#4444ff', '#6666ff', '#8888ff'],
      left: ['#ffff44', '#ffff66', '#ffff88'],
      top: ['#ff44ff', '#ff66ff', '#ff88ff'],
      bottom: ['#44ffff', '#66ffff', '#88ffff'],
    };
    
    const faceColors = colors[face as keyof typeof colors];
    return faceColors[cubeState % 3];
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm">
      <div className="text-center">
        <div className="cube-container mb-8" style={{ perspective: '1000px' }}>
          <div 
            className="cube"
            style={{
              ...getRotation(),
              width: '120px',
              height: '120px',
              position: 'relative',
              transformStyle: 'preserve-3d',
              margin: '0 auto',
              transition: 'transform 0.1s ease-out',
            }}
          >
            {/* Front Face */}
            <div 
              className="cube-face front"
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                backgroundColor: getFaceColor('front'),
                border: '2px solid #333',
                transform: 'translateZ(60px)',
                display: 'grid',
                gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr',
                gap: '2px',
                padding: '4px',
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    backgroundColor: getFaceColor('front'),
                    border: '1px solid #222',
                    borderRadius: '2px',
                  }} 
                />
              ))}
            </div>

            {/* Back Face */}
            <div 
              className="cube-face back"
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                backgroundColor: getFaceColor('back'),
                border: '2px solid #333',
                transform: 'translateZ(-60px) rotateY(180deg)',
                display: 'grid',
                gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr',
                gap: '2px',
                padding: '4px',
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    backgroundColor: getFaceColor('back'),
                    border: '1px solid #222',
                    borderRadius: '2px',
                  }} 
                />
              ))}
            </div>

            {/* Right Face */}
            <div 
              className="cube-face right"
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                backgroundColor: getFaceColor('right'),
                border: '2px solid #333',
                transform: 'rotateY(90deg) translateZ(60px)',
                display: 'grid',
                gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr',
                gap: '2px',
                padding: '4px',
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    backgroundColor: getFaceColor('right'),
                    border: '1px solid #222',
                    borderRadius: '2px',
                  }} 
                />
              ))}
            </div>

            {/* Left Face */}
            <div 
              className="cube-face left"
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                backgroundColor: getFaceColor('left'),
                border: '2px solid #333',
                transform: 'rotateY(-90deg) translateZ(60px)',
                display: 'grid',
                gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr',
                gap: '2px',
                padding: '4px',
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    backgroundColor: getFaceColor('left'),
                    border: '1px solid #222',
                    borderRadius: '2px',
                  }} 
                />
              ))}
            </div>

            {/* Top Face */}
            <div 
              className="cube-face top"
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                backgroundColor: getFaceColor('top'),
                border: '2px solid #333',
                transform: 'rotateX(90deg) translateZ(60px)',
                display: 'grid',
                gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr',
                gap: '2px',
                padding: '4px',
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    backgroundColor: getFaceColor('top'),
                    border: '1px solid #222',
                    borderRadius: '2px',
                  }} 
                />
              ))}
            </div>

            {/* Bottom Face */}
            <div 
              className="cube-face bottom"
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                backgroundColor: getFaceColor('bottom'),
                border: '2px solid #333',
                transform: 'rotateX(-90deg) translateZ(60px)',
                display: 'grid',
                gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr',
                gap: '2px',
                padding: '4px',
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    backgroundColor: getFaceColor('bottom'),
                    border: '1px solid #222',
                    borderRadius: '2px',
                  }} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent mb-4">
            Solving Problems...
          </h2>
          <div className="flex justify-center space-x-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedCubeAnimation;
