'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from '@/components/Navbar';
import ProjectSlider from '@/components/ProjectSlider';
import AboutSection from '@/components/AboutSection';
import InsightsSection from '@/components/InsightsSection';
import ArtisanSection from '@/components/ArtisanSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: any;

    // Dynamically import locomotive-scroll to avoid SSR build errors
    import('locomotive-scroll').then((LocomotiveScroll) => {
      if (mainRef.current) {
        const ScrollConstructor = LocomotiveScroll.default as any;
        scroll = new ScrollConstructor({
          el: mainRef.current,
          smooth: true,
        });
      }
    });

    const loadAnim = () => {
      const tl = gsap.timeline();

      tl.to(".page1", {
        y: "100vh",
        scale: 0.5,
        duration: 0,
      });

      tl.to(".page1", {
        y: "0vh",
        duration: 1,
      });

      tl.to(".page1", {
        y: "0vh",
        duration: 0.8,
        scale: 0.6,
        delay: 0.5,
      });

      tl.to(".page1", {
        y: "0vh",
        rotate: 360,
        scale: 1,
        duration: 1,
        ease: "power3.in",
      });
    };

    const mediaQuery = () => {
      if (window.innerWidth > 600) {
        loadAnim();
      }
    };

    // Run animation logic once loaded/mounted
    mediaQuery();

    window.addEventListener('resize', mediaQuery);

    return () => {
      if (scroll) {
        scroll.destroy();
      }
      window.removeEventListener('resize', mediaQuery);
    };
  }, []);

  return (
    <main ref={mainRef}>
      <div className="page1" id="home">
        <Navbar />
        <ProjectSlider />
        <div className="miranda">
          <h1>RAHUL</h1>
        </div>
      </div>

      <AboutSection />
      <InsightsSection />
      <ArtisanSection />
      <FooterSection />
    </main>
  );
}
