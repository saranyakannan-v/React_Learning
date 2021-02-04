/*import React from "react";
import Heading from "./Heading";
import List from "./List";

function App(){
    return(
<div>
    <Heading />
    <List />
    <List />
</div>
    );
}

export default App;*/

// ************** 10. React Prop Practise *********

import React from "react";
import Card from "./Card"
import contacts from "../contact"

// Mapping component - map() function makes looping to the custom component 
function createCard(contact){
  return(
    <Card
    id = {contact.id}
     key={contact.id} // Each child in a list should have a unique "key" prop which is not visible in the browser.
     name = {contact.name}
     imgURL = {contact.imgURL}
     phone = {contact.phone}
     email = {contact.email}
    />
  );
}

function App() {
  console.log(contacts)
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card 
      name = {contacts[0].name}
      imgURL = {contacts[0].imgURL}
      phone =  {contacts[0].phone}
      email = {contacts[0].email}
      />
      <Card 
      name = {contacts[1].name}
      imgURL = {contacts[1].imgURL}
      phone =  {contacts[1].phone}
      email = {contacts[1].email}
      />
      <Card 
      name = {contacts[2].name}
      imgURL = {contacts[2].imgURL}
      phone =  {contacts[2].phone}
      email = {contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
