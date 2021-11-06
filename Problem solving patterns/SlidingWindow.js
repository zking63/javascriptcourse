//write a function that accepts a number called n and an array of numbers. 
//It must find the max sum of n digits that are next to one and other 
//in the array.
function maxSubArraySum(arr, num) {
    let maxNum = 0;
    let tempNum = 0;
    //if the num is less than the 0
    if (num < 0){
        return null;
    }
    //if the array is shorter than the number, then it's null
    if (arr.length < num){
        return null;
    }
    //set the first max
    for (let i = 0; i < num; i++){
        console.log(arr[i]);
        maxNum += arr[i];
    }
    console.log("maxNum" + maxNum);
    tempNum = maxNum;
    for (let i = num; i < arr.length; i++){
        console.log(arr[i - num]);
        console.log(arr[i]);
        tempNum = tempNum - arr[i - num] + arr[i];
        console.log(tempNum);
        maxNum = Math.max(maxNum, tempNum);
    }
    console.log("maxNum " + maxNum);
    return maxNum;
}
console.log(maxSubArraySum([1,2,-100,3,5,6], -3));