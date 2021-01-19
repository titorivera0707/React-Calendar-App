import React, {Component} from "react"
import Rows from "../Rows"
import Month from "../Month"

class Calendar extends Component {

    state = {
        months: new Date().toLocaleString('default', { month: "long" })
    }

    render() {
        const months = this.state.months
        console.log(months)
        return(
        <div>
            <Month month={months}/>
            <Rows first={"Monday"} second={"Tuesday"} third={"Wednesday"} fourth={"Thursday"} fifth={"Friday"} sixth={"Saturday"} seventh={"Sunday"}/>
        </div>
        )
    }
}

export default Calendar