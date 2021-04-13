import React from 'react';

const Button = ({ name, userName, email, phoneNumber, address}) => {
  return (
    <Button variant="primary" type="submit" onClick={(e)=>{
      e.preventDefault()
      console.log(name, userName, email, phoneNumber, address)}}> 
      Submit
  </Button>
  )
}

export default Button;
