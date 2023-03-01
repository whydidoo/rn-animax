type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type SpactingProps = `${IntRange<0, 20>}`;

const spacing = {} as Record<SpactingProps, number>;

new Array(20).fill(1).forEach((_, index) => {
  spacing[`${index}` as SpactingProps] = index * 4;
});

export { spacing };
