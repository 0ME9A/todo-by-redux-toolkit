import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: 1,
        title: "Learning toolkit",
        content: "I've heard good things about learning.",
        date: sub(new Date(), {minutes: 10}).toISOString()
    },
    {
        id: 2,
        title: "Slices learning",
        content: "I' heard good things about slices learning.",
        date: sub(new Date(), {minutes: 10}).toISOString()
    },    {
        id: 3,
        title: "Learning toolkit",
        content: "I've heard good things about learning.",
        date: sub(new Date(), {minutes: 10}).toISOString()
    },
]

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, actions){
                state.push(actions.payload)
            },
            prepare(title, content, userId){
                return {
                    payload: {
                        id: nanoid(),
                        title, 
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }

        },
        postRemove: (state, payload) =>{
        }
    }
})


export const {postAdded} = postSlice.actions;
export const selectAllPost = state=>state.post;
export default postSlice.reducer;
