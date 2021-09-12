import React, { useState } from 'react';
import List from "./List"

const App = () => {

  const[data, setData] = useState("");
  const[items, setItem] = useState([]);
  const ListItem = (e) => {
    setData(e.target.value)
  }
  const AddItem = () => {
   if(data) {
    setItem((oldItems) => {
      return[...oldItems, data]
    });
   }else{
     alert("Input field is empty");
   }
    setData("");
  }
  const Delete = (id) => {
    setItem((oldItems) =>{
      return oldItems.filter((arr, index) => {
        return id !== index
      })
    });
  }
  
  return (
      <>
      <div className="container-fluid">
      <div className="row text-center">
        <h1 className="col-12 fs-1 fw-bold">Basic Todo List</h1>
        <div className="col-12 text-center d-flex justify-content-center mt-5">
         <input 
         type="text" 
         placeholder="Write here..." 
         onChange={ListItem} 
         value={data} />
          <button className="btn-success" onClick={AddItem}>
              <i className="fas fa-plus-square"></i>
           </button>
        </div>

        <div className="col-md-4 col-sm-3"></div>
        <ol 
        className="col-md-4 col-sm-6 ol d-flex justify-content-evenly mt-4">         
        {items.map((ItemVal, index) => {
           return <List 
             text = {ItemVal}
             key = {index}
             id = {index}
             onSelect = {Delete}
           />
         })}
        </ol>
      </div>
      </div>
      </>
  );
}
export default App;
