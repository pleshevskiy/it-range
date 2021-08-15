/// <reference types="./range.d.ts"/>

function normalizeRangeArguments(start = 0, end, step) {
  if (end == null) {
    [start, end] = [0, start];
  }
  if (step == null) {
    step = end < start ? -1 : 1;
  }
  return [start, end, step];
}

class Range {
  constructor(...args) {
    [this.start, this.end, this.step] = normalizeRangeArguments(...args);
    this.isReversed = this.end < this.start;
  }
  *[Symbol.iterator]() {
    for (
      let current = this.start;
      this.isReversed ? current > this.end : current < this.end;
      current += this.step
    ) {
      yield current;
    }
  }
}

export function range(...args) {
  return new Range(...args);
}
