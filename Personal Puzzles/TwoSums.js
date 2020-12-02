/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

*/

const twoSum = (nums, target) => {
  // create and object to store a data point as we move through the array
  let storageObj = {}

  for(let [index, num] of nums.entries()){
      // if num is the same as the integer in our object. Then we have a result.
      if (storageObj[num] !== undefined) {
          return [storageObj[num], index];
      };
      // keep trying the above until a match is found
      storageObj[target-num] = index;
  };
};

let numArr  = [3,2,4]
let target = 6

console.log(twoSum(numArr, target))