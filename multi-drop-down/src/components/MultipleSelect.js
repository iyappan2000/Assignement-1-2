import React, { useState,useEffect,useRef } from "react";
import './Style.css';
import { FaRegWindowClose } from 'react-icons/fa';





const MultipleSelect= (props) => {
    const [name,setName]=useState("",[]);
    

    //HandleClick
    const ClickHandler =(e)=> {
    e.preventDefault();
    setName(e.target.value);
    AddHandler();
    
    }
    const[addname,setAddName]=useState([]);
    const[state,setState]=useState(false);

        //addtask
        const AddHandler =() => {

        const taskDetails={
                
                value: name,
            };
            
            setAddName([...addname,taskDetails]);
           
        
        };    
        //removetask
        const removeHandler = (e, value)=>{
        e.preventDefault();
        setAddName(addname.filter((t) => t.value !== value));
        };
        const[filtername,setFilterName]=useState("",[]);

const filterHandler =(e)=>{
setFilterName(e.target.value);
console.log(filtername);

}
    //options
  const [tasks] =useState([
     { id:1,
       value:"NewYork",
     },
     {id:2,
      value:"Tokyo",
     },
     {id:3,
      value:"Las Vegas",
      },
     {id:4,
      value:"London",
      }
   ]);
  


const filtered = tasks.filter((tasks) =>
    tasks.value.toLowerCase().includes(filtername.toLowerCase())
  );


  let menuRef = useRef();
        useEffect(() => {
            let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setState(false);
            }
            
        }
            document.addEventListener('mousedown',handler);

            return () => {
                document.removeEventListener('mousedown',handler);
            }
        });
    return(
            <div>
            <h3 style = {{marginLeft:'90px'}}>Multiple-Select- DropDown</h3>
            <div ref = {menuRef}>
            <div class="totalbox">
            {addname.map((t) => (
             <li class="addValue">{t.value} &nbsp;
             <div class="button2" onClick={(e)=> removeHandler(e, t.value)}><div className ="close"><FaRegWindowClose/></div></div>
             </li>))}
             </div>

             <input type="text" placeholder="Select Option...." onChange={(e) => filterHandler(e)} onClick={()=>setState(!state)}/>
            

            {state?
                
            <div class="container">
                {filtered.map((a) => (
                <div className="value" ><option onClick={ClickHandler} onChange = {removeHandler}>{a.value}</option></div>
                ))}
            </div>
                
            :null }
            </div>
            </div>
            );
            }

export default MultipleSelect;

