import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    // {
    //     id: 1,
    //     title: "Learning toolkit",
    //     content: "I've heard good things about learning.",
    //     date: sub(new Date(), {minutes: 10}).toISOString(),
    //     reactions: {
    //         thumbsUp: 0,
    //         wow: 0,
    //         heart: 0,
    //         rocket: 0,
    //         coffee: 0
    //     }
    // },
    // {
    //     id: 2,
    //     title: "Slices learning",
    //     content: "I' heard good things about slices learning.",
    //     date: sub(new Date(), {minutes: 10}).toISOString(),
    //     reactions: {
    //         thumbsUp: 0,
    //         wow: 0,
    //         heart: 0,
    //         rocket: 0,
    //         coffee: 0
    //     }
    // },    {
    //     id: 3,
    //     title: "Learning toolkit",
    //     content: "I've heard good things about learning.",
    //     date: sub(new Date(), {minutes: 10}).toISOString(),
    //     reactions: {
    //         thumbsUp: 0,
    //         wow: 0,
    //         heart: 0,
    //         rocket: 0,
    //         coffee: 0
    //     }
    // },
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
                        userId,
                        reactions:{
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }

        },
        reactionAdded(state, actions){
            const {postId, reaction} = actions.payload;
            const existingPost = state.find(post=>post.id === postId);
            if (existingPost){
                existingPost.reactions[reaction]++  
            }
        }
    }
})


export const {postAdded, reactionAdded} = postSlice.actions;
export const selectAllPost = state=>state.post;
export default postSlice.reducer;
