//1.Write a JavaScript function that reverse a number.
function reverseNumber(x) {
    return parseInt(x.toString().split('').reverse().join(''));
}

//2.Write a JavaScript function that checks whether a passed string is palindrome or not?
function isPalindrome(x) {
    return x == x.split('').reverse().join('');
}

//3. Write a JavaScript function that generates all combinations of a string. 
function generateCombination(x) {
    let res = [];
    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j <= x.length; j++) {
            let sub = x.slice(i, j);
            if (!res.includes(sub)) {
                res.push(sub);
            }
        }
    }
    return res;
}

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function alphbeticalOrder(x) {
    return x.split("").sort().join("");
}

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
function toUpper(x) {
    let arr = x.split(" ");
    let res = ""
    for (let i = 0; i < arr.length; i++) {
        res += arr[i][0].toUpperCase() + arr[i].slice(1) + " "
    }
    return res.trim()
}

//method2
function toUpper(x) {
    return x.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ")
}

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function findLongestWord(x) {
    let words = x.split(" ");
    let res = "";
    for (let word of words) {
        if (word.length > res.length) {
            res = word;
        }
    }
    return res;
}

//7.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
function countVowels(x) {
    let vowels = "a";
    let res = 0;
    for (let i = 0; i < x.length; i++) {
        if (vowels.includes(x[i])) {
            count++;
        }
    }
    return res;
}

//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
function isPrime(num) {
    if (num < 2) return false;
    let m = Math.ceil(Math.sqrt(num));
    for (let i = 2; i < m; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

//9. Write a JavaScript function which accepts an argument and returns the type.
function getType(arg) {
    return typeof(arg);
}

//10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function matrix(x) {
    let res = [];
    for (let i = 0; i < x; i++) {
        res[i] = [];
        for (let j = 0; j < x; j++) {
            i == j ? res[i].push(1) : res[i].push(0);
        }
    }
    return res;
}

//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function getNumber(x) {
    let sortedNumbers = x.sort((a, b) => a - b);
    let l = sortedNumbers[1];
    let r = sortedNumbers[x.length - 2];
    return [l, r];
}

//12. Write a JavaScript function which says whether a number is perfect. 
function isPerfect(x) {
    let sum = 0;
    for (let i = 0; i < x; i++) {
        if (x % i == 0) {
            sum += i;
        }
    }
    return sum == x;
}

//13. Write a JavaScript function to compute the factors of a positive integer. 
function factors(x) {
    let res = [];
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            res.push(i);
        }
    }
    return res;
}

//14. Write a JavaScript function to convert an amount to coins.
function amountToCoins(amount, coins) {
    let res = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            res.push(coins[i]);
        }
    }
    if (amount == 0) return res;
    else return -1;
}

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function calculateExponent(b, n) {
    return Math.pow(b, n);
}

//Method2
function calculateExponent(b, n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= b;
    }
    return res;
}

//Method3
function calculateExponent(b, n) {
    if (n == 0) return 1;
    if (n == 1) return b;
    if (n % 2 == 0) return calculateExponent(b * b, n / 2);
    else return calculateExponent(b * b, (n - 1) / 2);
}

//16. Write a JavaScript function to extract unique characters from a string.
function extractUnique(x) {
    let res = "";
    for (let i = 0; i < x.length; i++) {
        if (!res.includes(x[i])) res += str[i];
    }
    return res;
}

//Method2
function extractUnique(x) {
    let res = new Set();
    for (let i of x) {
        res.add(i);
    }
    return Array.from(res).join("");
}

//17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function countOccurrences(x) {
    let res = {};
    for (let i of x) {
        if (i.match(/[a-z]/i)) {
            if (res[i]) res[i]++;
            else res[i] = 1;
        }
    }
    return res;
}

//18. Write a function for searching JavaScript arrays with a binary search. 
function binarySearch(arr, target) {
    let l = 0,
        r = arr.length - 1;
    arr.sort((a, b) => a - b);
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] == arr) return m;
        else if (arr[m] < target) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

//19. Write a JavaScript function that returns array elements larger than a number. 
function gerLarger(arr, num) {
    return arr.filter(i => i > num);
}

//20. Write a JavaScript function that generates a string id (specified length) of random characters. 
function generateId(l) {
    let c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = "";
    for (let i = 0; i < l; l++) {
        let j = Math.floor(Math.random() * c.length);
        res += c[j];
    }
    return res;
}

//21.Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array
function getSubset(arr, l) {
    let res = [],
        cur = [];
    arr.sort();

    function backtrack(start) {
        if (cur.length == l && (!res.length || (res.length && cur.toString() != res[res.length - 1].toString()))) {
            res.push([...cur]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            cur.push(arr[i]);
            backtrack(i + 1);
            cur.pop();
        }
    }
    backtrack(0);
    return res;
}

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
function countOccurrences(x, l) {
    let res = 0;
    for (let s of x) {
        if (s == l) count++;
    }
    return res;
}

//23. Write a JavaScript function to find the first not repeated character. 
function firstChar(x) {
    let c = {};
    for (let i of x) {
        c[i] = c[i] + 1 || 1;
    }
    for (let i of x) {
        if (c[i] == 1) return i;
    }
    return null;
}

//24.Write a JavaScript function to apply Bubble Sort algorithm.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//25.Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
function Longest_Country_Name(countries) {
    let res = "";
    for (let c of countries) {
        if (c.length > res.length) {
            res = c;
        }
    }
    return res;
}

//26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSubstring(x) {
    let l = 0,
        r = 0,
        res = "",
        max = 0,
        set = new Set();
    while (r < x.length) {
        if (!set.has(x[r])) {
            set.add(x[r]);
            if (r - l + 1 > max) {
                res = x.substr(l, r - l + 1);
                max = r - l + 1;
            }
            r++;
        } else {
            set.delete(x[l]);
            l++;
        }
    }
    return res;
}

//27. Write a JavaScript function that returns the longest palindrome in a given string. 
function longestPalindrome(x) {
    let res = "";
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < 2; j++) {
            let l = i,
                r = i + j;
            while (x[l] && x[l] == x[r]) {
                l--;
                r++;
            }
            if ((r - l + 1) > res.length) {
                res = x.substring(l + 1, r);
            }
        }
    }
    return res;
}

//Method2
function longestPalindrome(string) {
    let n = string.length;
    let longest = "";
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(false);
    }

    // All substrings of length 1 are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        longest = string[i];
    }

    // Check for substrings of length 2
    for (let i = 0; i < n - 1; i++) {
        if (string[i] === string[i + 1]) {
            dp[i][i + 1] = true;
            longest = string.substring(i, i + 2);
        }
    }

    // Check for substrings of length 3 and greater
    for (let k = 3; k <= n; k++) {
        for (let i = 0; i < n - k + 1; i++) {
            let j = i + k - 1;
            if (dp[i + 1][j - 1] && string[i] === string[j]) {
                dp[i][j] = true;
                if (k > longest.length) {
                    longest = string.substring(i, j + 1);
                }
            }
        }
    }

    return longest;
}

//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function outerFn() {
    let count = 0;
    return {
        get: function() {
            return count;
        },
        add: function() {
            count++;
        }
    }
}
const countInfo = outerFn();
console.log(countInfo.get());

//Method2
function myFunction1(callback) {
    callback();
}

function myFunction2() {
    console.log("111");
}

myFunction1(myFunction2);

//29. Write a JavaScript function to get the function name. 
function getFunctionName(fn) {
    return fn.name;
}

function myFunction() {}
console.log(getFunctionName(myFunction));