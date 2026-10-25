# joe pothiboot

correctness-first ML compilers. MLIR/LLVM, rewrite-based lowering, and every optimization checked against a reference.

```
$ whoami
joe — compiler engineer: tensors in, verified machine code out
$ cat ~/.focus
  verification  optimized == reference, bit for bit, or it doesn't ship; predictions written down before measuring
  co-design     simulators and target models for accelerators, so hardware constraints drive the schedule
  planning      schedules generated from a hardware model, not hand-tuned per device
  next          tested rewrites -> proved rewrites: formal semantics for MLIR transformations
```

## projects

**[nano-dsp-mlir](https://github.com/joepothiboot/nano-dsp-mlir)** · [demo](https://joepothiboot.github.io/nano-dsp-mlir/)
`verification` `planning` — out-of-tree MLIR compiler for a small tensor DSL. `dsp` dialect → Linalg → LLVM.
Transform-dialect schedules are generated from a hardware target model (NEON, AVX2, Hexagon HVX), and
every scheduled output is bit-exact vs the unscheduled program and a scalar C++ reference. Also a Mojo
kernel lib for CPU/GPU: register-blocked matmul hits 1.9 TFLOP/s on a T4, 49–58% of cuBLAS from 512³ up.
CUDA and Triton matmuls on the same card, profiled in Nsight Compute against cuBLAS.

**[mock-npu-bench](https://github.com/joepothiboot/mock-npu-bench)**
`co-design` — cycle-level simulator + assembler (C++17) for MN1, a fictional vector accelerator: 64 KiB
scratchpad, async DMA. Traps on DMA hazards, emits Perfetto traces, so double buffering and stalls show
up as cycles.

**[VizMLIR](https://github.com/joepothiboot/vizmlir)** · [live](https://joepothiboot.github.io/vizmlir/)
`verification` — Rust → WASM, runs in the browser. Reads MLIR pass pipelines, analyzes GPU memory access
in MLIR/Triton IR. Predictions were written down before running; they matched all 22 Nsight Compute
counters on a T4.

also:
[device-atlas](https://github.com/joepothiboot/device-atlas) (CPU/GPU/DSP/NPU catalog + a planner that tiles one GEMM per device),
[compiler-field-guide](https://github.com/joepothiboot/compiler-field-guide) (my notes: LLVM, MLIR, Triton, Mojo)

## stack

`C++` `MLIR/LLVM` `CUDA` `Triton` `Mojo` `Python` `Rust`

## contact

[github](https://github.com/joepothiboot) · [linkedin](https://www.linkedin.com/in/joepotibutr)
