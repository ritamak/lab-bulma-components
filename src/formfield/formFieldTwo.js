import React from 'react'
import "bulma/css/bulma.css"
import "./FormField.css"

function FormFieldTwo() {
    return (
        <div>
<div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>
<div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
  <div className="field">
  <label className="label">Password</label>
  <div className="control">
    <input className="input" type="password" placeholder="e.g. 123456" />
  </div>
</div>
</div>
</div>
    )
}



export default FormFieldTwo