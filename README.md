# :running_man::running_woman: A-Frame-Multi-User-Game
 This is a virtual reality game combining competitive and collaborative interactions within one environment, made using A-Frame and websockets!
 
 ## Overview
For this project, I created a virtual reality game where two people work together to collect rings that
are scattered around a forest. There are only 5 rings to find, and when one player has collected at least
three rings, a treasure chest and its location are revealed. This is when the interactions switch to 
a competitive mode where the players must race against each other to grab the treasure. The first player
to reach it is declared the winner. I wanted to create an environment that was suitable for both
types of interactions in multi-user interfaces because I felt that it would make the experience
more immersive. I found that having multiple objectives in one place was also an efficient way to show
both types of interactions while keeping users stimulated.
 
 <img width="400" alt="Collaborative" src="https://github.com/nabeehaali/A-Frame-Multi-User-Game/blob/main/Collaborative.PNG"> <img width="400" alt="Competitive" src="https://github.com/nabeehaali/A-Frame-Multi-User-Game/blob/main/Competitive.PNG">
 
 ### Instructions for use:

1. Download this project.
2. Open project folder in Visual Studio Code
3. Open a new terminal
4. Initialize via npm
```html
  npm init
```
5. Install via npm
```html
  npm install express
```
6. Connect to app.js
```html
  node .\app.js
```
7. Type URL in browser
```html
  localhost:8080
```
 
 ## Challenges
One of the challenges I faced when completing this project was incorporating WebSockets in A-Frame. Whenever
I added a new socket or edited an existing one, I would have to restart visual studio code and re-run the 
program to check if it worked. Sadly, I never actually found a solution for this and ended up having to deal with the
tedious process. In terms of programming, it was challenging to get the ring removal feature working on both screens.
It was a lot of back and forth calls from the server to the client-side, which made things confusing at times. I found
myself working backward from the class example to help me figure out how elements in the scenes were communicating with
each other, but nonetheless, it did teach me a lot about getting these interactions to work and a new way to solve 
programming-related issues.  
 
 ## Successes
One thing that I think went really well was being able to show the visual feedback to the user indicating what
their objective is in the environment. Having that little message at the top telling the user what they're supposed
to do was a small, but very significant addition to making these interactions more intuitive. The overall user flow
is also something that I think went really well because it's very linear. There are only a few buttons to click to
get through the whole process, which helps limit any room for error. Overall, although this project was built using
primitive objects, I think that the functionality was executed in a somewhat creative way to fit collaborative
and competitive user interactions.  
