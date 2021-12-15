import React from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actioncreators from '../redux/actioncreators.jsx'

const Path = () => {
    const [type, setstate] = React.useState(true)
    const dispatch = useDispatch()
    const actions = bindActionCreators(actioncreators, dispatch)

    const handlecategory = (e) => {
        setstate(e)
        e ? actions.toggleusertype("personal") : actions.toggleusertype("business")
    }
    return (
        <React.Fragment>
            <div className="path">
                <div>
                    <span>1</span><br />
                    <span>Beneficiary</span>
                </div>
                <hr />
                <div>
                    <span>2</span><br />
                    <span>Bank Details</span>
                </div>
                <hr />
                <div>
                    <span>3</span><br />
                    <span>Address</span>
                </div>
            </div>

            <div className="category">
                <span onClick={() => handlecategory(true)} style={type ? { borderBottom: "groove blue" } : null} >Personal</span>
                <span onClick={() => handlecategory(false)} style={type ? null : { borderBottom: "groove blue" }}      >Business</span>
            </div>

        </React.Fragment>

    )
}

export default Path