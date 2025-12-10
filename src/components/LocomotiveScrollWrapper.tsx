import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollWrapperProps {
  children: React.ReactNode;
}

export const LocomotiveScrollWrapper = ({ children }: LocomotiveScrollWrapperProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // Update scroll on route change
    setTimeout(() => {
      locomotiveScrollRef.current?.update();
    }, 100);

    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  // Update scroll on route change
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
      setTimeout(() => {
        locomotiveScrollRef.current?.update();
      }, 100);
    }
  }, [location.pathname]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};
