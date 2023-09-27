import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,reset} from './Store/Todayslice'

const Today = () => {
    const count = useSelector (state => state.today.value)
    const dispatch = useDispatch()
    const [titre,setTitre] = useState('')
    const update = (event) =>{
        setTitre(setTitre.target.value)

    const addtoday = () =>{
        dispatch(update(titre))
    }
    }

    const inc = () => {dispatch(increment())}
    const dec = () =>{dispatch(decrement())}
    const res = () =>{dispatch(reset())}
  return (
    <div className='flex flex-row justify-center mt-20 gap-7'>
        <svg onClick={inc} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
{count}
<svg onClick={dec} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<svg onClick={res} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
    </div>
  )
}

export default Today