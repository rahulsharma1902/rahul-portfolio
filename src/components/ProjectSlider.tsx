import React from 'react';

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  isNew?: boolean;
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
    id: "elem1",
    image: "/Assets/elem.jpeg",
    title: "AVRO | KO",
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

export default function ProjectSlider({
  projects = defaultProjects,
  sliderTitle = "ALL WORKS!",
  sliderSub = "A Feature selection the latest work- of the last years.",
  sliderTip = "Drag sideways to nevigate",
  className = "elems",
}: ProjectSliderProps) {
  // We expect up to 2 projects for the left and right elements. 
  // Renders left element (elem1), center slide tip (elem2), and right element (elem3).
  const leftProject = projects[0];
  const rightProject = projects[1];

  return (
    <div className={className}>
      {leftProject && (
        <div className="elem" id={leftProject.id || "elem1"}>
          <div className="image">
            <img src={leftProject.image} alt={leftProject.title} />
          </div>
          <h4>
            {leftProject.title} {leftProject.isNew && <span>NEW</span>}
          </h4>
          <p>{leftProject.description}</p>
        </div>
      )}

      <div className="elem" id="elem2">
        <h2>{sliderTitle}</h2>
        <p>{sliderSub}</p>
        <h5>
          <span>TIP! </span> {sliderTip}
        </h5>
      </div>

      {rightProject && (
        <div className="elem" id={rightProject.id || "elem3"}>
          <div className="image">
            <img src={rightProject.image} alt={rightProject.title} />
          </div>
          <h4>
            {rightProject.title} {rightProject.isNew && <span>NEW</span>}
          </h4>
          <p>{rightProject.description}</p>
        </div>
      )}
    </div>
  );
}
