function solution(nums){
    if(nums==null || nums.length==0) return []; //if nums is undefined or it's an empty array just return empty array
    else return nums.sort(function(a, b){return a-b}); //method sort() automaticly take a and b from array nums and if a>b it means that a have to be after b in returned array, but if a<b a is going to be before b in the sorted array. if a===b there is no change
}