import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from "./formfield/FormField.js"
import "bulma/css/bulma.css"
import SignUp from "./signup/SignUp.js"
import Message from "./message/Message.js"

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label={"Name"} placeholder={"eg: John Smith"}/>
      <FormField label={"Email"} placeholder={"eg: test@gmail.com"}/>
      <Message />
      <SignUp/>
    </div>
  );
};

export default App;