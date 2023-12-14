

//Q 1:  Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + lastName;
// console.log(`Hello ${firstName} ${lastName} `)


//Q 2: Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser
// let userFavMobMod = prompt("enter your fav mob model")
// let len = userFavMobMod.length;
// document.write(`my favorite phone is :${userFavMobMod} and length of string is : ${len}`);

//Q 3: Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser.

// let nationality = "pakistani";
// let nFound = nationality.slice(7,8);

// for (let i = 0; i < nationality.length; i++) {
//     let leng= nationality.lastIndexOf(nFound);
//     console.log(`string: ${nationality} index of "${nFound}" is ${leng}`);
// }

//Q 4: Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

// let welcome = "Hello World";
// let nFound2 = welcome.slice(9,10);

//  for (let i = 0; i < welcome.length; i++) {
//      let leng2= welcome.lastIndexOf(nFound2);
//      console.log(`string: ${welcome} Last index of "${nFound2}" is ${leng2}`);
//  }

//Q 5:Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser. 

// let nation = "Pakistani";
// let nFound3 = nation.slice(3,4)
// charNum = nation.charAt(3)
// charind = nation.indexOf(nFound3)
// console.log(`string: ${nation} charchter at index of "${charind}" is ${charNum}`);
 

//6. Repeat Q1 using string concat() method.

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + lastName;
// console.log(`Hello ${ firstName.concat( lastName)}  `)

//Q 7. Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser.
//  let city =  "Hyderabad";
//  let newCity = "Islam";
//  let repCity = city.slice(5,9)
//  document.write("city: ",city,"<br> After replacment :"+ newCity+repCity);
/* The `
` is a line break or newline character. It is used to start a new line in the output or display of
the program. */

// //Q 8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// let firstCh= message.slice(0,4);
// let replCh = message[2][4].replace("&");
// let lastlCh = message.slice(7);
// console.log(replCh);
// console.log(firstCh+replCh+lastlCh);


//Q 9: Write a program that converts a string “472” to a number
//472. Display the values & types in your browser.
// var str = "472";
// document.write("value: "+str +"<br>" +"type of " +typeof(str)+ "<br>");
// var num = 472;
// document.write("value: "+ num +"<br>" +"type of " +typeof(num));


//10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var userIn = "peanuts";
// console.log("User input: "+ userIn);
// console.log("Upper Case: "+ userIn.toUpperCase());


//Q 11. Write a program that takes user input. Convert and
//show the input in title case.
// var nortxt = "javascript";
// console.log("User input " + nortxt);
// console.log("Title case " + nortxt[0].toUpperCase()+nortxt.slice(1));

//Q 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
numStr = num.toString();
// console.log("number: "+num);
result = numStr[2].replace;

// var num1= numStr[2]; 
// var num2= num.



//Q 16: Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.ْ
/* The code is iterating over each character in the string "University of Karachi" and printing each
character to the console. */

// var university = 'University of Karachi';
// for (let i = 0; i < university.length; i++) {
//     console.log(university[i]); 
    
// }
