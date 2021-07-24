//implement a function called countUniqueValues which accepts a sorted array, and counts the
//unique values in the array. The can be negative numbers in the array, but it will always be sorted
//this is O of N
function countUniqueValues(arr){
    let left = 0;
    let right = left + 1;
    let counter = 0;
    while (right < arr.length){
        if (arr[left] == arr[right]){
            right++;
        }
        if (arr[left] != arr[right]){
            left++;
            arr[left] = arr[right];
            counter++;
            right++;
        }
    }
}
countUniqueValues([1,1,1,2,3,4,5,5,6,11,12,12]) //8
countUniqueValues([1,1])