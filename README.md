-  Get all necessary files connected and either taking in or sending out data.

-  You have been given a Data.js file that contains some arrays.
-  Find a way to bring (import) the data into the necessary files, but do not change the data.
-  Data should be imported into the wrapper components (`Numbers`, `Operators`, and `Specials`)

**Step 2**
Add the data to state like this:

```js
import { numbers } from '../path/to/data';

...


const [numberState, setNumberState] = useState(numbers);
```

**Step 3**

-  Map over the data and dynamically render components for each piece of data in the arrays.
-  You will need to import the component that you'll render in the map function.

**STEP 4**

-  Import the wrapper button components into `App.js`
-  Import the display components into `App.js` as well
-  Compose all the components inside the `App` component to get your calculator rendering on the DOM

**STEP 5 - (STRETCH)**

-  In each component, start designing things to match the design file
-  Style your project using any of the techniques from the module
-  Don't forget about className vs class on your JSX elements!!

It's time to start thinking about functionality. Before getting into this, let's try and plan out all the moving pieces you'll need.

You will have some state in `App` that will keep track of the totals. This is data that you'll pass to the display component to render in the display.

You'll also have some functions in `App` that run your calculations and update the totals state you're storing. You'll pass these functions down to the different button components as props. The button components will use `onClick` to invoke these functions and pass in the correct data, whether that's a number or an operator.

Okay. Hands on keyboard. Let's do this!

This is where you're JavaScript skills are really going to be stretched. Remember to use the 20 minute rule. Google will be your best friend!

## _MVP Requirements:_

-  Get at least one set of buttons(numbers, operators, or special buttons) to reflect the design spec.
-  Use the state hook function to get the app to display some data.

**Here is your design spec:**

<img src="https://tk-assets.lambdaschool.com/67a0a891-ba8c-429e-8d33-bc9e5b9f4e7c_ScreenShot2019-07-02at5.16.56PM.png" alt="finished calculator" width="400px" />

## Pro Tips:

-  Plan your app before writing any code. How many components will you be using? And how will they fit together?
-  Where will your data be stored in state? Which components need to receive that data via props?
-  What functions do you need? Where will the function live (if it updates state in a component, it needs to live in that component)? Will it be invoked in a different component? If so, pass it as props!
-  If you're unsure how to proceed, review the TK, google, use the help channel
-  There are plenty of examples of calculator logic available, but try writing on your own. And don't worry if it isn't fully functional, you'll have time come back to it and get it working. It's actually a really fun exercise to work on in small increments over time.
-  Most important have fun!!!

## Stretch Problems

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

-  STEP 5 from above
-  Finish the logic so the calculator is fully functional. Feel free to change the array data, or lose it entirely, as you see fit.
-  Finish styling all of the buttons and get your calculator to closely resemble the given design spec.
-  Add some icons to improve the operator characters aesthetics. Research any icon/font library and implement it into your project.
-  Convert your CSS styling to use Sass/Scss
