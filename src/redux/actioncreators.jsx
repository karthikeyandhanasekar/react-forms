
export const adddetails = (data) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            data: data
        })
    }

}