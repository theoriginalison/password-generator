# password-generator

Homework for Week 3

[LINK TO PAGE](https:///)

index.html (linked from both "Alison Lubar" and "About Me")
![Screenshot of the "About Me" / "Alison Lubar" page featuring a picture of Alison along with her bio"](/ReadMeImages.AboutMe.png)

## Table of Contents

_[Approach](#approach)
_[Problems & Solutions](#changes)
\_[Discoveries](#discoveries)

## Approach & Process

- I wrote a TON of pseudocode, and tried to find pieces from Week 3's activities that matched. I used the RPS activity for quite a bit, and figured that I'd need to use Math.random at some point, and create arrays that included all of the possible characters (defining each as a variable by type).
- I created boolean variables to correspond to alerts, and the password length needed to come first (and be a prompt instead). I knew that the length of the password that the user chose would be what all of the other characters are linked to, or depend on.
- An object was created as another variable, to keep track of which specifications the user confirmed that they want in their password
- Created variables for possible characters that included all of the arrays at the top, and guaranteed characters that selected from those randomly-- these two serve the functions of seeing all of the characters that the Math.random could choose from; for example, if the user selected to have no numbers, then the selections for the Math.random would be much fewer.

## Problems & Solutions

- Wanting to have at least one of each character chosen by the user to be in a password. My initial inclination was to run a loop of whichever characters the user chose (the loop would select random characters from that array) over and over, until it reached a max of the number of characters set by the user in the prompt alert. However, I realized that by filling the password based on the boolean, any true choices would return at least one from that array.

## Discoveries

- I might have actually pronounced concatenation correctly?!
- Ask BCS & Tutoring was vital this week.
- The .split("") function is very useful. But I could have also used global variables.
- return is necessary to print something out in the actual page!
- Console log any functions before you put the variables in, to make sure they're working the way that you want them to.
