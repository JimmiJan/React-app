import React, { useState } from 'react'

import"./app.css"

const Todo = () => {
     

  // for input
    const [inputvalue,setinputvalue]= useState("")   
    // input value push in todo
    const [todo,setTodo] =useState([])
  // index value

  const[index, setindex] = useState("")


  // edit 
  const [editInputValue, setEditInputValue] = useState("");



    // for ADD
   const AddTodo =()=>{
     console.log(inputvalue)
     todo.push(inputvalue)
     setTodo([...todo])
     setinputvalue("")

   }
  
  //  deleteAll todo
 const deleteAll =()=>{
   setTodo([])
  //  setTodo("")
  setinputvalue("")
 }

//  deleteOne Todo


const deleteOne=(index)=>{

  console.log("index" , index)

  todo.splice(index,1)
  setTodo([...todo])
    


}







//  editTodo 

const editOne=(index)=>{
     console.log(editOne)

     const update = prompt("Edit Todo ")
     todo.splice(index,1,update)
     setTodo([...todo])
    // setindex(index)



}

// const updateValue = () => {
//   console.log(editInputValue);
//   todo.splice(index, 1, editInputValue);
//   setTodo([...todo]);
//   setindex("");
//   setEditInputValue("");
// };





  return (
    <div className='apps'>
      








    {/* shoe Input */}

        <div >
           
           <div className='text-center mt-3'>
               <h1>TODO APP</h1>
              <div className='w-50 mx-auto'>

               <input type="text"
               value={inputvalue}
                placeholder='Enter Your Todo' onChange={(e)=>setinputvalue(e.target.value)}
                className='my-5 form-control input-group' />


                  <button className='btn btn-primary mr-1' onClick={AddTodo}  >ADD</button>


                  <button className='btn btn-danger'  onClick={deleteAll}>Delete</button>
              </div>

           </div>




       <section className='container'>
 

<section className='container'>
    {todo.map((value,index,array) =>{
    

    return  index ===inputvalue ?(
      <>
      <input 
      
      key={index}
                placeholder="edit value"
                value={editInputValue}
                className="mt-3 input-group w-50 form-control d-inline-block mx-3"
      
      
      
      />
      <button className='btn btn-info'  >
        Update
      </button>
      </>
    ) :(
      <div key={index}>
      <li className='d-inline-block w-60 mr-2 mt-3'>
{value}
</li>

<button className='btn btn-primary mr-1' onClick={()=>editOne(index)}  >Edit</button>


<button className='btn btn-danger'   onClick={()=>deleteOne(index)}>Delete</button>





</div>

    )
    
    
    
    
    
   
    

       


    }
       
    
    )}

</section>


        {/* <li>{todo}</li> */}
          </section>
      </div>
         

    </div>
  )
}

export default Todo
