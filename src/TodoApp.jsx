import React, { useState} from 'react'
import AddButton from './AddButton';
import EditButton from './EditButton';

const TodoApp = () => {
    const [data, setData] = useState("");// for input field
    const [array, setArray] = useState([]);// stores the list in the form of an array
    const [line, setLine] = useState(false); // for text decoration
    const [toggle, setToggle] = useState(false); // for toggling between add sign and edit sign
    const [toggleId, setToggleId] = useState("");

    const ListItem = (e) => {
        setData(e.target.value);
    }

    const AddItem = () => {
        if (data) {
            const Var = {id: new Date().getTime().toString(), name: data}//Creating a new id and name for editing
            setArray([...array, Var]);
            setData("")    
        }
         else{
            alert("Input field is empty");
        }
    }

    const Del = (index) => {
        const DelArray = array.filter((Val) => {
            return index !==Val.id;
        })
        setArray(DelArray);
    }
    
    const Edit = (id) => {
        const EditArray = array.find((Val) => {
            return id === Val.id;
        });
        setToggle(true);

        setData(EditArray.name);//We wanrt only the name to be displayed in the input field
       
        setToggleId(id)
    }

    const EditItem = () => {
        if(data !== "" && toggle === true) {
            setArray(
                array.map((Val) => {
                     if (Val.id === toggleId) {
                        return {...Val, name:data}
                    }
                    return array;
                })
            )
            setToggle(false);
            setData("");
            setToggleId("")
        }
    }
    const ClearAll = () => {
        setArray([]);
    }

    const Cross = () => {
        setLine(!line);
       }
   
    return (
        <>
            <div className="container-fluid">
                <div className="row text-center mt-sm-5">
                    <div className="col-12 fw-bold fs-1">Todo App with Local Storage</div>
                   <div className="col-12 text-center d-flex justify-content-center my-3">
                   <input 
                        type="text" 
                        placeholder="Write here..." 
                        onChange={ListItem} 
                        value={data} />
                    {
                        toggle ? <EditButton onSelect={EditItem}/> : <AddButton onSelect={AddItem}/>
                    }
                   </div>
                    {
                        array.map((Val) => {
                            return(
                                <>
                                <div className="col-md-4 col-sm-3"></div>
                                <ol 
                                    className="col-md-4 col-sm-6 ol d-flex justify-content-around mb-2" 
                                    key={Val.id}
                                    style={{listStyle:"none"}}>
                                        <li
                                        style={{textDecoration:line? "line-through" : "none"}}>{Val.name}</li>
                                         <button 
                                         className="btn-secondary" 
                                         title="Task Done" 
                                         onClick={Cross}>
                                        <i className="fas fa-link"></i>
                                        </button>
                                        <button 
                                        className="btn-danger"
                                         title="Delete Item" 
                                         onClick={() => Del(Val.id)}>
                                        <i className="fas fa-trash-alt"></i>
                                        </button>
                                        <button 
                                        className="btn-dark" 
                                        title="Edit Item" 
                                        onClick={() => Edit(Val.id)}>
                                        <i className="fas fa-edit"></i>
                                        </button>
                                </ol>
                                
                                <div className="col-md-4 col-sm-3"></div>
                                </>
                            )
                        })
                    }
                    <div className="w-100"></div>
                    <div className="col-md-5 col-sm-4"></div>
                    <button className=" col-md-2 col-sm-4 btn-warning fw-bold mt-4" onClick={ClearAll}>Clear All</button>
                </div>
            </div>
        </>
    )
}

export default TodoApp
