  //Challenge 1 for Typescript Challenge
  function findLargestContinuousSum(arr: number[]): number {
    let maxSum = arr[0];
    let currentSum = arr[0];

    // For Loop
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};