declare function normalizeRangeArguments(start?: number, end?: number, step?: number): number[];
declare class Range {
    private start;
    private end;
    private step;
    private isReversed;
    constructor(...args: Parameters<typeof normalizeRangeArguments>);
    [Symbol.iterator](): Generator<number, void, unknown>;
}
export declare function range(...args: Parameters<typeof normalizeRangeArguments>): Range;
export default range;
