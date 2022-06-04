function getSecondLargest(nums) {
    // Complete the function
    nums = new Set(nums);
    nums = Array.from(nums); 
    nums.sort(comparator);
    return nums[nums.length - 2]
}

function comparator(a,b) {
    return a-b; 
} 
