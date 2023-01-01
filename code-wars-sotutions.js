// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
/*
P- Inputs an integer and lists the sum of all multiples of 3 or 5 leading up to that number from 0; 
E- Input: 10, Output: 23
D- Arrays, Reduce, For Loops
A- Make a sum variable set to 0
   Make a for loop that loops from 3 up to the integer
   if the number we're on is a multiple of 3 or 5, add it into sum
   return sum
C
*/
function solution(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum
}

/*
P - Given an array of names, we must output a different string of text depending on the amount
    of names in the array.
E - []                                -->  "no one likes this"
    ["Peter"]                         -->  "Peter likes this"
    ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
D - Arrays, Strings
A - If arrays length is 0? return `no one likes this`
    else if arrays length is 1? return `${array[0]} likes this`
    else if arrays length is 2? return `${array[0]} and ${array[1]} like this`
    else if arrays length is 3? return `${array[0]}, ${array[1]} and ${array[2]} like this`
    else return `${array[0]}, ${array[1]} and ${array.length - 2} others like this`
C -
*/
function likes(names) {
  return names.length === 0 ? `no one likes this` :
    names.length === 1 ? `${names[0]} likes this` :
    names.length === 2 ? `${names[0]} and ${names[1]} like this` :
    names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

/*
P- Given an array of integers, return the only unique integer
E- Input: [ 1, 1, 1, 2, 1, 1 ], Output:2
D- Arrays, Integers 
A- Sort array from smallest to largest
   check if the first one is different from the second, if it is, return the first one, else return the last
C
*/
function findUniq(arr) {
  arr.sort((a, b) => a - b)
  return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1];
}

/*
P - Given array of numbers (all even or all odd, except 1), we must find and print out the only outlier. Either the 1 odd number or the one even number. 
E - Input: [2, 4, 0, 100, 4, 11, 2602, 36]
    Output: Should return: 11 (the only odd number)
D - Arrays, integers
A - Initialize an even variable and set it to all even numbers using filter
    Initialize an odd variable and set it to all odd numbers using filter
    return the array with only 1 number in it
C -
*/
function findOutlier(integers) {
  const evens = integers.filter(a => a % 2 === 0)
  const odds = integers.filter(a => a % 2 !== 0)
  return evens.length === 1 ? evens[0] : odds[0];
}

/*
P - Given a string of numbers and letters, we must return a number of the amount of characters
    that show up more than once
E - "aabbcde" -> 2 
    "RandyRobber" -> 2
D - Objects, strings
A - Initialize a result variable
    Initialize a counter object
    We make everything lowercase
    We loop through the string and create a frequency counter
       to count how many times a character shows up
    we loop through the object with a for in loop
    if a key has a value more than 1, add 1 to the result variable
    Return the result variable
C -
*/
function duplicateCount(text) {
  let result = 0;
  const counter = {};
  text = text.toLowerCase();
  for (let char of text) {
    char in counter ? counter[char]++ : counter[char] = 1;
  }
  for (let index in counter)
    if (counter[index] > 1) result++;
  return result
}

/*
P - Takes in an array of elements then returns the same array with all the zeros
    at the end
E - ['hi',0,43,'bob','hello',0,'0',1,232] => ['hi',43,'bob','hello','0',1,232,0,0]
D - Arrays
A - we create a new blank array
    we create a counter variable
    we loop through the original array
    if the index is not a zero, push it in the array, if it is, add 1 to counter
    then add 0 to the end of the new array for as big the counter variable is
    return new array
C -
*/
function moveZeros(arr) {
  let result = [];
  let counter = 0;
  for (let index of arr) {
    index !== 0 ? result.push(index) : counter++;
  }
  for (let i = 1; i <= counter; i++) result.push(0);
  return result;
}

/*
P - Takes a string and for each word, it moves the first letter of each word to the end of it
    then adds ay to the end of it
E - 'Pig latin is cool' => 'igPay atinlay siay oolcay'
D - Strings, Arrays
A - Make an empty array for the result
    Split the string at every space
    Iterate through the split string
    With each index, use substring to add every letter except the first
    plus the first letter plys 'ay'
    If its not a letter, just push it regularly 
    return result
C -
*/
function pigIt(str) {
  let result = [];
  str = str.split(' ');
  for (let word of str) {
    /[\w]/.test(word) ? result.push(`${word.substring(1,word.length)}${word[0]}ay`) :
      result.push(word)
  }
  return result.join(" ")
}