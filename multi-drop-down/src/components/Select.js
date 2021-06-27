import React, { useState,useEffect,useRef } from 'react';
// import { FaChevronDown } from 'react-icons/fa';
    import './App.css';
    
    function Task({ task }) {
        return (
            <div
                className="task"    
            >
               <div className = "task-title">{task.title}</div> 
            </div>
        );
    }
    function Todo() {
        const [state, setstate] = useState(false);
        const [tasks] = useState([
            {
                title: "Grab some Pizza",
            },
            {
                title: "Do your workout",
            },
            {
                title: "Hangout with friends",

            }
        ]);

        const handleClick = () => {
            setstate(true);
        }

        let menuRef = useRef();
        useEffect(() => {
            let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setstate(false);
            }
            
        }
            document.addEventListener('mousedown',handler);

            return () => {
                document.removeEventListener('mousedown',handler);
            }
        });

        
        return (
            
            <div className="todo-container">
                <div className="header">Multiple Select DropDown</div>
                <div className = 'input' ref ={menuRef}>
                    <input
                        type = 'text'
                        onClick = {handleClick}
                        name = "input-box"
                        placeholder = "Select Option ..."              
                    />            
                </div>
                
                <div className="tasks">
                    {state && <div>
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            key={index}

                        />
                    ))}</div>}
                </div>
            </div>
        );
    }
    
    export default Todo;
