// Assignment 
// 1: Conditionals & Loops1. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for(var i =1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}


// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var z=0;
sum =0;
while(z<1000){
    z++
    if(z%3===0 || z%5===0){
    sum +=z
   }
}
console.log(sum)



// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

let y =0;
while(y<=20){
    y++
    if(y%2==0){
        console.log(`${y} is even`)
    }
    else{
        console.log(`${y} is odd`)
    }
}


// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
let num = [-2, 4,-5, 6,0]
var large = 0
for(var x =0; x<num.length; x++){
    if(large < num[x]){
       large=num[x]
    }
}
console.log(large)


// 5.Using conditional statements, write a JavaScript program to find the largest of the following two numbers: 10 & 40.
var num1 =10;
var num2 =40;

if(num1<num2 && num2>num1){
    console.log(`${num2} is the largest`)
}
else{
    console.log(`${num1} is the smallest`)
}


// 6. Write a JavaScript program to find leap years from 2000 to 2022
var lyear=2000;
while(lyear<=2022){
    lyear++
    if(lyear%4==0 || lyear%400==0 && lyear%100!=0){
        console.log(lyear)
    }
}
