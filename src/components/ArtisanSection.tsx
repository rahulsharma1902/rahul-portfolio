import React from 'react';

export default function ArtisanSection() {
  return (
    <div className="page4" id="skills">
      <div className="top">
        <div className="left">
          <img src="/Assets/pg4img1.jpeg" alt="Abstract Work Grid Left" />
          <span>THE</span>
          <h1>FULL</h1>
        </div>
        <div className="right">
          <img src="/Assets/pg4img2.jpeg" alt="Abstract Work Grid Right" />
        </div>
      </div>
      <div className="mid">
        <img src="/Assets/pg4img3.jpeg" alt="Abstract Work Grid Center" />
        <h1>STACK</h1>
      </div>
      <div className="bottom">
        <h1>ARTIST</h1>
        <div className="other">
          <p>Over the years, I&apos;ve engineered interactive web platforms and mobile applications using React Native, Laravel, and the MERN stack, delivering seamless user experiences and robust API backends.</p>
          <h1>FULL STACK</h1>
          <p>Next.js, Node.js, PHP, Express, Three.js, GSAP, and many others.</p>
        </div>
      </div>
    </div>
  );
}
