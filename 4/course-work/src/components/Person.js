import React from 'react'

const Person = (props) => {
  return ( 
    <div>
      <h1>{props.name}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ratione, tempora fuga, similique, officiis possimus numquam quos quidem fugiat suscipit sapiente eos voluptatibus laudantium.</p>
      <p onClick={props.deleteHandler}>X</p>
    </div>
   );
}
 
export default Person;