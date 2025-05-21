import React, { useState } from "react";

const Form2 = () => {
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let haldleInput = (event) => {
    // console.log(event.target.name)
    setFormData( (data) => ({...data, [event.target.name] : event.target.value}) )
  }

  let handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData)

  }

  return (
    <>
      <h1>Form2</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name : </label>
        <input
          type="text"
          id="username"
          value={formData.username}
          name="username"
          placeholder="Enter Data"
          onChange={haldleInput}
        />
        <br />
        <br />

        <label htmlFor="password">Passwod : </label>
        <input
          type="text"
          id="password"
          value={formData.password}
          name="password"
          placeholder="Enter Data"
          onChange={haldleInput}
        />

        <br /><br />

        <button>Submit</button>



      </form>
    </>
  );
};

export default Form2;
