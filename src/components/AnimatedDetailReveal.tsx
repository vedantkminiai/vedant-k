import { ReactNode, useEffect, useState } from 'react';

type AnimatedDetailRevealProps = {
  children: ReactNode;
  revealKey: string;
};

const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];

const AnimatedDetailReveal = ({ children, revealKey }: AnimatedDetailRevealProps) => {
  const [isSolving, setIsSolving] = useState(true);

  useEffect(() => {
    setIsSolving(true);
    const timer = window.setTimeout(() => setIsSolving(false), 900);
    return () => window.clearTimeout(timer);
  }, [revealKey]);

  return (
    <div className="detail-expansion" key={revealKey}>
      <div
        className={`detail-solver ${isSolving ? 'detail-solver--active' : ''}`}
        aria-hidden="true"
      >
        <div className="detail-solver__scene">
          <div className="detail-solver__cube">
            {faces.map((face) => (
              <div className={`detail-solver__face detail-solver__face--${face}`} key={face}>
                {Array.from({ length: 9 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <span className="detail-solver__label">Solving details</span>
      </div>

      <div className="detail-expansion__content">{children}</div>
    </div>
  );
};

export default AnimatedDetailReveal;
