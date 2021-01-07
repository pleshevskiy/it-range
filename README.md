# it-range

Simple and minimalistic range iterator object


## Installation

```bash
npm install -s it-range
```


## Usage

The lib provides range function that returns iterator object.
It's mean that you can use it in `for..of` loop

```typescript
for (const num of range(10)) {
    console.log(num);
}
```

also you can transform into array.

```typescript
console.log([...range(0, 10, 2)])

Array.from(range(0, 10)).forEach(num => cosole.log(num));
```


## References

```
range(start[, end[, step]]) -> Iterator
```

- When you use only one argument it's mean schema – `..end` ← where end actually start :)
- In other cases – `start..end`
- Returns reversed range if end < start
