import React, { useState } from 'react';
const List = (props) => {
    
    const [line, setLine] = useState(false);
    const CutIt = () => (
        setLine(true)
    );

    return (
        <>
            <div className="li_style d-flex">
            <button className="btn-primary" onClick={CutIt} >
               <i className="fas fa-link"></i>
                </button>
                <li style={{textDecoration:line ? "line-through" : "none"}}>
                    {props.text}
                </li>
                <button className="btn-danger" onClick={ () => {
                    props.onSelect(props.id)
                }}>
                <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </>
    );
}

export default List;