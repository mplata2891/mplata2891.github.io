// src/data/identity.js
// Centralized registry for personal identity, professional summary, and narrative biography

/* ==========================================================================
   IDENTITY DATA TEMPLATE
   ==========================================================================

  export const IDENTITY = {
    // The top-level system status indicator
    statusText: "[ System_Ready ]",
    
    // my professional name
    name: "FIRST LAST",
    
    // my primary credential or role
    title: "> CREDENTIAL_OR_TITLE_",
    
    // The 1-2 sentence executive summary
    shortBio: "High-impact summary of your technical focus.",
    
    // The longer narrative
    fullBio: [
      "Paragraph one detailing your background.",
      "Paragraph two detailing your operational philosophy."
    ]
  };

========================================================================== */

export const IDENTITY = {
  // The top-level system status indicator
  statusText: "[ System_Ready ]",
  
  // my professional name
  name: "MIKE PLATA",
  
  // my primary credential or role
  title: "> COMPUTER ENGINEER_",
  
  // The 1-2 sentence executive summary
  shortBio: [
    "Recent Computer Engineering graduate bringing a systems-level background to" +
    " software and infrastructure problems."
  ],
  
  // The longer narrative
  fullBio: [
    "My experience spans embedded development, hardware–software integration," +
    " robotics, and a live web platform, each connected by a focus on building" +
    " systems end-to-end and understanding why they work.",
    
    "Early in my career and actively growing. I'm looking to contribute to a" +
    " team that values both execution & learning, and to be challenged by" +
    " engineers with more experience."
  ]
};