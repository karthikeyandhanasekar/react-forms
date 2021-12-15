import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actioncreators from '../../redux/actioncreators.jsx'

const Beneficiary = () => {
    const [firstname, setfirstname] = React.useState('')
    const [lastname, setlastname] = React.useState('')
    const [email, setemail] = React.useState('')
    const [phone, setphone] = React.useState('')


    const usertype = useSelector(state => state.toggleusertype)
    console.log(usertype);
    const dispatch = useDispatch()
    const actions = bindActionCreators(actioncreators, dispatch)

    const handlesubmit = (e) => {
        e.preventDefault()
        const form1 = {
            firstname: firstname,
            lastname: lastname,
            fullname: firstname + " " + lastname,
            email: email,
            phone: phone,
            accounttype: usertype
        }
        actions.adddetails(form1)
    }
    return (
        <form name='beneficiary-personal' onSubmit={handlesubmit} >
            <input type="text" name='firstname' pattern='[A-z]+' placeholder='First Name' value={firstname} onChange={e => setfirstname(e.target.value)} required autoFocus autoCapitalize='on' />
            <br /><br /><br />

            <input type="text" name='lastname' pattern='[A-z]+' placeholder='Last Name' value={lastname} onChange={e => setlastname(e.target.value)} required autoCapitalize='words' />
            <br /><br /><br />

            <input type="email" name='email' placeholder='Email' value={email} onChange={e => setemail(e.target.value)} required />
            <br /><br /><br />

            <input type="tel" name='phone' max={9999999999} minLength={10} min={9000000000} maxLength={10} placeholder='Phone Number' value={phone} onChange={e => setphone(e.target.value)} required />
            <br /><br /><br />
            <input type="submit" value="Next" />
        </form>
    )

}




export default Beneficiary