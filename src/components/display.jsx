
import React from 'react'
import { useSelector } from 'react-redux'

/*
accountno: "20"
accounttype: "checking"
address: "54654"
bankcountry: ""
bankdetails: "swift"
city: "skjl"
country: "US"
email: "karthik@gmail.com"
firstname: "karthik"
fullname: "karthik s"
lastname: "s"
phone: "1234567890"
postcode: "5456"
routingnumber: "20"
usertype: "personal" */
const Display = () => {
    const form = useSelector(state => state.forms)
    const keys = Object.keys(form)[0];
    if (keys) {
        const data = Object.values(form[keys]).map((ele, index) => {
            if (index > 1) {
                return <div className='data' key={index}>{ele}</div>
            }
        })
        return (
            <React.Fragment>
                <h1>Verify your Data</h1>
                {data}
            </React.Fragment>
        )
    }
    return null
}


export default Display