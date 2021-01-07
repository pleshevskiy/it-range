import { range } from '../src';

it('should return iterator with one item', () => {
    const expected = [0];
    expect([...range(1)]).toEqual(expected);
    expect([...range(0, 1)]).toEqual(expected);
});

it('should return iterator with ten items', () => {
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect([...range(10)]).toEqual(expected);
    expect([...range(0, 10)]).toEqual(expected);
    expect([...range(0, 10, 1)]).toEqual(expected);
});

it('should return iterator without items if start == end', () => {
    const expected: number[] = [];
    expect([...range()]).toEqual(expected);
    expect([...range(0)]).toEqual(expected);
    expect([...range(0, 0)]).toEqual(expected);
    expect([...range(10, 10)]).toEqual(expected);
});

it('should return reversed iterator with ten items', () => {
    const expected = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
    expect([...range(-10)]).toEqual(expected);
    expect([...range(0, -10)]).toEqual(expected);
    expect([...range(0, -10, -1)]).toEqual(expected);
});

it('should return iterator with custom step', () => {
    expect([...range(0, 10, 2)]).toEqual([0, 2, 4, 6, 8]);
    expect([...range(-10, 10, 3)]).toEqual([-10, -7, -4, -1, 2, 5, 8]);
});

it('should return reversed iterator with custom step', () => {
    expect([...range(0, -10, -2)]).toEqual([0, -2, -4, -6, -8]);
    expect([...range(10, -10, -3)]).toEqual([10, 7, 4, 1, -2, -5, -8]);
});
