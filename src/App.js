import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from "./formfield/FormField.js"
import CoolButton from "./button/CoolButton.js"
import "bulma/css/bulma.css"
import SignUp from "./signup/SignUp.js"
import Message from "./message/Message.js"


const App = () => {
  return (
    <div>
      <Navbar msgType={"is-success"} msgTypeTwo={"is-danger"}/>
      <FormField label={"Rita"}/>
      <CoolButton />
      <Message />
      <SignUp/>
    </div>
  );
};

export default App;
