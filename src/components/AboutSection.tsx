import React from 'react';

export default function AboutSection() {
  return (
    <div className="page2">
      <div className="top">
        <div className="left">
          <h1>FULL STACK <span>DEVELOPER!</span></h1>
          <img src="/Assets/starI.jpeg" alt="Decorative Star Badge" />
          <p>As a passionate Full Stack Developer based in India, I specialize in crafting high-performance web applications using the MERN stack, Laravel, React Native, and Next.js, combined with interactive frontend motion via GSAP and Three.js.</p>
        </div>
        <div className="right">
          <img src="/Assets/BigFace.jpeg" alt="Professional Portrait" />
          <h1>FULL STACK DEVELOPER</h1>
          <h1>MERN &amp; LARAVEL SPECIALIST</h1>
          <h1>CREATIVE WEB ENGINEER</h1>
        </div>
      </div>
      <div className="bottom">
        <h1>Website</h1>
        <img src="/Assets/stamp.png" alt="Circular Branding Stamp" />
      </div>
    </div>
  );
}
