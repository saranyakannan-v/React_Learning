import React from "react"

// What is Props?
// React is a component-based library which divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.
// “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.


function Card(props){
    return (
<div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <img className ="circle-img"
            src= {props.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    );
}

export default Card;