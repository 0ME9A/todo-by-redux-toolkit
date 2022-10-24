import { useSelector } from "react-redux";
import React from 'react';
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButton from "./ReactionsButton";



function PostList(props) {
    const posts = useSelector(selectAllPost)

    const orderPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    const renderpost = orderPosts.map(post => (
        <article className="w-full max-w-3xl p-3 flex justify-between items-center shadow-lg bg-violet-800 rounded-lg text-white hover:shadow-xl transition-all" key={post.id}>
            <div>
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-gray-300">{post.content}</p>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>

                <ReactionsButton post={post}/>
            </div>
            {/* <button type="button" id={post.id} className="px-3 py-2 bg-black rounded-lg self-end" >delete</button> */}
        </article>
    ))


    return (
        <>
            {renderpost}
        </>
    );
}

export default PostList;