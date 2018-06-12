// use a for loop to log numbers 1-10.
var i;

for (i=0; i < 11; i++) {
  console.log(i);
}
// use a for loop to log numbers 11-0.
var i;

for (i=11; i > 0 ; i--) {
  console.log(i);
}

// while loop counting to 10
x=0;
while(x < 10){
  console.log(x);
   x++;
}

// while loop counting down from 10
x=10;
while(x > 0){
  console.log(x);
   x--;
}

// do while count to 10

var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i ;
} while (i < 10);

console.log(result);

// do while loop count 10 down to 0  :(

var result = 0;
var i = 10;

do {
  i = i - 1;
  result = result - i ;
} while ( i < 10 );

console.log(result);



// for in loop itterating over an array: 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var arrayLength = numbers.length;
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
};


