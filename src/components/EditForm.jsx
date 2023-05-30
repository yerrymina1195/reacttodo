
import React, {useState} from 'react'

export const EditForm = ({something,id,taskName}) =>{
    
    const [valu, setValue] = useState(taskName);
    const changemet= (event)=>{
 const rt= event.target.value;
 console.log(rt);
        setValue(event.target.value)
      }
    const handleSubmit = (e) => {
        
          e.preventDefault();
         
          something(valu, id);
         
        };


    return(
        <form onSubmit={handleSubmit}   className=" new-item-form d-flex justify-content-center g-1">
        <input
        value={valu}
        placeholder="modifier"
        onChange={changemet}
          type="text"
          id="item"
        />
      <button  className=" gtr">update</button>
    </form>
    )
} 