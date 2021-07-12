import React from 'react';
import Navbar from '../navbar/Navbar.js'
import CoolButton from "../button/CoolButton.js"
import "bulma/css/bulma.css"


const SignUp = () => {
    return (
      <div>
        <Navbar/>
        <FormField label={"Name"} placeholder={"eg: Rita Mak"}/>
        <FormField label={"Email"} placeholder={"eg: test@gmail.com"}/>
        <FormField label={"Password"} placeholder={"eg: 12345"}/>
        <CoolButton title={"submit"}/>
      </div>
    );
  };
  
  export default SignUp;
  