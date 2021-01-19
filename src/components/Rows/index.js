import React from "react"
import "./style.css"

function Rows({ first, second, third, fourth, fifth, sixth, seventh }) {
    return(
        <ul className="box">
            <li>{first}</li>
            <li>{second}</li>
            <li>{third}</li>
            <li>{fourth}</li>
            <li>{fifth}</li>
            <li>{sixth}</li>
            <li>{seventh}</li>
        </ul>
    )
}

export default Rows