// Once you're setup and comfortable, go to code.js and change the name of the helloWorld function to hello. Then refresh report.html in your browser.
//
// What do you notice about the test results?
//     What are some ways you think we could get the tests to turn green again?
//     Set the function name in code.js back to helloWorld and re-run the tests.
//     Inside of the helloWorld function in code.js, replace return "Hello, World!" with return "Hello".
//
//     Run the tests by refreshing report.html in your browser.
//     Which tests fail? Which tests are still green?
//     Set the implementation back to return "Hello, World!"
// Inside of the helloWorld function in code.js, change the line return "Hello, World!" to console.log("Hello, World!"). Then refresh report.html.
//
//     What happens to the tests? Identify which tests stay green and which ones turn red.
//     Why do you think that is?
//     Consider, what is the return value of a console.log? hint, it's always the same
// Consider, what is the return value of a return?
//     Fix your helloWorld implementation so that it greens all the tests.
//     Now, let's purposefully put a syntax error into the helloWorld function, to see what happens with the tests.
//
// Open up code.js and remove the closing curly brace from the end of the helloWorld function definition.
// Refresh report.html in your browser.
//     Fix the syntax error and confirm that tests are all green.
//     Now, go to code.js and replace the function statement for helloWorld with a function experession. Do all the tests stay green or not? Why or why not? Double check your syntax. These are interchangeable because functions are first class citizens in the JS language.

// function helloWorld() {
//     return "Hello, World!";
// }





// Our next exercise is to follow the TDD workflow to develop incremental tests and solutions for testing a sayHello() function that takes in a name as an argument and returns a string that says hello to that name.
//
//     Step 1: Let's write the smallest test possible. Open up tests.js. Add a describe, an it, and an expect to assert that sayHello is a defined function. Use your tests for helloWorld as a guide.
// Step 2: Run all the tests. At this point, we're expecting and hoping for a single, red failing test that we just now authored.
// Step 3: Now, let's go to code.js and create an empty function definition for sayHello.
// Step 4: Run all the tests. We're expecting all tests, including the new test for sayHello to be green.
// Step 5: Given that this is our first (tiny) test and our first implementation, there is not yet the opportunity to refactor.
//     Step 6: The last TDD step is to "repeat" the process of adding another test. What we're going to do is add our work to git and then move to Exercise #2, which is to add the second test.

function sayHello(){
    return "sayHello";
}



















