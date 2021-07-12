import React from 'react'
import "bulma/css/bulma.css"
import "./FormField.css"

const FormField = ({label, placeholder}) => {
    return (
    <div>
    <div className="field">
    <label className="label">{label}</label>
    <div className="control">
    <input className="input" type="text" placeholder={placeholder} />
    </div>
    </div>
    </div>
    )
}

export default FormField