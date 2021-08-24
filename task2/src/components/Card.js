import React from 'react';
import './components.css';

const Card = ({
  name,
  email,
  id,
  lname
}) => {
  //Displays all the information in a card format
  return ( <
    div className = "card" >
    <
    img alt = 'robots'
    src = {
      `https://reqres.in/img/faces/${id}-image.jpg`
    }
    /> <
    div >
    <
    br / >
    <
    h2 className = "title" > {
      name
    } {
      lname
    } < /h2> <
    br / >
    <
    h3 > {
      email
    } < /h3> <
    /div> <
    /div>
  );
}

export default Card;
