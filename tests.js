// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
//
// });

// Our next exercise is to follow the TDD workflow to develop incremental tests and solutions for testing a sayHello() function that takes in a name as an argument and returns a string that says hello to that name.
//
//     Step 1: Let's write the smallest test possible. Open up tests.js. Add a describe, an it, and an expect to assert that sayHello is a defined function. Use your tests for helloWorld as a guide.
// Step 2: Run all the tests. At this point, we're expecting and hoping for a single, red failing test that we just now authored.
// Step 3: Now, let's go to code.js and create an empty function definition for sayHello.
// Step 4: Run all the tests. We're expecting all tests, including the new test for sayHello to be green.
// Step 5: Given that this is our first (tiny) test and our first implementation, there is not yet the opportunity to refactor.
//     Step 6: The last TDD step is to "repeat" the process of adding another test. What we're going to do is add our work to git and then move to Exercise #2, which is to add the second test.

// describe('sayHello', function () {
//     it('should be a defined function', function () {
//         expect(typeof sayHello).toBe('function')
//     });
//     it('should return a string when called', function () {
//         expect(typeof sayHello()).toBe("string");
//     });
//
//     it('should return the string "sayHello" when executed', function () {
//         expect(sayHello()).toBe("sayHello");
//     });
//
//     it("should never return 'undefined' when called", function () {
//         expect(sayHello()) .not.toBe(undefined);
//     });
// });

// Exercise #2 Ensure our function returns the right data type.
//     New tests will each have their own expect, it, the describe
// Step 1: The smallest possible test, now that the function exists, is to ensure that calling the function gives us a string. Inside of tests.js, add an assertion to sayHello that it "should return a string when called.". The test should look similar to expect(typeof sayHello()).toBe("string")
// Step 2: Run all tests to make sure that the new test starts red.
//     Step 3: Have your sayHello function return a string. The simplest code and smallest change possible is to return an empty string return "".
//     Step 4: Now, run all the tests to ensure that the previously red test is now turned green by our impelementation.
//     Step 5: There's nothing to refactor.
// Step 6: Repeat (Repeat the process by moving to build the next, small test)
// Always: Add, commit, and push your work to GitHub.

// describe('sayHello', function () {
//     it('should be a defined function', function () {
//         expect(typeof sayHello).toBe('function')
//     });
//     it('should return a string when called', function () {
//         expect(typeof sayHello()).toBe("string");
//     });
//
//     it('should return the string "Hello Collin!" when executed', function () {
//         expect(sayHello()).toBe("Hello Collin");
//     });
//
//     it("should never return 'undefined' when called", function () {
//         expect(sayHello()) .not.toBe(undefined);
//     });
// });

// Exercise #3 - Add a test to confirm actual vs. expected output.
//     Step 1: How that the function exists and returns the right data type, let's add our first realistic assertion. In tests.js, assert that sayHello("Jane") returns "Hello, Jane!". Our first test should be super simple and super small.
// Step 2: Run all tests and make sure that this newly added test is red.
//     Step 3: If the test wants us to return "Hello, Jane!" then literally write return "Hello, Jane!"; because that's the simplest way to green a test looking for "Hello, Jane!".
// Step 4: Run all tests. They should all be green at this point.
//     Step 5: It's too soon to refactor.
// Step 6: Repeat step means to add another test, so let's move to the next exercise.


// Exercise #4 Add another small, simple test
// Step 1: In tests.js, assert that sayHello("Alex") returns "Hello, Alex!". Our first test should be super simple and super small. This means that our next test should look like expect(sayHello("Alex")).toBe("Hello, Alex!").
//     Step 2: Run all tests and make sure that this newly added test is red.
//     Step 3: It's challenging not to jump to the "correct" answer already, but let's stay close to the TDD method. Write just enough code to green the test. This means making sure that the sayHello function definition inside of code.js takes an an input argument. If input === "Alex", then we return "Hello, Alex!" else return "Hello, Jane!". Don't get too fancy. A cornerstone of TDD is refactoring only once you have a handful of green tests, not just one or two with new inputs.
// Step 4: Run all tests, expecting that all are now green. Does each test turn green? If so, then we can proceed. We can't refactor unless we have greened a test, even with a hard-coded implementation.
// Step 5: If you feel the urge to refactor already, hang on! Let's add one more test!
// Step 6: Repeat the TDD cycle, so let's add another test in the next exercise.


// describe('sayHello', function () {
//     it('should be a defined function', function () {
//         expect(typeof sayHello).toBe('function')
//     });
//     it('should return a string when called', function () {
//         expect(typeof sayHello()).toBe("string");
//     });
//
//     it("should never return 'undefined' when called", function () {
//         expect(sayHello("Alex")) .toBe("Hello, Alex!");
//     });
// });
//


// Exercise #5 One more test before refactoring...
// Step 1: Add another (tiny) assertion! In tests.js, assert that sayHello("Pat") returns "Hello, Pat!". Since our tests should be super simple, the assertion should be expect(sayHello("Pat")).toBe("Hello, Pat!")
// Step 2: Run all tests and make sure that this newly added test is red and failing.
//     Step 3: Again, you may feel the urge to jump to the "correct" answer already. Let's stay on target. Write just enough code to green the test. For this case, just enough code means adding another conditional such that if input === "Pat", then the function should have return "Hello, Pat!".
// Step 4: Run all tests. Does each test turn green? If so, then we can proceed.
//     Step 5: Refactor! It's definitely refactoring time!

