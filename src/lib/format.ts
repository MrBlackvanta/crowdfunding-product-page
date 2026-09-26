export const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const count = new Intl.NumberFormat("en-US");

const compactMoney = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

const compactCount = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const compactFrom = 1_000_000;

type Shortened = { text: string; title?: string };

function shorten(exact: Intl.NumberFormat, compact: Intl.NumberFormat) {
  return (value: number): Shortened =>
    value < compactFrom
      ? { text: exact.format(value) }
      : { text: compact.format(value), title: exact.format(value) };
}

export const shortMoney = shorten(money, compactMoney);
export const shortCount = shorten(count, compactCount);
