import { useEffect, useRef } from 'react';

const useGlidingCarousel = (pixelsPerSecond = 22, autoScroll = true) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;
    let previousTime = 0;
    let scrollPosition = scroller.scrollLeft;
    let pointerId: number | null = null;
    let pointerStartX = 0;
    let pointerStartScroll = 0;
    let isDragging = false;
    let isScrollbarDrag = false;
    let suppressClick = false;
    let resumeAt = 0;

    const pauseBriefly = (duration = 1200) => {
      resumeAt = performance.now() + duration;
    };

    const handleScroll = () => {
      scrollPosition = scroller.scrollLeft;
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      pointerId = event.pointerId;
      pointerStartX = event.clientX;
      pointerStartScroll = scroller.scrollLeft;
      isDragging = false;
      suppressClick = false;
      const bounds = scroller.getBoundingClientRect();
      isScrollbarDrag = event.clientY >= bounds.bottom - 16;
      resumeAt = Number.POSITIVE_INFINITY;
      if (!isScrollbarDrag) {
        scroller.setPointerCapture?.(event.pointerId);
      }
      scroller.classList.add('experience-scroll--grabbing');
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      if (isScrollbarDrag) return;

      const distance = event.clientX - pointerStartX;
      if (Math.abs(distance) > 4) {
        isDragging = true;
        suppressClick = true;
      }

      if (!isDragging) return;
      event.preventDefault();
      scroller.scrollLeft = pointerStartScroll - distance;
      scrollPosition = scroller.scrollLeft;
    };

    const finishPointerInteraction = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;

      if (scroller.hasPointerCapture?.(event.pointerId)) {
        scroller.releasePointerCapture(event.pointerId);
      }

      pointerId = null;
      isDragging = false;
      isScrollbarDrag = false;
      scrollPosition = scroller.scrollLeft;
      resumeAt = performance.now() + 1400;
      scroller.classList.remove('experience-scroll--grabbing');
    };

    const handleClick = (event: MouseEvent) => {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    };

    const handleWheel = () => pauseBriefly(1000);

    const moveCarousel = (time: number) => {
      if (
        previousTime &&
        pointerId === null &&
        time >= resumeAt &&
        !reducedMotion.matches &&
        autoScroll
      ) {
        scrollPosition += ((time - previousTime) / 1000) * pixelsPerSecond;

        const loopPoint = scroller.scrollWidth / 2;
        if (loopPoint && scrollPosition >= loopPoint) {
          scrollPosition -= loopPoint;
        }

        scroller.scrollLeft = scrollPosition;
      }

      previousTime = time;
      animationFrame = window.requestAnimationFrame(moveCarousel);
    };

    scroller.addEventListener('scroll', handleScroll, { passive: true });
    scroller.addEventListener('pointerdown', handlePointerDown);
    scroller.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', finishPointerInteraction);
    window.addEventListener('pointercancel', finishPointerInteraction);
    scroller.addEventListener('click', handleClick, true);
    scroller.addEventListener('wheel', handleWheel, { passive: true });
    animationFrame = window.requestAnimationFrame(moveCarousel);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      scroller.removeEventListener('scroll', handleScroll);
      scroller.removeEventListener('pointerdown', handlePointerDown);
      scroller.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', finishPointerInteraction);
      window.removeEventListener('pointercancel', finishPointerInteraction);
      scroller.removeEventListener('click', handleClick, true);
      scroller.removeEventListener('wheel', handleWheel);
    };
  }, [autoScroll, pixelsPerSecond]);

  return scrollerRef;
};

export default useGlidingCarousel;
