import React from 'react'

const EditButton = (props) => {
    return (
        <>
             <button 
                className="btn-dark" 
                onClick={props.onSelect} 
                title="Update Item">
                    <i className="fas fa-edit"></i>
            </button>
        </>
    )
}

export default EditButton
