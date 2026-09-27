# Joe Pothiboot

Frontend engineer with a growing interest in compiler tooling, MLIR, and systems-level software design.

I work across product interfaces and low-level technical exploration, with a focus on building clear abstractions, resilient systems, and tooling that makes complex behavior easier to reason about.

## Current focus

- Frontend engineering with React, TypeScript, and product-minded UX
- Compiler internals and LLVM/MLIR concepts
- Building small, interpretive projects that turn abstract systems ideas into concrete, testable implementations

## Interesting projects

Explore all three together as one pipeline (source → diagnostics → MLIR → pass inspection → profiling) in **[compiler-tooling-lab](https://joepothiboot.github.io/compiler-tooling-lab/)**.

### [json-schema-mlir](https://github.com/joepothiboot/json-schema-mlir)
An out-of-tree MLIR dialect that compiles JSON Schema (Draft 2020-12) documents into native validators specialized to a single schema. Constraints are canonicalized as constraints first (subsumption, conjunction fusion, contradiction detection), then lowered through `arith`/`scf`/`math` to LLVM IR against a small runtime ABI.

### [nano-dsp-mlir](https://github.com/joepothiboot/nano-dsp-mlir)
A small MLIR compiler for a tiny image/math DSL. It has a `dsp` dialect (`add`, `relu`, `matmul`, `conv2d`) with verifiers and canonicalization, plus a lowering to `linalg.generic`. Tests run in three tiers: dialect verification, FileCheck lowering structure, and end-to-end execution via `mlir-runner`.

### [VizMLIR](https://github.com/joepothiboot/vizmlir) · [live demo](https://joepothiboot.github.io/vizmlir/)
A browser-based MLIR visualizer built with React and a Rust/WebAssembly parser. It renders IR as an interactive graph and steps through `-mlir-print-ir-after-all` pass traces with before/after diffs and diagnostics. It runs entirely client-side.

## Compiler interest

I care deeply about frontend craft and product quality, and I am interested in compiler internals, systems programming, LLVM, and MLIR.

I explore these areas through small, hands-on projects that make compiler design and systems concepts easier to understand.

## Tech interests

- React / TypeScript
- UI architecture and component design
- MLIR / LLVM
- compiler passes and IR transformations
- dataflow, transformation pipelines, and optimization thinking

## Contact

- GitHub: [@joepothiboot](https://github.com/joepothiboot)
- LinkedIn: [Watcharapong Pothiboot](https://www.linkedin.com/in/joepotibutr)
- Email: joe.pothiboot.dev@gmail.com
