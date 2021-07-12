import React from 'react'
import "bulma/css/bulma.css"
import "./CoolButton.css"

function CoolButton({isDanger, title}) {
    if (isDanger) {
        return <button className="button is-rounded my-class is-danger is-small">{title}</button>
    } else {
        return <button className="button is-small is-success">{title}</button>
    }
}


export default CoolButton