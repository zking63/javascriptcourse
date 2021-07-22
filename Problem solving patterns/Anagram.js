//given two strings write a function to determine if 
//the second string is an anagram of the first. 
function Anagram(str, str2){
    console.log("str " + str.length);
    console.log("str2 " + str2.length);
    if(str.length != str2.length){
        return false;
    }
    let counter1 = {};
    let counter2 = {};
    //this for of loop goes through the values of str (not the index)
    for (let val of str){
        //this sets a variable within the counter and assigns it a value of +1 with each count
        counter1[val] = (counter1[val] || 0) + 1;
        console.log("counter[val] " + counter1[val]);
        console.log("val " + val);
    }
    for (let val of str2){
        //this sets a variable within the counter and assigns it a value of +1 with each count
        counter2[val] = (counter2[val] || 0) + 1;
        console.log("counter2[val] " + counter2[val]);
        console.log("val " + val);
    }
    //this shows the index of values at the key (key was set with counter[val])
    for (let key in counter1){
        if (!(key in counter2)){
            console.log("key " + key);
            return false;
        }
        if (counter1[key] !== counter2[key]){
            return false;
        }
    }
    console.log(counter1);
    console.log(counter2);
    return true;
}
console.log(Anagram([1,2,4,5,1,7], [1,1,2,4,5,6]));