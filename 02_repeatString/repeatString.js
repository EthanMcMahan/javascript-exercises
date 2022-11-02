const repeatString = function(str, num) {
let word = "";
    // i = 0, word = "", ${word}${str} = "hey"   
    // i = 1, word = "hey", ${word}${str} = "heyhey"
    for (let i = 0; i < num; i++) {
        console.log(i);
        word = `${word}${str}`;
    }
 return word;
}

// Do not edit below this line
module.exports = repeatString;
