/*
OPERATOR
1. Arithmetic
2. Logical
3. Assignment
*/

/*
ARITHMETIC
1. Angka
2. Operasi aritmatika
Operator:
1. + --> Addition 
2. - --> Substraction 
3. / --> Division
4. * --> Multiplication
5. ++ --> Increment  (Penjumlahan 1)
6. -- --> Decrement (Pengurangan 1)
7. ** --> Exponential
*/

let angka = 5;
angka++; // 6
angka + 1; // 6

angka--; // 4
angka - 1; // 4

angka ** 2;
3 ** 4;

// Operand
let angka1 = 10;
angka1 = 20 + 99; // 10 + 20 = 30

/* 
LOGICAL --> Logika

Operator:
1. ! --> Negation (Tidak sama dengan) 
2. && --> AND
3. || --> OR

Logika Matematika
*/

let number1 = 5;
let number2 = 7;
let result1 = number1 < number2; // true
let result2 = number1 > number2; // false

console.log("Before Negation", result1);

let negationResult = !result1;
console.log("Negation Result", negationResult);
