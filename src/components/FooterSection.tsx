import React from 'react';
import ProjectSlider, { Project } from './ProjectSlider';

const defaultFooterProjects: Project[] = [
  {
    id: "elem1",
    image: "/Assets/pg5img1.webp",
    title: "WOW CONCEPT",
    isNew: true,
    description: "AvroKO is an award-winning global design firm, established itself as a global leader in interior architecture for hospitality, restaurant and bars.",
  },
  {
    id: "elem3",
    image: "/Assets/elem2.webp",
    title: "THE ROGER HUB",
    isNew: true,
    description: "The Roger Hub is an immersive web experience showcasing the tennis-inspired 'On' sneakers, a collaboration born out of a partnership with the legendary Roger Federer.",
  }
];

export default function FooterSection() {
  return (
    <div className="page5 page1" id="contact">
      <ProjectSlider 
        projects={defaultFooterProjects}
        sliderTitle="ALL WORKS!"
        sliderSub="Handpick highlights - spanning the last few years."
        sliderTip="Click on slide to explore."
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
