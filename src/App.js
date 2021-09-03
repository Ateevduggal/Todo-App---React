import React, { useState } from 'react';
import List from "./List"

const App = () => {

  const[data, setData] = useState("");
  const[items, setItem] = useState([]);
  const ListItem = (e) => {
    setData(e.target.value)
  }
  const AddItem = () => {
    setItem((oldItems) => {
      return[...oldItems, data]
    });
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
      <div className="text-center main_style">
        <h1 className="mb-5 fw-bold">Todo List</h1>
        <input type="text" placeholder="write task" onChange={ListItem} value={data} />
        <button className="btn-success" onClick={AddItem}>
        <i className="fas fa-plus-square"></i>
        </button>

        <ol>
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
      </>
  );
}
export default App;
