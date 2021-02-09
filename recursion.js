/* Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input.
 That number should be the number of sheep you have. The function should display the number along with the message "Another 
 sheep jumps over the fence" until no more sheep are left.

    Input: 3
    Output:
        3: Another sheep jumps over the fence
        2: Another sheep jumps over the fence
        1: Another sheep jumps over the fence
        All sheep jumped over the fence */


function countSheepLoop(num){
    if (num === 0) {
        console.log(`All sheep jumped over the fence`);
    } else {
        console.log(`${num}: Another sheep jump over the fence`);
        countSheepLoop(num - 1)
    }
}

console.log(countSheepLoop(3))


/* Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an 
exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than
 or equal to 0 (positive numbers)

    powerCalculator(10,2) should return 100
    powerCalculator(10,-2) should return exponent should be >= 0
 */

function powerCalculator(base, exp) {
    if( 0 > base && exp ) {
        return 'exponent should be >= 0'
    } else {
        return base ** exp
    }
}

console.log(powerCalculator(10, 2))


/* Write a function that reverses a string. Take a string as input, reverse the string, and
return the new string. */

function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString;
}

console.log(reverseString('hello'))

/* Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle.
The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of
the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45. */

function tri(n) {
    if(n < 2) {
        return n
    } else {
        return n + tri(n-1)
    }
}

console.log(tri(3))

/* Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS
    array's split function to solve this problem.

    Input: 02/20/2020
    Output: ["02", "20", "2020"]
 */

function splitter(str) {
    let resultArray = []
    let tempString = ''
    str = toString(str)
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== '/') {
            tempString += str[i]
        } else {
            resultArray.push(tempString)
            let tempString = ''
        }
    }
    return resultArray
}

console.log(splitter(02/20/2020))


/* Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of
numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci
sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13. */

function sequence(n) {
    if(n < 2) {
        return n
    }
    return sequence(n - 1) + sequence(n - 2)
}

console.log(sequence(7))

/* Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by
multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. */

function factorial(n) {
    if(n == 0 || n == 1) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5))

/* You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to
the single exit point. Write a recursive function that will help you find a possible path through the maze. */

function maze(n) {
    let mySmallMaze = [
        [' ', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', 'e']
    ];
    
    let maze = [
        [' ', ' ', ' ', '*', ' ', ' ', ' '],
        ['*', '*', ' ', '*', ' ', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', '*', '*', '*', '*', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'e']
    ];


}

/* An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged
order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if
the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like
"tsae".

/Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example,
given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas",
and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you
find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east",
there should be 24 words. */
function anagrams(prefix, str) {
    if(str.length <= 1) {
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i = 0; i < str.length; i++) {
            let currentLetter = str.substring(i, i+1)
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}

console.log(anagrams('', 'word'))

/* Write a recursive function that prints the following organization chart. Your output should be
as shown below with proper indentation to show the hierarchy. You may store the org chart in an
object and send that as an input to your program. */

let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}

console.log(traverseA(organization))

/* Write a recursive function that prints out the binary representation of a given number. For
example, the program should take 3 as an input and print 11 as output, or 25 as an input and
print 11001 as an output. Note that the binary representation of 0 should be 0. */

function convertToBinary(num) {
    if(num > 0) {
       let binary = Math.floor(num % 2);
        return (convertToBinary(Math.floor(num / 2)) + binary); 
    } else {
    return '';
    }
}

console.log(convertToBinary(25))