// describe('sayHello', function () {
//     it('should be a defined function', function () {
//         expect(typeof sayHello).toBe('function')
//     });
//     it('should return a string when called', function () {
//         expect(typeof sayHello()).toBe("string");
//     });
//     it("should return 'Hello, Alex' when called with the name 'Alex'", function () {
//         expect(sayHello("Alex")) .toBe("Hello, Alex!");
//     });
//     it("should return 'Hello, Pat!' when called with the name 'Pat'", function () {
//         expect(sayHello("Pat")) .toBe("Hello, Pat!");
//     });
// });

// Exercise #6 Implement the refactor!
//     Inside sayHello in code.js, what's a change you can identify that will improve the overall functioning of this function?
// Can you get the implmentation of sayHello down to a function with only one line of code inside?
//     If we have return "Hello, " + input + "!";, does this work for all names?
//     Does this bring up any other issues with other inputs?

// Exercise #7 Add, commit, and push your work to GitHub.
// "If your code ain't checked-in to source control, then it doesn't exist."
// In your terminal, ensure that the pwd command shows that you're in the directory for this project.
// First, git status. Notice which files are tracked by git and which files have changes.
//     Second, type git add -A to tell git that you want to get all the changed files staged for commit.
// Now, type git status. You should see file names in green. This means that the files are ready for commit.
// Next, type git commit -m "add tests and ability to say 'hello' to any input."
// Type git status, again, to make sure that all files are added and committed.
//     Finally, push your work with git push.

// Exercise #8 "Repeat" step (where we look for additional tests to add)
// First, in tests.js, add expect(sayHello()).toBe("Hello, World!"). Then refresh report.html to see the failing test.
//     Follow that by adding just enough code inside of the sayHello function code.js to green that latest test. Recommend checking if the input variable's value is undefined.
// Next, add expect(sayHello(true)).toBe("Hello, World!") to the tests.js file. Refresh to see the failing red test.
//     Add just enough code to code.js to green that latest test. if (input === true) then return "Hello, World!"
// Now, add expect(sayHello(false)).toBe("Hello, World!") to the tests.js file. Refresh to see the failing test.
//     Add just enough code to code.js to green this test.
//     Once all the tests are green, identify refactor opportunities and refactor your solution.
//     Are there any other edge cases you want to write a test for? You have a green light to add more of your own tests to "drive" the implementation.
//     Some edge cases to consider. What if:
// the input is null?
//     the input is an empty string like ""?
//     the input is a number like 2.3?
//     the input is a number inside a string like "5"?
//     the input is another data type like an array, object, or function?


// describe('sayHello', function () {
//     it('should be a defined function', function () {
//         expect(typeof sayHello).toBe('function')
//     });
//     it('should return a string when called', function () {
//         expect(typeof sayHello()).toBe("string");
//     });
//     it("should return 'Hello, Alex' when called with the name 'Alex'", function () {
//         expect(sayHello("Alex")).toBe("Hello, Alex!");
//     });
//     it("should return 'Hello, Pat!' when called with the name 'Pat'", function () {
//         expect(sayHello("Pat")).toBe("Hello, Pat!");
//     });
//     it("should return 'Hello, World!'when called with 'empty string'", function () {
//         expect(sayHello("")).toBe("Hello, World!");
//     });
//     it("should return 'Hello, World!' when called with a 'number'", function () {
//         expect(sayHello(4)).toBe("Hello, World!")
//     });
//     it("should return 'Hello, World!' when called with a 'number in a string'", function () {
//         expect(sayHello("4")).toBe("Hello, World!")
//     });
//     it("should return 'Hello, World!' when called with a 'array' []", function () {
//         expect(sayHello([])) .toBe("Hello, World!")
//     });
// });


// Exercise #10 Let's Test-Drive an isFive function!
// Inside of tests.js, write a describe block for our new isFive function.
// As your first, failing test, write an it and an expect asserting that a function named isFive exists.
//     Run the tests by refreshing report.html to show the red, failing test.
//     Write just enough code inside of code.js to define an empty function for isFive.
//     Now, refresh report.html to ensure that all tests are green.
//     What other tests and implementation cycles should you do for isFive?
// Ensure that isFive returns a boolean no matter what the input
// Ensure that isFive returns true when passed 5
// What about if we pass in the string "5"? Do you want isFive to return true for that?
// If so, write the test, ensure that the test is failing, and then write the implementation
// Commit your work to git and push to GitHub before moving forward.

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive) .toBe('function');
    });
    it('should return a boolean when called ', function () {
        expect(typeof isFive()) .toBe ("boolean");
    });
    it('should return true when passed as 5', function () {
        expect(isFive(5)) .toBe(true);
    });
    it('should return true when passed as "5"', function () {
        expect(isFive("5")) .toBe(true);
    });
    it('should return true when passed as 10', function () {
        expect(isFive(10)) .toBe(false);

    });
});

// Exercise #11 TDD process for testing and creating an isEven function
// Start with the smallest tests first. Assert that the function is defined.
//     Write just enough code to green the test
// Build up functionality one small piece at a time.
//     Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
//     Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
// Assert that isEven:
//     returns a boolean no matter the input
// returns true when executed with isEven(2)
//     returns true when executed with isEven(-4)
//     returns false when executed with isEven(3)
//     returns false when called with isEven("banana")
//     returns true when called with isEven("8")
//     returns false when called with isEven(Infinity)
//     return false when called with a boolean input like isEven(true) or isEven(false)
// returns false when called without an argument like isEven()
// Refactor when and where you can. Be careful not to refactor before you have a handful of green tests.
//     Repeat until the tests are robust and the function works as intended.
//     Commit your work to git and push to GitHub before moving forward.





