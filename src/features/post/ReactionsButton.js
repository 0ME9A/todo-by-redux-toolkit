import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}


function ReactionsButton({ post }) {
    const dispatch = useDispatch();
    const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
        // console.log(name)
        return (
            <button
                key={name}
                type="button"
                className='reactionButon p-1 px-3 transition-all hover:bg-violet-900 rounded-full'
                onClick={() => {
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }}
            >
                {emoji}
                <span className='pl-2'>
                    {post.reactions[name]}
                </span>
            </button>
        )
    })

    return (
        <div className='mt-2 shadow-lg rounded-full'>
            {reactionButton}
        </div>
    );
}

export default ReactionsButton;