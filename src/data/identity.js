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
    "Recent Computer Engineering graduate with a strong pull toward embedded" +
    " systems, low-level software, and hardware-software integration."
  ],
  
  // The longer narrative
  fullBio: [
    "My coursework went deep into microcontrollers, Verilog HDL, and operating" +
    " systems for embedded applications. Outside of that I've got some project" +
    " experience with hardware documentation and systems integration, built a" +
    " live web platform and written implementations in C, C++, Java, and Python.",
    
    "Early in my career and actively growing. I'm interested in all three layers" +
    " of computing -- hardware, software and services. I'm looking to contribute" +
    " to a team that values both execution & learning, and to be challenged by" +
    " engineers with more experience."
  ]
};