import React from 'react';
import Navbar from '../navbar/Navbar.js'
import FormFieldTwo from "../formfield/FormFieldTwo.js"
import CoolButton from "../button/CoolButton.js"
import "bulma/css/bulma.css"


const SignUp = () => {
    return (
      <div>
        <Navbar msgType={"is-success"} msgTypeTwo={"is-danger"}/>
        <FormFieldTwo/>
        <CoolButton />
      </div>
    );
  };
  
  export default SignUp;
  