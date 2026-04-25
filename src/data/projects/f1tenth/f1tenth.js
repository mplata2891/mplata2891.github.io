// src/data/projects/f1tenth/f1tenth.js
import vescSnippet from './vesc.py?raw';
import wallFollowerSnippet from './wall_follower.py?raw';

export const f1tenthProject = {
  id: "F1TENTH_RACING",
  category: "HARDWARE_EMBEDDED",
  title: "F1TENTH Autonomous Racing Platform",
  span: "md:col-span-2",
  status: "PROTOTYPE",
  role: "Technical Documentation — VESC Integration (S1) / ROS2 Architecture (S2)",

  description: `Multi-semester senior design project building a 1/10th scale 
  autonomous racing vehicle on a ROS2 Humble architecture deployed on an NVIDIA 
  Jetson Orin Nano, with a VESC 6 MKV motor controller, Intel RealSense camera, 
  and Hokuyo LiDAR. The project ran across several semesters with rotating student 
  teams. My two semesters were consecutive, which put me on both sides of the 
  knowledge transfer problem.`,

  impact: `First semester I contributed to VESC-to-Jetson interface documentation 
  alongside a more experienced team member, learning the hardware communication 
  layer while producing usable technical output. Second semester I returned as 
  someone with institutional knowledge, and took ownership of ROS2 documentation: 
  node architecture, migration to ROS2 Humble, simulation setup, and the onboarding 
  guide written specifically so the next rotating team could get up to speed without 
  losing ground.`,

  tags: ["SENIOR DESIGN", "ROS2 HUMBLE", "NVIDIA JETSON", "VESC", "PYTHON", "C++"],

  subsystems: [],

  documents: [
    {
      title: "Final SDP Group Report",
      type: "OFFICIAL_REPORT",
      url: "/assets/docs/f1tenth/4830_SDP_Report.pdf"
    },
    {
      title: "Individual Exec Summary",
      type: "OFFICIAL_REPORT",
      url: "/assets/docs/f1tenth/SDP_ExecutiveSummary_PlataMike.pdf"
    },
    {
      title: "Jetson-to-VESC Integration",
      type: "INTERNAL_SYS_DOC",
      url: "/assets/docs/f1tenth/Jetson_to_VESC.pdf"
    },
    {
      title: "ROS2 Node Specifications",
      type: "INTERNAL_SYS_DOC",
      url: "/assets/docs/f1tenth/f1tenth_ros2_documentation.pdf"
    },
    {
      title: "ROS2 Team Onboarding Guide",
      type: "INTERNAL_SYS_DOC",
      url: "/assets/docs/f1tenth/ROS2_Documentation.pdf"
    }
  ]
};