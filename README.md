# Unexpected output in setTimeout loop in TypeScript

This repository demonstrates a common closure-related issue in JavaScript when using `setTimeout` within a loop.  The code intends to print numbers 1 through 10 with a slight delay, but instead prints 11 repeatedly. This is because the `setTimeout` callback doesn't capture the value of `i` immediately; it captures the final value of `i` after the loop completes.

## Bug
The `bug.ts` file contains the problematic code.  Running this code will reveal the unexpected output.

## Solution
The `bugSolution.ts` file provides a corrected version using an immediately invoked function expression (IIFE) to create a new scope for each iteration and fix the closure issue.