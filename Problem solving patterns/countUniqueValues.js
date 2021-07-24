//implement a function called countUniqueValues which accepts a sorted array, and counts the
//unique values in the array. The can be negative numbers in the array, but it will always be sorted
//this is O of N
var arr1 = [1,1,1,2,3,4,5,5,6,11,12,12];
function countUniqueValues(arr){
    let left = 0;
    let right = left + 1;
    let counter = 0;
    if(left == 0 && right == arr.length){
        counter++;
    }
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
    return counter;
}
console.log(countUniqueValues([1])) 
console.log(countUniqueValues([1,1,1,2,3,4,5,5,6,11,12,12]))

//refactor for simplicity
function countUniqueValuesRe(arr){
    var i = 0;
    for (var j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(countUniqueValuesRe(arr1));
console.log(countUniqueValuesRe([1])); //this edge case works here!