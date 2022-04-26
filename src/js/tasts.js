//1 (???)

let str = "String";
let nums="";
let firstFunction = () => {
  for (let i = 0; i < str.length; i++) {
    nums += str[i].repeat(2);
  }
  return nums;
};
console.log(firstFunction());

//2

let firstName = "karpuk";
let secondName = "maksim";
console.log(`${firstName[0]}.${secondName[0]}`.toUpperCase());

//3

let arr = ["yoda", "best", "has"];
let first = arr.map(function (item, index, array) {
  if (index === 0) {
    return item[0];
  } else if (index === 1) {
    return item[1];
  } else if (index === 2) {
    return item[2];
  }
});
console.log(first);

//4

let arrExample = [1, 2, 3, 4, -5, 20];
let arrAnswer = arrExample.reduce(function (prValue, item, index, array) {
  if (item >= 0) {
    return item + prValue;
  } else {
    item = 0;
    return item + prValue;
  }
}, 0);
console.log(arrExample);
console.log(arrAnswer);

// 5

let newArr = [1, 2, 3, 4, 5];
let num;
let newArrAnsw = newArr.map(function (item, index, array) {
  return (num = item + (index + 1));
});
console.log(newArrAnsw);

//6

let numbers = [10, 2, 6, 1, 3, 5, 8, 4, 9, 11, 12];
console.log(numbers);
let result = numbers.sort((a, b) => a - b);
console.log(result);
let myFunction = () => {
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i + 1] !== result[i] + 1) {
      return result[i] + 1;
    }
  }
};
console.log(myFunction());

//7

let newArray = [-122, 1, 5, 9, 165, -154, -350];
console.log(Math.min.apply(null, newArray));

//8

let myNewArray = [1, -2, 3, -4, 5];
console.log(myNewArray);
let numFunction = () => {
  for (let i = 0; i < myNewArray.length; i++) {
    myNewArray[i] *= -1;
  }
  return myNewArray;
};
console.log(numFunction());

//FizzBuzz

let mainFunction = (n) => {
  for (let i = 0; i < n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
console.log(mainFunction(16));
