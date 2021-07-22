//given two strings write a function to determine if 
//the second string is an anagram of the first. 
function Anagram(str, str2){
    /*if(str.length !== str2.lenth){
        return false;
    }*/
    let counter1 = {};
    let counter2 = {};
    //this for of loop goes through the values of str (not the index)
    for (let val of str){
        //this sets a variable within the counter and assigns it a value of +1 with each count
        counter1[val] = (counter1[val] || 0) + 1;
        console.log("counter[val] " + counter1[val]);
        console.log("val " + val);
    }
    console.log(counter1);
    return true;
}
console.log(Anagram([1,2,4,5,1], [1,2,4,5,1]));