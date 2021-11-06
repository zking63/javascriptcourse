function maxSubArraySum(arr, num) {
    console.log(arr);
    console.log(num);
    let maxNum = 0;
    let tempNum = 0;
    if (arr.length < num){
        return null;
    }
    for (let i =0; i < num; i++){
        console.log(arr[i]);
    }
}
maxSubArraySum([1,2,3], 3);