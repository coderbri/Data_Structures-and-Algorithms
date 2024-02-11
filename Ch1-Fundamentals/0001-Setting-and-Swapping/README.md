# 0001 Setting and Swapping

- **Category:** Fundamentals, Set I
- **Description:** Initializes two variables (`myNumber` and `myName`) and swaps their values.

```js
let myNumber = 42;
let myName = "Bri";

[ myNumber, myName ] = [ myName, myNumber ];

console.log( "myNumber after swapping:", myNumber );
console.log( "myName after swapping:", myName );
```

## Steps Taken (JavaScript)

1. **Setting Initial Values**: Initially, we assign the value 42 to a variable called `myNumber` and assign the string "YourName" to a variable named `myName`. Think of these as putting stickers labeled with these values on two different boxes.

2. **Swapping**: Now, imagine we have two boxes labeled `myNumber` and `myName`, just like before. Instead of using a temporary box, JavaScript allows us to directly swap the contents of these boxes without needing an extra one. It's like magically switching the stickers on the boxes.

3. **Using Destructuring Assignment**: We use a special feature called "destructuring assignment" in JavaScript. This feature lets us simultaneously assign values from an array to variables. In our case, we're creating an array with the values of `myName` and `myNumber`, and then assigning them back to `myNumber` and `myName` in reverse order. It's like taking two stickers off the boxes at once and putting them back, but in the opposite order.

4. **Completing the Swap**: With this single line of code, JavaScript swaps the values between `myNumber` and `myName` without needing to use a temporary variable or extra steps.

5. **Checking the Results**: Finally, we check the labels on the boxes to see that `myNumber` now holds the value "YourName", and `myName` holds the value 42.

In simpler terms, JavaScript provides a neat trick called "destructuring assignment" that allows us to swap the contents of two boxes (variables) quickly and easily. It's like rearranging the labels on two boxes without needing a third box to help with the swap.



## Steps Taken (Python)

1. **Setting Initial Values**: First, we set `myNumber` to 42 and `myName` to "YourName". It's like putting these values into two separate boxes labeled `myNumber` and `myName`.

2. **Swapping**: Now, imagine we have two boxes, one labeled `myNumber` and the other labeled `myName`. We want to exchange the contents of these boxes, but to do that, we need a temporary box to hold one of the values while we swap the other.

3. **Using a Temporary Box**: We introduce a temporary box called `temp`. We put the value from `myNumber` into `temp`, so now `temp` has 42, and `myNumber` is empty. Then we put the value from `myName` into `myNumber`, so now `myNumber` has "YourName", and `myName` is empty.

4. **Completing the Swap**: Finally, we put the value from `temp` (which is 42) into `myName`, so now `myName` has 42, and `temp` is empty. This completes the swap.

5. **Checking the Results**: We check the contents of the boxes to see that `myNumber` now has "YourName" and `myName` has 42.

In simple terms, it's like exchanging the contents of two labeled boxes by temporarily storing one item in another box before completing the exchange.