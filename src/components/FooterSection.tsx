import React from 'react';
import ProjectSlider from './ProjectSlider';

export default function FooterSection() {
  return (
    <div className="page5 page1" id="contact">
      <ProjectSlider 
        sliderTitle="ALL WORKS!"
        sliderSub="Handpick highlights - spanning the last few years."
        sliderTip="Click card or use controls to navigate"
        className="vals"
      />
      <div>
        <div className="scroller">
          <h1>Let&apos;s create something together <a href="mailto:rahul.developer.web@gmail.com">EMAIL ME</a></h1>
          <h1>Let&apos;s create something together <a href="mailto:rahul.developer.web@gmail.com">EMAIL ME</a></h1>
          <h1>Let&apos;s create something together <a href="mailto:rahul.developer.web@gmail.com">EMAIL ME</a></h1>
          <h1>Let&apos;s create something together <a href="mailto:rahul.developer.web@gmail.com">EMAIL ME</a></h1>
          <h1>Let&apos;s create something together <a href="mailto:rahul.developer.web@gmail.com">EMAIL ME</a></h1>
        </div>
        <footer>
          <div className="fleft">
            <p className="logo">RAHUL©</p>
            <img src="/Assets/rahul_stamp.jpg" alt="Branding Stamp Logo" />
            <a href="#">Legal</a>
          </div>
          <div className="fright">
            <a href="https://github.com/rahulsharma1902" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href="mailto:rahul.developer.web@gmail.com">• EMAIL</a>
            <a href="tel:8894548063">• PHONE</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
