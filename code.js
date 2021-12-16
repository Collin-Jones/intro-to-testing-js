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

// function sayHello(){
//     return "sayHello";
// }

// Exercise #2 Ensure our function returns the right data type.
//     New tests will each have their own expect, it, the describe
// Step 1: The smallest possible test, now that the function exists, is to ensure that calling the function gives us a string. Inside of tests.js, add an assertion to sayHello that it "should return a string when called.". The test should look similar to expect(typeof sayHello()).toBe("string")
// Step 2: Run all tests to make sure that the new test starts red.
//     Step 3: Have your sayHello function return a string. The simplest code and smallest change possible is to return an empty string return "".
//     Step 4: Now, run all the tests to ensure that the previously red test is now turned green by our impelementation.
//     Step 5: There's nothing to refactor.
// Step 6: Repeat (Repeat the process by moving to build the next, small test)
// Always: Add, commit, and push your work to GitHub.

// function sayHello(name){
//     return "Hello, " + name + "!"
// }

// Exercise #3 - Add a test to confirm actual vs. expected output.
//     Step 1: How that the function exists and returns the right data type, let's add our first realistic assertion. In tests.js, assert that sayHello("Jane") returns "Hello, Jane!". Our first test should be super simple and super small.
// Step 2: Run all tests and make sure that this newly added test is red.
//     Step 3: If the test wants us to return "Hello, Jane!" then literally write return "Hello, Jane!"; because that's the simplest way to green a test looking for "Hello, Jane!".
// Step 4: Run all tests. They should all be green at this point.
//     Step 5: It's too soon to refactor.
// Step 6: Repeat step means to add another test, so let's move to the next exercise.

//skipped this one



// Exercise #4 Add another small, simple test
// Step 1: In tests.js, assert that sayHello("Alex") returns "Hello, Alex!". Our first test should be super simple and super small. This means that our next test should look like expect(sayHello("Alex")).toBe("Hello, Alex!").
//     Step 2: Run all tests and make sure that this newly added test is red.
//     Step 3: It's challenging not to jump to the "correct" answer already, but let's stay close to the TDD method. Write just enough code to green the test. This means making sure that the sayHello function definition inside of code.js takes an an input argument. If input === "Alex", then we return "Hello, Alex!" else return "Hello, Jane!". Don't get too fancy. A cornerstone of TDD is refactoring only once you have a handful of green tests, not just one or two with new inputs.
// Step 4: Run all tests, expecting that all are now green. Does each test turn green? If so, then we can proceed. We can't refactor unless we have greened a test, even with a hard-coded implementation.
// Step 5: If you feel the urge to refactor already, hang on! Let's add one more test!
// Step 6: Repeat the TDD cycle, so let's add another test in the next exercise.

function sayHello(name){
    return "Hello, " + name + "!"
}

// Exercise #5 One more test before refactoring...
// Step 1: Add another (tiny) assertion! In tests.js, assert that sayHello("Pat") returns "Hello, Pat!". Since our tests should be super simple, the assertion should be expect(sayHello("Pat")).toBe("Hello, Pat!")
// Step 2: Run all tests and make sure that this newly added test is red and failing.
//     Step 3: Again, you may feel the urge to jump to the "correct" answer already. Let's stay on target. Write just enough code to green the test. For this case, just enough code means adding another conditional such that if input === "Pat", then the function should have return "Hello, Pat!".
// Step 4: Run all tests. Does each test turn green? If so, then we can proceed.
//     Step 5: Refactor! It's definitely refactoring time!

















