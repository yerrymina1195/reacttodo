



export const TodoForm = ({something, onChange,value}) =>{
    return(
        <form onSubmit={something}   className=" new-item-form d-flex justify-content-center mb-5 g-1">
        <input
        value={value}
          onChange={onChange}
          type="text"
          id="item"
        />
      <button  className=" gtr">Add</button>
    </form>
    )
} 