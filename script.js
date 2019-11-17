//exercise 1

//Sum
console.log("Exercise 1");

let array = [3,4,5,6,7,8,372,44,221,441,22,37,432];
function getSum (arr) {
    let S = 0;
    for (let i = 1; i < arr.length; i++) {
        S = S + arr[i];
    }
    return S;
}
console.log("Sum = " + getSum(array));

//Find min element in array

function getMin (arr) {
    let min = Math.min(...arr);
    return min;
}
console.log("Min = " + getMin(array));

//Find max element in array

function getMax (arr) {
    let max = Math.max(...arr);
    return max;
}
console.log ("Max = " + getMax(array));

//replace Max element with Min element in array

console.log (array);
function replaceMaxMinInArray (arr, max, min) {
    let maxIndex = arr.indexOf(max);
    arr.splice(maxIndex, 1, min);

    let minIndex = arr.indexOf(min);
    arr.splice(minIndex, 1, max);

    return arr;
}
console.log (replaceMaxMinInArray(array,getMax(array),getMin(array)));

//exercise 2
console.log("Exercise 2");

function getFunction () {
    let nameWork = "Google";
    function startDay (nameWork, callback) {
        console.log (`Started day in ${nameWork}`)
        callback(nameWork);
    }
    
    function endDay (nameWork) {
        console.log (`Finished day in ${nameWork}`);
    }
    return startDay(nameWork,endDay);
}

getFunction();

//exercise 3
console.log("Exercise 3");

let arrayReplace = [3,4,5,6,7,8,372,44,221,441,22,37,432];
console.log(array);
function replaceNumbers(arr) {
    for(let i = 1; i < arr.length; i++) {
        if (arr[i].toString().indexOf('37') > -1) {
            arr[i] = "foobar"
        } else if (arr[i].toString().indexOf('3') > -1) {
            arr[i] = "foo"
        } else if (arr[i].toString().indexOf('7') > -1) {
            arr[i] = "bar"
        }
    }
    console.log(arr);
}

replaceNumbers(arrayReplace);

//exercise 4 

console.log("Exercise 4")
let fruit1 = "banana";
let fruit2 = "apple";
function compareStrings(strFirst,strSecond) {
    console.log("First string: " + strFirst);
    console.log("Second string: " + strSecond);
    let S = 0;
    if (strFirst.length > strSecond.length) {
         for (let i = 0; i < strFirst.length; i++) {
             for (let j = 0; j < strSecond.length; j++) {
                 if(strFirst[i] == strSecond[j]) {
                     S++;
                 }
             }
         }
    } else {
         for (let i = 0; i < strSecond.length; i++) {
            for (let j = 0; j < strFirst.length; j++) {
                if(strSecond[i] == strFirst[j]) {
                    S++;
                }
            }
        }
    }
    console.log("Count of same letters = " + S);
    let percent = S / (strFirst.length + strSecond.length) * 100;
    console.log("Percent of same letters in words = " + percent);
}
compareStrings(fruit1,fruit2);
