1. It will print "3" on line 12. After the for loop, i is equal to 3, and we use var to declare i, so i is available outside the for loop's blocks.
2. It will print "150" on line 13. In the last iteration, discountedPrices is equal to 300*(1-0.5) = 150. We use var to declare discountedPrices, so it is available outside the block.
3. It will print "150" on line 14. In the last iteration, finalPrice is equal to rounded discounted prices, so it is equal to 150. We use var to declare the variable, so it is available.
4. It will return an array list, which contains discounted prices, [50,100,150].We use var to declare the variable, so it is available.
5. The code causes error. We use let to declare i in the for loop, so i is not accsible outside the for loop. On line 12, i is not defined, so it will cause error.
6. The code causes error. We use let to declare discountedPrice in the for loop, so discountedPrice is not accsible outside the for loop. On line 13, discountedPrice is not defined, so it will cause error.
7. It will print 150. The variable is declared outside the for loop, so it is vaild in the function.
8.  It will return an array list, which contains discounted prices, [50,100,150].The variable is declared outside the for loop, so it is vaild in the function.
9. The code will cause error. i is not defined outside the for loop because we use let to declare i. 
10. It will print 3. The length is the length of the array, and the length of the array is 3
11. It will return an array list, which contains discounted prices, [50,100,150]. Every time the program calculate the discountedPrice, we will push the value to the array.
12. 
 A. console.log(student.name);
 B. console.log(student["Grad Year"]);
 C. student.greeting();
 D. console.log(student["Favorite Teacher"]);
 E. console.log(student.courseLoad[0]);

13. 
A. '3' + 2 = '32' integers map to their exact string representation
B. '3' - 2 = 1 The type is number because the string will convert to integer
C. 3 + null = 3, the type is number because null will convert to 0.
D. ‘3’ + null = '3null' The type is string because null will convert to string
E. true + 3 = 4 The type is number  because true will convert to 1.
F. false + null = 0 The type is number because false will convert to 0, and null will be 0.
G. '3' + undefined = '3undefined' The type is string because undefined will convert to string.
H. '3' - undefined = NaN. String subtract does not make sense. Computer does not understand it.
Subtraction only works between two numbers. Undefined is not a number.

14. 
A. ‘2’ > 1. True String 2 becomes a number 2
B. ‘2’ < ‘12’ false The first digit of '2' is larger than the first digit of '12' 
C. 2 == ‘2’ True. String 2 becomes a number 2
D. 2 === ‘2’ True. Stirng 2 becomes a number 2
E. true == 2 False. True becomes number 1.
F. true === Boolean(2) True. The value and type are the same.

15. == checks value regardless the datatype. 
    === checks the value and also check the datatype.

17. It is going to return a array. The value in the array is twice as the original array. In the new array, we will call doSomethings function, and doSomethings will return a number that is twice as the parameters. Then we push the new value to the new array. After iterations, we are going to return the new array. 

19. 
The output is 
1
4
3
2

