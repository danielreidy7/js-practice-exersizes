/*
Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc

Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?

*/ 

// I formatted the data in Google sheets and then placed as a module export in day_2_data.js
const passwordData = require('./data');


// First puzzle solution
let validPasswords = 0;
for (let password of passwordData) {
  // check if password contains an apt number of the specified char
  const regex = new RegExp(password[1], 'g');
  const numOfCharPresent = (password[2].match(regex) || []).length;
  if (numOfCharPresent >= password[0][0] && numOfCharPresent <= password[0][1]) {
    validPasswords ++
  }
};
console.log(`Puzzle 1 has ${validPasswords} valid passwords.`)


// Second puzzle solution
let secondvalidPasswords = [];
for (let password of passwordData) {
  const elfFirstPosition = password[0][0]-1;
  const elfSecondPostion = password[0][1]-1;
  if (password[2][elfFirstPosition] === password[1] && password[2][elfSecondPostion] === password[1]) {
    null
  } else if (password[2][elfFirstPosition] === password[1] || password[2][elfSecondPostion] === password[1]) {
    secondvalidPasswords ++
  }
};
console.log(`Puzzle 2 has ${secondvalidPasswords} valid passwords.`)


