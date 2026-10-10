# Joe Pothiboot 👋

I build compilers and kernels for accelerators: MLIR and LLVM pipelines, tiling for CPUs, GPUs and
scratchpad DSP/NPU machines, and kernels that are checked bit for bit against a reference.

## 🎯 Current focus

- MLIR/LLVM compilers: custom dialects, Transform-dialect schedules, lowering to machine code
- Kernels for CPU SIMD, GPU and scratchpad/DMA accelerators, measured against real ceilings and vendor libraries
- Correctness first: every optimized kernel must match an unoptimized reference exactly

## 🛠️ Projects

### ⚡ [nano-dsp-mlir](https://github.com/joepothiboot/nano-dsp-mlir) · [demo](https://joepothiboot.github.io/nano-dsp-mlir/)

An out-of-tree MLIR compiler for a small tensor DSL. A `dsp` dialect is lowered through Linalg to LLVM,
tiled and vectorized by Transform-dialect schedules generated from a hardware target model, for ARM NEON,
x86 AVX2 and Hexagon HVX. Scheduled code is bit-exact with unscheduled code and a scalar C++ reference.
A Mojo kernel library implements the same ops on CPU and GPU; its register-blocked matmul reaches
1.9 TFLOP/s on an NVIDIA T4, 49–58% of cuBLAS from 512³ up.

### 🧮 [mock-npu-bench](https://github.com/joepothiboot/mock-npu-bench)

A cycle-level simulator and assembler in C++17 for MN1, a fictional vector accelerator with a 64 KiB
scratchpad and an async DMA engine. It traps on DMA hazards and writes Perfetto traces, so double
buffering and pipeline stalls show up as cycle counts.

### 🔍 [VizMLIR](https://github.com/joepothiboot/vizmlir) · [live demo](https://joepothiboot.github.io/vizmlir/)

A browser tool (Rust → WebAssembly) that reads MLIR pass pipelines and analyzes GPU memory access in MLIR
and Triton IR. Its predictions, written before the run, matched all 22 Nsight Compute counters measured
on an NVIDIA T4.

### Also

- [device-atlas](https://github.com/joepothiboot/device-atlas): a catalog of CPUs, GPUs, DSPs and NPUs
  with a planner that tiles the same GEMM for each
- [compiler-field-guide](https://github.com/joepothiboot/compiler-field-guide): my notes on compiler
  concepts across LLVM, MLIR, Triton and Mojo

## 🧰 Tools

C++ · MLIR / LLVM · Mojo · Python · Rust

## 📫 Contact

- GitHub: [@joepothiboot](https://github.com/joepothiboot)
- LinkedIn: [Watcharapong Pothiboot](https://www.linkedin.com/in/joepotibutr)
- Email: joe.pothiboot.dev@gmail.com
