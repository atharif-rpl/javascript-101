/*
OPERATOR
1. Arithmetic
2. Logical
3. Assignment
4. Comparison
5. Conditional / Ternary
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
8. % --> Modulus

Binary
+, -, /, *, **, %

Unary
++, --
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

let result = 5 % 2;

/* 
LOGICAL --> Logika

Operator:
1. ! --> Negation (Tidak sama dengan) 
2. && --> AND
3. || --> OR

Logika Matematika

AND (Keduanya)
X       |       Y       |       Z
-----------------------------------
B       |       B       |       B
B       |       S       |       S
S       |       B       |       S
S       |       S       |       S

OR (Salah satu)
X       |       Y       |       Z
-----------------------------------
B       |       B       |       B
B       |       S       |       B
S       |       B       |       B
S       |       S       |       S

*/

let number1 = 5;
let number2 = 7;
let result1 = number1 < number2; // true
let result2 = number1 > number2; // false

// console.log("Before Negation", result1);

let negationResult = !result1;
// console.log("Negation Result", negationResult);

let orOperation = result1 || result2;
// console.log("orOperation", orOperation);

let andOperator = result1 && result2;
// console.log("andOperator: ", andOperator);

// console.log(false || true && false);

/* 
ASSIGNMENT --> Assign value
1. =
2. +=
3. -=
4. *=
5. /=
6. **=
*/

let assignment1 = 10;
// assignment1 = assignment1 + 2;
assignment1 **= 2;
// console.log(assignment1)
let contoh = 2 + 5 * 7;

/* 
Comparison --> Perbandingan
1. == --> membandingkan value 
2. === --> membandingkan value & data type
3. != --> Tidak sama dengan
4. >= 
5. <= 
*/

let data1 = 50
let data2 = 10;