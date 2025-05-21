import React, { useState } from "react";

const Form = () => {
  let [userName, setUserName] = useState("");

  let handleUserName = ( event ) =>{
      setUserName(event.target.value);
  }

  let handleSubmit = (event) =>{
      event.preventDefault();
      
      console.log(userName)
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Full Name : </label>
        <input placeholder="Enter the username .." id="userName"
        value={userName} 
        onChange={handleUserName}/>

        <br></br>
        <br />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
