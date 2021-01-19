import React from "react"
import Rows from "../Rows"
import Month from "../Month"

function Calendar() {

    const months = new Date().toLocaleString('default', { month: "long" })

    return(
    <div>
        <Month month={months}/>
        <Rows first={"Monday"} second={"Tuesday"} third={"Wednesday"} fourth={"Thursday"} fifth={"Friday"} sixth={"Saturday"} seventh={"Sunday"}/>
    </div>
    )
}

export default Calendar