function mergeArrays(arr1, arr2)
{
    arr1 = arr1.concat(arr2); // merge two arrays into one
    arr1 = [...new Set(arr1)]; // remove duplicates
    return arr1.sort(function(a, b){return a - b}); // sort by numbers
}