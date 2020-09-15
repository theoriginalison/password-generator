# password-generator

Homework for Week 3

[LINK TO GITHUB](https://github.com/theoriginalison/password-generator)
[LINK TO DEPLOYED PAGE](https://theoriginalison.github.io/password-generator/)

## Table of Contents

_[Approach](#approach)
_[Problems & Solutions](#changes)
\_[Discoveries](#discoveries)

## Approach & Process

- I wrote a TON of pseudocode, and tried to find pieces from Week 3's activities that matched. I used the RPS activity for quite a bit, and figured that I'd need to use Math.random at some point, and create arrays that included all of the possible characters (defining each as a variable by type).
- I created boolean variables to correspond to alerts, and the password length needed to come first (and be a prompt instead). I knew that the length of the password that the user chose would be what all of the other characters are linked to, or depend on.
- An object was created as another variable, to keep track of which specifications the user confirmed that they want in their password
- Created variables for possible characters that included all of the arrays at the top (created from the string by using .split("")).
- An initial run couldn't guarantee that a password would include all of the requirements that the user entered for the password, in terms of the types of characters, so I had to include that (even if it wasn't necessary-- otherwise, the user wouldn't receive what they wanted to each specification)
- To do this, I created an array, possibleCharacters, that included all of the possible characters (based on which characters the user wanted). I also created a variable that would concatenate all of the pieces from the arrays that were added throughout the functions.
- "if" statement were used to capture types of characters and .push them into the array of possibleCharacters.
- My for loop started by including all required character types (again, as indicated by the user), selecting one from each category that the user wanted.
- Then, the else statement filled in the rest of the characters, by choosing randomly from the arrays created by possibleCharacters. This looped through until the password length was as long as the userInput.length.
- Finally, I had to return the password to the #password (located by using the querySelector way at the top).

## Problems & Solutions

- Wanting to have at least one of each character chosen by the user to be in a password. My initial inclination was to run a loop of whichever characters the user chose (the loop would select random characters from that array) over and over, until it reached a max of the number of characters set by the user in the prompt alert. However, I realized that by filling the password based on the boolean, any true choices would return at least one from that array. The solution was to have the first couple of characters ALWAYS be one from each array, and then randomize the rest. This was the simplest to build.

## Discoveries

- I might have actually pronounced concatenation correctly?!
- Ask BCS & Tutoring was vital this week.
- The .split("") function is very useful. But I could have also used global variables.
- return is necessary to print something out in the actual page!
- Console log any functions before you put the variables in, to make sure they're working the way that you want them to.
- This reinforced the difference between <textarea> and <input> in html-- <textarea> can be selected through querySelector to have its value changed-- that's how password was able to change throughout (and have characters added-- and that's why it's += randChoice, too)
- Test functions, loops, if statements, etc. with console.log at each step!!
- I need to keep asking for help when I need it.
- Pseudocode was helpful and confirmed that problem solving in this way is intuitive to me-- I just need to learn the language.
