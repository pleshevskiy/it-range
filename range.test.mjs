import { assertEquals } from "https://deno.land/std@0.104.0/testing/asserts.ts";
import { range } from "./range.mjs";

Deno.test("should return iterator with one item", () => {
  const expected = [0];
  assertEquals([...range(1)], expected);
  assertEquals([...range(0, 1)], expected);
});

Deno.test("should return iterator with ten items", () => {
  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  assertEquals([...range(10)], expected);
  assertEquals([...range(0, 10)], expected);
  assertEquals([...range(0, 10, 1)], expected);
});

Deno.test("should return iterator without items if start == end", () => {
  const expected = [];
  assertEquals([...range()], expected);
  assertEquals([...range(0)], expected);
  assertEquals([...range(0, 0)], expected);
  assertEquals([...range(10, 10)], expected);
});

Deno.test("should return reversed iterator with ten items", () => {
  const expected = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
  assertEquals([...range(-10)], expected);
  assertEquals([...range(0, -10)], expected);
  assertEquals([...range(0, -10, -1)], expected);
});

Deno.test("should return iterator with custom step", () => {
  assertEquals([...range(0, 10, 2)], [0, 2, 4, 6, 8]);
  assertEquals([...range(-10, 10, 3)], [-10, -7, -4, -1, 2, 5, 8]);
});

Deno.test("should return reversed iterator with custom step", () => {
  assertEquals([...range(0, -10, -2)], [0, -2, -4, -6, -8]);
  assertEquals([...range(10, -10, -3)], [10, 7, 4, 1, -2, -5, -8]);
});
