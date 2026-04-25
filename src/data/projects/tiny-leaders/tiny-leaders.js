// src/data/projects/tiny-leaders/tiny-leaders.js
import layoutSnippet from './layout-snippet.astro?raw';

export const tinyLeadersProject = {
  id: "TINY_LEADERS_REBORN",
  category: "WEB_FULL_STACK",
  title: "Tiny Leaders Reborn Platform",
  
  span: "md:col-span-1", 
  status: "ACTIVE",
  
  role: "Lead Developer / Core Committee",
  
  description: `Built and deployed the official web platform for the Tiny Leaders 
  Reborn Magic: The Gathering format. A live site serving a geographically 
  distributed player community. This was my first real project in Astro and in 
  web development generally. I used AI tooling to learn the framework and work 
  through unfamiliar patterns — the architecture decisions, content structure, 
  component design, and deployment pipeline are mine.`,
  
  impact: `Replaced legacy blogspot governance with a centralized, 
  version-controlled platform hosted on Netlify. The site serves as the 
  official rules hub and community anchor for an active player base. It taught 
  me more about how modern static site frameworks actually work than coursework 
  did, because the constraints were real.`,
         
  tags: ["WEB PORTAL", "ASTRO", "HTML/CSS", "JAVASCRIPT", "NETLIFY", "GIT"],
  
  // just one subsystem to show off front-end architecture
  subsystems: [
    {
      name: "Astro Component Architecture",
      description: "Engineered highly modular layouts utilizing Astro's 'Islands' architecture, ensuring zero-javascript overhead for static content while maintaining dynamic routing capabilities.",
      code: layoutSnippet,
      lang: "astro"
    }
  ],
  
  // urls
  repoUrl: "https://github.com/TinyLeadersCommittee/Official-TLR.com",
  liveUrl: "https://official-tlr.com/" 
};