// src/data/labs/fpga-combination-lock/fpga-lock.js
import snippet from './snippet.v?raw';
import fullCode from './full-code.v?raw';

export const fpgaLockLab = {
  id: "ECE3300L",
  type: "hardware",
  courseName: "Digital Circuit Design",
  professor: "Prof. Mohamed El-Hadedy Aly",
  tags: ["VERILOG", "FPGA", "XILINX VIVADO", "ARTIX-7", "RTL"],
  role: "Contributing Developer",

  problem: `Group RTL design project implementing a 12-bit pseudo-random 
  combination lock with a finite state machine controller on an Artix-7 
  FPGA using Xilinx Vivado.`,

  solution: `The system used modular components including up/down counters, 
  decoders, muxes, a barrel shifter, and clock-synchronized PRNG modules. 
  I contributed to the RTL implementation as one of four teammates. The full 
  codebase is available in the team repository.`,

  hardwareSpecs: ["Artix-7 FPGA", "Xilinx Vivado", "12-bit PRNG", "FSM Controller"],
  schematicAsset: null,

  repoUrl: "https://github.com/Reconfigurable-Computing-CalPoly-Pomona/ECE3300-02-Fall2023/tree/main/Group_Bee",
  
  codeSnippet: snippet,
  fullCode: fullCode
};