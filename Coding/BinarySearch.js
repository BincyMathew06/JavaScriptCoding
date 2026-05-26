function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found at index mid
      } else if (arr[mid] < target) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }
  
    return -1; // Target not found
  }
  
  // Example
  const nums = [1, 3, 5, 7, 9, 11];
  console.log(binarySearch(nums, 7));  // Output: 3
  console.log(binarySearch(nums, 6));  // Output: -1
  