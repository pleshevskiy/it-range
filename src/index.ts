
function normalizeRangeArguments(start = 0, end?: number, step?: number) {
    if (end == null) {
        [start, end] = [0, start];
    }

    if (step == null) {
        step = end < start ? -1 : 1;
    }

    return [start, end, step];
}

class Range {
    private start: number;
    private end: number;
    private step: number;
    private isReversed: boolean;

    constructor(...args: Parameters<typeof normalizeRangeArguments>) {
        [this.start, this.end, this.step] = normalizeRangeArguments(...args);
        this.isReversed = this.end < this.start;
    }

    *[Symbol.iterator] () {
        for (
            let current = this.start;
            this.isReversed ? current > this.end : current < this.end;
            current += this.step
        ) {
            yield current;
        }
    };
}

export function range(...args: Parameters<typeof normalizeRangeArguments>) {
    return new Range(...args);
}

export default range;
