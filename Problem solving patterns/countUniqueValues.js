//implement a function called countUniqueValues which accepts a sorted array, and counts the
//unique values in the array. The can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr){
    let left = 0;
    let right = left + 1;
    let counter = 0;
    let check = 0;
    let test = 0;
    console.log("length: " + arr.length);
    while (right < arr.length){
        check++;
       //console.log("left: " + arr[left]);
       //console.log("right: " + arr[right]);
        if (arr[left] == arr[right]){
            right++;
            test++;
           // console.log("left: " + arr[left]);
           // console.log("right: " + arr[right]);
        }
        if (arr[left] != arr[right]){
            left++;
            arr[left] = arr[right];
            counter++;
            right++;
        }
    }
    console.log(arr);
    console.log(counter);
    console.log("check" + check);
    console.log("test" + test);
}
countUniqueValues([1,1,1,2,3,4,5,5,6,11,12,12]) //7