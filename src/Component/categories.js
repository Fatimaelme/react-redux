import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categories = () => {
    const [cat, setCat] = useState([])
    const [title, setTitle] = useState('')

    const updateTitle = event =>{
        setTitle(event.target.value)
    }

    const remove = async (id) =>{
        const remov = await axios.delete('http://localhost:4000/categories/'+id)
        setCat(cat.filter(d => d._id != id))
    }

    const add = async ()=>{
        const ajout = await axios.post('http://localhost:4000/categories/', {
            title: title,
            icone:''
        })
        setCat([...cat,{
            title: title,
            icone:''
        }])
    }

    const getdata = async ()=>{
        const datas = await axios.get('http://localhost:4000/categories/')
        console.log(datas)
        setCat(datas.data)
        }

        useEffect(()=>{
            getdata()
        }, [])

  return (
    <div className='p-5'>
    <div className='flex flex-col gap-5 mb-5'>
        <p>Nom</p>
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onChange={updateTitle}/>
        <button className="btn btn-info w-20" onClick={add}>Add</button>
    </div> 
        {
            cat.map(e => <div className='flex flex-row gap-4'>
                {e.title}
                <svg 
                onClick={()=>remove(e._id)}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 border-2 border-whith bg-rose-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

            </div>)
        }
    </div>
  )
}

export default Categories