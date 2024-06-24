export * from "./icon";

// 小于10前面补0
export const zeroFill = (num: number): string =>
  num < 10 ? "0" + num : num.toString();

export const checkNumber = (
  value: number,
  minLimit: number,
  maxLimit: number
) => {
  // 检查必须为整数
  value = Math.floor(value);
  if (value < minLimit) {
    value = minLimit;
  } else if (value > maxLimit) {
    value = maxLimit;
  }
  return value;
};
