function smallerNumbersThanCurrent(nums: number[]): number[] {
  const copy: number[] = nums.slice();
  // clone array because sort overwrites it
  copy.sort();
  // no need to create a separate result array, copy array can be reused after hashmap filling

  const map = new Map<number, number>();

  // important to check if number was not added before to avoid overwriting
  for (let i = 0; i < copy.length; i++) {
    if (!map.has(copy[i])) {
        map.set(copy[i], i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    copy[i] = map.get(nums[i]);
  }

  return copy;
}

export function testSmallerNumbersThanCurrent() {
  const result = smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
  console.log("testSmallerNumbersThanCurrent");
  console.log(result);
}
