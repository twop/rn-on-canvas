export function check<T>(val: T | null | undefined): T {
  if (val === undefined || val === null) {
    throw new Error('fail');
  }

  return val;
}
