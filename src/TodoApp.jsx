import React, { useState } from "react";
import AddButton from "./AddButton";
import EditButton from "./EditButton";

const TodoApp = () => {
  const [data, setData] = useState(""); // for input field
  const [array, setArray] = useState([]); // stores the list in the form of an array
  const [line, setLine] = useState(false); // for text decoration
  const [toggle, setToggle] = useState(true); // for toggling between add sign and edit sign
  const [toggleId, setToggleId] = useState("");
  const [color, setColor] = useState();

  const ListItem = (e) => {
    setData(e.target.value);
  };

  const AddItem = () => {
    if (data) {
      const Var = { id: new Date().getTime().toString(), name: data }; //Creating a new id and name for editing
      setArray([...array, Var]);
      setData("");
      setColor("blue");
    } else {
      alert("Input field is empty");
    }
  };

  const EnterItem = (e) => {
    if (e.key === "Enter") {
      if (data) {
        const Var = { id: new Date().getTime().toString(), name: data }; //Creating a new id and name for editing
        setArray([...array, Var]);
        setData("");
        setColor("blue");
      } else {
        alert("Input field is empty");
      }
    }
  };
  const Del = (index) => {
    const DelArray = array.filter((Val) => {
      return index !== Val.id;
    });
    setArray(DelArray);
  };

  const Edit = (id) => {
    const EditArray = array.find((Val) => {
      return id === Val.id;
    });
    setToggle(false);
    setData(EditArray.name); //We wanrt only the name to be displayed in the input field
    setToggleId(id);
    setColor("black");
  };

  const EditItem = () => {
    if (data !== "" && toggle === false) {
      setArray(
        array.map((Val) => {
          if (Val.id === toggleId) {
            return { ...Val, name: data };
          }
          return Val;
        })
      );
      setToggle(true);
      setData("");
      setToggleId("");
      setColor("blue")
    }
  };
  const ClearAll = () => {
    setArray([]);
  };

  const Cross = () => {
    setLine(!line);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-5 bg-dark text-center p-3 box">
            <div className="col-12 text-white fw-bold fs-1">Plan Your Day</div>
            <div className="col-12 text-center d-flex justify-content-center my-3">
              <input
                type="text"
                placeholder="Add a task.."
                onChange={ListItem}
                value={data}
                className="col-7 text-capitalize fw-bold bg-dark text-white border-1 border-light mx-3"
                onKeyPress={EnterItem}
              />
              {toggle ? (
                <AddButton onSelect={AddItem} />
              ) : (
                <EditButton onSelect={EditItem} />
              )}
            </div>
            {array.map((Val) => {
              return (
                <>
                  <ol
                    className="text-white fw-bold ol d-flex justify-content-around align-items-center mb-2 py-2"
                    key={Val.id}
                    style={{ listStyle: "none", backgroundColor: `${color}` }}
                  >
                    <li className={line ? "strike" : "no-strike"} id="li">
                      {Val.name}
                    </li>
                    <button
                      className="btn-success border-0"
                      title="Task Done"
                      onClick={Cross}
                    >
                      <i className="fas fa-check-square"></i>
                    </button>
                    <button
                      className="btn-danger border-0"
                      title="Delete Item"
                      onClick={() => Del(Val.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                    <button
                      className="btn-dark border-0"
                      title="Edit Item"
                      onClick={() => Edit(Val.id)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </ol>
                  <div className="col-md-4 col-sm-3"></div>
                </>
              );
            })}
            <div className="w-100"></div>
            <button
              className="col-4 btn-danger text-white fw-bold py-1"
              onClick={ClearAll}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
