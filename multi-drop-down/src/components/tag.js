import React from 'react'
import { FaRegWindowClose } from 'react-icons/fa';


const Tag = ({addname,removeTask}) => {
    return (
        <div class="textbox" >
        {addname.map((t) => (
         <li class="content">{t.value} &nbsp;
         <div class="btn2" onClick={(e)=> removeTask(e, t.value)}><div className ="close"> <FaRegWindowClose/>  </div></div>
         </li>))}
         </div>
    )
}

export default Tag;
