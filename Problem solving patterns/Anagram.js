//given two strings write a function to determine if 
//the second string is an anagram of the first. 
//this is O(N)
function Anagram(str, str2){
    if(str.length != str2.length){
        return false;
    }
    let counter1 = {};
    let counter2 = {};
    //this for of loop goes through the values of str (not the index)
    for (let val of str){
        //this sets a variable within the counter and assigns it a value of +1 with each count
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for (let val of str2){
        //this sets a variable within the counter and assigns it a value of +1 with each count
        counter2[val] = (counter2[val] || 0) + 1;
    }
    //this shows the index of values at the key (key was set with counter[val])
    for (let key in counter1){
        if (!(key in counter2)){
            return false;
        }
        if (counter1[key] !== counter2[key]){
            return false;
        }
    }
    return true;
}
Anagram([1,2,4,5,1,7,8,8], [1,8,7,1,2,4,5,8]);