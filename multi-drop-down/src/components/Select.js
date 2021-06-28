import React, { useState,useEffect,useRef } from 'react';
// import { FaChevronDown } from 'react-icons/fa';
    import './App.css';
    
  
    function Todo() {
        // function Task({ task}) {
            
        //     return (
        //         <div
        //             className="task"    
        //         >
                   
        //         </div>
        //     );
    
        // }
        const [addName, setAddName] = useState('',[])
        const [state, setstate] = useState(false);
        const [Name, setName] = useState('',[]);
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
        
        const [filtername, setFilterName] = useState('',[]);
    
            // Filter File
            // const filtered = task.filter((task) =>
            //     task.value.toLowerCase().includes(filtername.toLowerCase())
            //   );
    
            const filterHandle =(event)=>{
                setFilterName(event.target.value);
                console.log(filtername);
                
            }

        const handleClick = (e) => {
            e.preventDefault();
            // setstate(true);
            setName(e.target.value);
            AddTask();
        }

        const handleOpen = () => {
            setstate(true);
        }
        //add task
        const AddTask =() => {
            const taskDetails = {
            tasks : Name,

        };
            
                setAddName([...addName,taskDetails]);
              
            };    

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
                {/* <div class="box">
                {addName.map((t) => (
                    <li class="ui">{t.title} &nbsp;
                    {/* <button class="btn2" onClick={(e)=> removeTask(e, t.value)}><i class="fa fa-close"></i></button> */}
                    {/* </li>))}
                    </div> */}
                    {/* //  */} 
                            <input
                            type = 'text'
                            onClick = {handleOpen}
                            onChange ={e => filterHandle(e)}
                            name = "input-box"
                            placeholder = "Select Option ..."   
                                       
                            />                     
                             
                </div>
                
                <div className="tasks">
                    {state && <div>
                    {tasks.map((task) => (
                        <div className = 'task'>
                        <div className = "task-title" onClick ={handleClick}>{task.title}</div> </div>
                    ))}</div>}
                </div>
            </div>
        );
    }
    
    export default Todo;
