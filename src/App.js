import React, { useState } from 'react';
import './TodoList.jsx';
import TodoList from './TodoList.jsx';

const App = () =>{
    const [name, setName]=useState();
    const [items, setItems] =useState([]);

    const add =(event) =>{
        setItems((additem) =>{
            return [...additem, name]
        });
        setName('')
    }  
    const itemEvent=(event) =>{
        setName(event.target.value);
    }
    const deleteItem=(id) =>{
        setItems((oldItems) =>{
            return oldItems.filter((arrElem, index) =>{
                return index !== id;
            });
        })
    }    
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text"
                     value={name}
                     placeholder="Enter your task" 
                     onChange={itemEvent}/>
                    <br />
                    <button onClick={add}>+</button>

                    <ol>
                        {items.map((list, index) =>{
                            return <TodoList key={index} id={index} onSelect={deleteItem} text={list}/>; 
                        })}
                    </ol> 
                </div>
            </div>
            <h1>Hello world </h1>
        </>
    )

}

export default App;