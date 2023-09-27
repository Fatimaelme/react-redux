import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: 'todo',
    initialState:{
        list: []
    },
    reducers: {
        add: (start,action) =>{
            start.list = [...start.list, {
                title: action.payload,
                done: false
            }]
        },
        remove: (start,action)=>{
            start.list= start.list.filter(a=> a.title != action.payload)
        },
        update: (start,action) => {
            start.list = start.list.map(b => b.title == action.payload ? {...b,done: true} : b)
        }
}

})


export const { add, remove,update } = todoslice.actions

export default todoslice.reducer