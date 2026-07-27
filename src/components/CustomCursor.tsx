import React, { useEffect, useRef, useState } from 'react';

const interactiveSelector =
  'a, button, input, textarea, select, [role="button"], [role="tab"], [data-cursor-interactive]';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');

    const handlePointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || !cursorRef.current) return;

      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;
      setIsVisible(true);

      const target = event.target;
      setIsHovering(
        target instanceof Element && Boolean(target.closest(interactiveSelector)),
      );
    };

    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);
    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', handlePointerLeave);
    document.addEventListener('pointerenter', handlePointerEnter);
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('pointerenter', handlePointerEnter);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={[
        'custom-cursor',
        isVisible ? 'custom-cursor--visible' : '',
        isHovering ? 'custom-cursor--hovering' : '',
        isPressed ? 'custom-cursor--pressed' : '',
      ].join(' ')}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
