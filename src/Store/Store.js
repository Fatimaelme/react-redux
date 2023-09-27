import { configureStore } from "@reduxjs/toolkit";
import todoreducer from './Todoslice'
import Todayreducer from "./Todayslice";

export const store = configureStore ({
    reducer: {
        todo: todoreducer,
        today: Todayreducer
    }
})