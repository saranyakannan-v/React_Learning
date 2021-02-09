// import modules

import React from 'react';
import ReactDOM from 'react-dom';

// ************** jsx & js **************


// ReactDOM.render(What to show, where to show it);

 /*ReactDOM.render(
    <div> 
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
    </div>, document.getElementById('root'));*/ 

// jsx vs js
/* let h1 = document.createElement("h1");
h1.innerHTML="Hello World";
document.getElementById("root").appendChild(h1); */


// ************** JSX -> HTML -> JS **************
// 1. We can insert expression, variables, functions inside jsx
// We can't insert js statements inside HTML eg: if elseif statements

/*const fName="Saranya";
const lName="Kannan";
const num = 5;

ReactDOM.render(
    <div>
        <h1>Hello {fName +" "+lName}</h1>
        <p>My Lucky number is {Math.floor(Math.random() * 10)}</p> 
        <p>My Lucky number is {5+5}</p>
        <p>My Lucky number is {num}</p>

    </div>,document.getElementById('root')
);*/


// ********** 2. Javascript Expressions in JSX *********
/*const name = "Saranya";
const currentDate = new Date(2000,1,1);
const year = currentDate.getFullYear();

ReactDOM.render(
    <div>
    <p>Created by {name} </p>
    <p>Copyright {year} </p>
    </div> , 
document.getElementById("root")
); */


//******* 3. JSX Attributes & Styling React Elements*******
// we have to use "className" instead of "class" in JSX
// Whenever we are writing HTML make sure it's in camelcase letters

/*const img = "https://picsum.photos/200";

ReactDOM.render(
    <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">Random Images</h1>
        <img src={img} alt="random images"/>
    </div> , 
document.getElementById("root")
);*/



//******* 4. Inline Styling for React Elements *******
// JSX object uses values as a string 

/*const customeStyle = {
    color :"blue",
    fontsize:"20px",
    border:"1px solid black"
}

ReactDOM.render(
    <h1 style= {customeStyle}>Hello World!</h1>,document.getElementById("root")
);*/


//******* 5. React styling practice *******
// Date objects are created with the new Date()
// getHours()methods can be used for getting hours from a date object

/*const date = new Date(); // We can use custom date to check with diffrent date and time
const currentTime = date.getHours();

let greeting;

if (currentTime < 12){
    greeting = "Good Morning"
}else if(currentTime < 18){
    greeting = "Good Evening"
}else{
    greeting = "Good Night"
}

ReactDOM.render(
<h1 className="heading">{greeting}</h1>,
document.getElementById("root")
); */


//******* 6. React Components *******

/* import App from "./components/App"

ReactDOM.render(<App />, document.getElementById("root")) */

//******* 7. Javascript ES6 - import, Export and modules *******

/* import PI, {doublePi,triplePi} from "./math.js"

// multiple imports from a same file should be inside the { } expect the default one
ReactDOM.render(
    <ul>
        <li>{PI}</li>
        <li>{doublePi()}</li> 
        <li>{triplePi()}</li>
    </ul>, 
    document.getElementById("root")
) */

//******* 8. Practice Javascript ES6 - import, Export  *******

/* import * as Calculator from "./calculator"

ReactDOM.render(
    <ul>
        <li>{Calculator.add(1,2)}</li>
        <li>{Calculator.multi(2,3)}</li>
        <li>{Calculator.subtract(10,5)}</li>
        <li>{Calculator.divide(5,2)}</li>
    </ul>,
    document.getElementById("root")
); */

//******* 9. React Props *******

//Props (property) is an object which we use it as a common object for the custom components.
//“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.
/* function Card(props){
    return(
<div className="my-style">
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
</div>
    );
}

ReactDOM.render(
    <div>
      <h1>My Contacts</h1>
      <Card 
      name="Beyonce" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      tel="+123 456 789" 
      email="b@beyonce.com"/>

      <Card 
      name="Jack Bauer" 
      img = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" 
      tel="+987 654 321" 
      email="jack@nowhere.com"/>

      <Card 
      name="Chuck Norris" 
      img = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" 
      tel="+918 372 574" 
      email="gmail@chucknorris.com"/>
  </div>,
    document.getElementById("root")
  ); */

//******* 10. React Props Practice *******

/*import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));*/

//******************************** 11. Javascript ES6 Map/Filter/Reduce ***************************

//************* MAP *************
// let numbers = [3,9,2,48,5];

// 1. Map - Create a new array by doing something with each item in an array

/* function double(x){
    return x * 2;
}
const newNumbers = numbers.map(double) */

// 2. using Foreach

/* let newNumbers = [];

numbers.forEach(function (x){
    newNumbers.push(x * 2);
});*/

// 3. using map in simple way

/* const newNumbers = numbers.map(function (x){
    return x * 2;
})

console.log(newNumbers)*/

//************* FILTER *************

// let numbers = [3,9,2,48,5];

// 1. Filter - Creates a new array by keeping only the items that returns true

/* const newNumbers = numbers.filter(function(num){
    return num < 10;
}); */

// 2. using forEach

/* let newNumbers = [];

numbers.forEach(function(num){
    if(num<10){
        newNumbers.push(num);
    }
});

console.log(newNumbers);*/

//************* REDUCE *************

// let numbers = [3,9,2,48,5];

// 1. Reduce - Accumulate a value by doing something to each item in an array.

/* const newNumber = numbers.reduce(function(accumulator, currentNumber){
    return accumulator += currentNumber;
})

console.log(newNumber); */

// 2. using forEach

/* let newNumber = 0;

numbers.forEach(function (currentNumber){
    newNumber += currentNumber;
})

console.log(newNumber); */

//************* FIND *************

// let numbers = [3,9,2,48,5];

// 1. Find - find the first item that matches from an array

/* const newNumber = numbers.find(function(num){
    return num > 10 ;
}) */

// 2. findIndex - find the index of the first items that matches.

/* const newNumber = numbers.findIndex(function(num){
    return num > 10 ;
})

console.log(newNumber); */


//******************************** 12. Javascript ES6 Arrow function ***************************

 let numbers = [3,9,2,48,5];

// const newNumber = numbers.map( x => x * x)

// const newNumber = numbers.map(x => x * 2)

// const newNumber = numbers.filter(num => num < 10 );

/* const newNumber = numbers.reduce((accumulator, currentNumber) => {
    return accumulator += currentNumber;
}) */

// const newNumber = numbers.find(num => num > 10 )

const newNumber = numbers.findIndex(num => num > 10 )

 console.log(newNumber);