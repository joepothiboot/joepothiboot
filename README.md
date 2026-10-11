# joe pothiboot

compilers and kernels for accelerators. mostly MLIR/LLVM, tiling, and arguing with roofline plots.

```
$ whoami
joe — lowering tensors to machine code, one dialect at a time
$ cat ~/.focus
  mlir/llvm   custom dialects, transform-dialect schedules, lowering to asm
  kernels     CPU SIMD, GPU, scratchpad+DMA machines; compared to real ceilings and vendor libs
  rule #1     optimized == reference, bit for bit, or it doesn't ship
```

## projects

**[nano-dsp-mlir](https://github.com/joepothiboot/nano-dsp-mlir)** · [demo](https://joepothiboot.github.io/nano-dsp-mlir/)
out-of-tree MLIR compiler for a small tensor DSL. `dsp` dialect → Linalg → LLVM. Transform-dialect
schedules are generated from a hardware target model (NEON, AVX2, Hexagon HVX). Scheduled output is
bit-exact vs unscheduled and a scalar C++ reference. Also a Mojo kernel lib for CPU/GPU: register-blocked
matmul hits 1.9 TFLOP/s on a T4, 49–58% of cuBLAS from 512³ up. CUDA and Triton matmuls on the same
card, profiled in Nsight Compute against cuBLAS.

**[mock-npu-bench](https://github.com/joepothiboot/mock-npu-bench)**
cycle-level simulator + assembler (C++17) for MN1, a fictional vector accelerator: 64 KiB scratchpad,
async DMA. Traps on DMA hazards, emits Perfetto traces, so double buffering and stalls show up as cycles.

**[VizMLIR](https://github.com/joepothiboot/vizmlir)** · [live](https://joepothiboot.github.io/vizmlir/)
Rust → WASM, runs in the browser. Reads MLIR pass pipelines, analyzes GPU memory access in MLIR/Triton IR.
Predictions were written down before running; they matched all 22 Nsight Compute counters on a T4.

also:
[device-atlas](https://github.com/joepothiboot/device-atlas) (CPU/GPU/DSP/NPU catalog + a planner that tiles one GEMM per device),
[compiler-field-guide](https://github.com/joepothiboot/compiler-field-guide) (my notes: LLVM, MLIR, Triton, Mojo)

## stack

`C++` `MLIR/LLVM` `CUDA` `Triton` `Mojo` `Python` `Rust`

## contact

[github](https://github.com/joepothiboot) · [linkedin](https://www.linkedin.com/in/joepotibutr)
