import React from 'react'

const ViewBudget = (props) => {
    return (
        <>
            <span>Budget: Rp{props.budget}</span>
            <button type="button" className="btn btn-primary" onClick={props.handleEditClick}>
                Edit
            </button>
        </>
    )
}

export default ViewBudget