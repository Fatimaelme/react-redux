import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, update } from './Store/Todoslice'

const Input = () => {
  const list = useSelector(state =>state.todo.list)
  const dispach = useDispatch()
  const [title,setTitle] = useState('')
  const change = (event) =>{
    setTitle(event.target.value)
  }

  const addtodo = () => {
    dispach(add(title))
    setTitle('')
  }
  return (
    <div>
    <h1 className='text-center text-4xl font-bold text-red-600 mt-7'>ToDo APP</h1>
    <div className='flex flex-row items-center justify-center mt-10 gap-4'>
    <input type="text" placeholder="Type here" value={title} className="input input-bordered w-full max-w-xs" onChange={change}/>
    <button className='btn bg-slate-900 text-white'
    onClick={addtodo}
    >ToDo</button>
    </div>
    <div className='grid place-content-center'>
      {
        list.map(p =><div className='flex flex-row gap-4 mt-2'> 
          <button className='bg-red-700 text-white border-2 border-black'
          onClick={()=> dispach(remove(p.title))}
          ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
<button className='bg-green-900 text-white border-2 border-green-900'
onClick={() => dispach(update(p.title))}
><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
</button>
         {
          p.done == true ?
          <p className='line-through'> {p.title} </p>
          :
          <p> {p.title} </p>
         }
        </div>)
      }
    </div>
    </div>
  )
}

export default Input