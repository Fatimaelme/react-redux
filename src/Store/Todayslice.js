import {Slice, createSlice } from "@reduxjs/toolkit";

const todayslice = createSlice ({
    name : 'today',
    initialState:{
        value: 5
    },
    reducers: {
        increment: (first) => {
            first.value += 4;
        },
        decrement: (first) => {
            first.value -= 4;
        },
        reset: (first) =>{
            first.value =4
        }
         }
})

export const { increment, decrement, reset } = todayslice.actions

export default todayslice.reducer