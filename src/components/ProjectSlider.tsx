import React, { useState } from 'react';

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  isNew?: boolean;
  url?: string;
}

interface ProjectSliderProps {
  projects?: Project[];
  sliderTitle?: string;
  sliderSub?: string;
  sliderTip?: string;
  className?: string;
}

const defaultProjects: Project[] = [
  {
    id: "dropship",
    image: "/project/dropship.png",
    title: "Dropship Academy",
    description: "Sell courses of lecture Node and React js",
    url: "https://app.dropshipacademy.nl/login",
  },
  {
    id: "skyfall",
    image: "/project/skyfall.png",
    title: "Sky Fall",
    isNew: true,
    description: "AI Product selling platform built with Next.js and Payload CMS",
    url: "https://sky-fall-payload.vercel.app/",
  },
  {
    id: "deltanorth",
    image: "/project/delta_north.png",
    title: "Delta North Tea",
    description: "Product selling eCommerce website built with Next.js",
    url: "https://deltanorthtea.com/",
  },
  {
    id: "leadfusion",
    image: "/project/leadfustion.png",
    title: "Lead Fusion HQ",
    description: "Leads selling portal built with Node.js, Next.js, Boberdoo, and n8n webhooks",
    url: "https://www.leadfusionhq.com/",
  },
  {
    id: "gapsy",
    image: "/project/gapsy.png",
    title: "Gapsy Studio",
    isNew: true,
    description: "GSAP rendering Blender website built with Next.js, Blender, GSAP, and Three.js",
    url: "https://gapsystudio.com/",
  }
];

export default function ProjectSlider({
  projects = defaultProjects,
  sliderTitle = "ALL WORKS!",
  sliderSub = "A Feature selection the latest work- of the last years.",
  sliderTip = "Click card or use controls to navigate",
  className = "elems",
}: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const leftProject = projects[currentIndex];
  const rightProject = projects.length > 1 ? projects[(currentIndex + 1) % projects.length] : null;

  return (
    <div className={className}>
      {leftProject && (
        <div 
          key={`left-${leftProject.id}`} 
          className="elem animate-fade-in card-interactive" 
          id="elem1"
          onClick={handlePrev}
        >
          <a href={leftProject.url} target="_blank" rel="noopener noreferrer" className="project-link-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="image">
              <img src={leftProject.image} alt={leftProject.title} />
            </div>
            <h4>
              {leftProject.title} {leftProject.isNew && <span>NEW</span>}
            </h4>
          </a>
          <p>{leftProject.description}</p>
          {leftProject.url && (
            <a href={leftProject.url} target="_blank" rel="noopener noreferrer" className="live-link" onClick={(e) => e.stopPropagation()}>
              VISIT WORK <i className="ri-arrow-right-up-line"></i>
            </a>
          )}
        </div>
      )}

      <div className="elem" id="elem2">
        <h2>{sliderTitle}</h2>
        <p>{sliderSub}</p>
        
        <div className="slider-controls">
          <button onClick={handlePrev} className="slider-arrow" aria-label="Previous project">
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <span className="slider-fraction">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <button onClick={handleNext} className="slider-arrow" aria-label="Next project">
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>

        <h5>
          <span>TIP! </span> {sliderTip}
        </h5>
      </div>

      {rightProject && (
        <div 
          key={`right-${rightProject.id}`} 
          className="elem animate-fade-in card-interactive" 
          id="elem3"
          onClick={handleNext}
        >
          <a href={rightProject.url} target="_blank" rel="noopener noreferrer" className="project-link-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="image">
              <img src={rightProject.image} alt={rightProject.title} />
            </div>
            <h4>
              {rightProject.title} {rightProject.isNew && <span>NEW</span>}
            </h4>
          </a>
          <p>{rightProject.description}</p>
          {rightProject.url && (
            <a href={rightProject.url} target="_blank" rel="noopener noreferrer" className="live-link" onClick={(e) => e.stopPropagation()}>
              VISIT WORK <i className="ri-arrow-right-up-line"></i>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
