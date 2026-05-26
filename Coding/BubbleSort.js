function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
      n--; // Optimizes the loop slightly
    } while (swapped);
  
    return arr;
  }
  
  // Example
  const nums = [5, 2, 9, 1, 5, 6];
  console.log(bubbleSort(nums)); // Output: [1, 2, 5, 5, 6, 9]