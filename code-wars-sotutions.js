// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
/*
P- Inputs an integer and lists the sum of all multiples of 3 or 5
E- Input: 10, Output: 23
D- Arrays, Reduce, For Loops
A- Make a sum variable set to 0
   Make a for loop that loops from 3 up to the integer
   if the number were on is a multiple of 3 or 5, add it into sum
   return sum
C
*/
function solution(number){
  let sum = 0;
  for(let i = 3; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum
}



/*
P- Input: An array of integers, Output: Unique integer
E- Input: [ 1, 1, 1, 2, 1, 1 ], Output:2
D- Arrays, Integers 
A- Sort array from smallest to largest
   check if the first one is different from the second, if it is, return the first one, else return the last
C
*/
function findUniq(arr) {
  arr.sort((a,b) => a -b)
  return arr[0] !== arr[1]? arr[0]: arr[arr.length-1];
}

/*
P - given array of nums (all even or all odd, except 1)
E - [2, 4, 0, 100, 4, 11, 2602, 36]
  Should return: 11 (the only odd number)
D - .filter, 2 variables (even, odd), filter ll odds in variable, 
  filter all odd in variable, 
  if the even length = 1 return evens array[0], if not return odds[1]*/
function findOutlier(integers){
  const evens =  integers.filter(a => a % 2 === 0)
  const odds = integers.filter(a => a % 2 !== 0)
  return evens.length === 1? evens[0]: odds[0];
}

/*P - given array of nums (all even or all odd, except 1)
E - [2, 4, 0, 100, 4, 11, 2602, 36]
  Should return: 11 (the only odd number)
D - .filter, 2 variables (even, odd), filter ll odds in variable, 
  filter all odd in variable, 
  if the even length = 1 return evens array[0], if not return odds[1]*/
function findOutlier(integers){
  const evens =  integers.filter(a => a % 2 === 0)
  const odds = integers.filter(a => a % 2 !== 0)
  return evens.length === 1? evens[0]: odds[0];
}