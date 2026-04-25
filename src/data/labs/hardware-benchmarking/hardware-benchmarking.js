// src/data/labs/hardware-benchmarking/hardware-benchmark.js
import snippet from './snippet.py?raw';
import fullCode from './full-code.py?raw';

export const hardwareBenchmarkLab = 
{
  id: "SYS_ARCH_BENCHMARK",
  type: "research",                    // NEW type
  courseName: "Hardware Architecture Analysis",
  professor: "Prof. Mohamed El-Hadedy Aly",
  tags: ["PYTHON", "OPENCV", "PSUTIL", "ARM/x86", "BENCHMARKING"],
  role: "Report Author",               // NEW field — explicit attribution

  problem: `Four-person study benchmarking a Python image processing pipeline 
  across nine x86/x64 and ARM architectures — Raspberry Pis, mobile SoCs, 
  Chromebooks, and desktop towers — measuring execution time, peak memory, 
  estimated CPI, and power consumption.`,

  solution: `Each team member conducted independent benchmark runs and hardware 
  research on their assigned systems, then brought findings to a round-table 
  discussion. I synthesized those analyses into the final technical report — 
  unifying four sets of results into a coherent methodology, reconciling three 
  distinct power measurement approaches, and writing the architectural 
  interpretation and limitations analysis.`,

  repoUrl: "https://github.com/california-polytechnic-university/ECE4300_SP2025/tree/main/Group_F",

  attachedAssets: [
    {
      type: "COURSE_REPORT",
      label: "Performance Analysis Report",
      url: "/assets/docs/hardware-benchmark/ECE4300_Report.pdf"
    }
  ]
};