import React from 'react';

export interface Award {
  category: string;
  title: string;
  count: number;
}

interface InsightsSectionProps {
  awards?: Award[];
}

const defaultAwards: Award[] = [
  {
    category: "SITE OF THE DAY",
    title: "AWARDS",
    count: 9,
  },
  {
    category: "SITE OF THE MONTH",
    title: "WINNERS",
    count: 1,
  },
  {
    category: "FWA OF THE DAY",
    title: "AWARDS",
    count: 6,
  },
  {
    category: "ACCLAIMED",
    title: "MENTIONS",
    count: 8,
  }
];

export default function InsightsSection({
  awards = defaultAwards,
}: InsightsSectionProps) {
  return (
    <div className="page3">
      <div className="top">
        <div className="left">
          <div className="txt">
            <div className="txtleft">
              <h1>UPCOMING NEXT</h1>
              <p>Fresh entry - A selected work from the latest digital releases.</p>
              <p><span>TIP!</span> Click on the image to explore</p>
            </div>
            <div className="txtright">
              <img src="/Assets/pg3img1.webp" alt="Unexpected Time Sneak Peek" />
              <h1>UNEXPECTED TIME</h1>
              <p>Unexpected ATime is a classic - furitistic gamification web experience showcasing the lost history &amp; culture in a world dominated by the virtual reality.</p>
            </div>
          </div>
          <img src="/Assets/pg3img2.jpeg" alt="Upcoming Release Preview" />
        </div>
        <div className="right">
          <h2>DESIGN, DEVELOP</h2>
          <h1>DEPLOY</h1>
          <p className="fst">A strong web application is built on solid architectural foundations. I design, develop, and deploy scalable solutions across the stack using Laravel, Node.js, and modern React environments.</p>
          <p>Whether building real-time web architectures, cross-platform mobile apps with React Native, or high-performance creative frontends, I engineer every layer to perform flawlessly.</p>
          <div className="more">
            <a href="#">ALL WORK</a>
          </div>
        </div>
      </div>
      <div className="bottom">
        {awards.map((award, index) => (
          <div className="box" key={index}>
            <div className="txt">
              <p>{award.category}</p>
              <h1>{award.title}</h1>
            </div>
            <p>{award.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
