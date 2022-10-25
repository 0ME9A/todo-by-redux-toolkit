import React from 'react';
import AddPost from '../features/post/AddPost';
import PostList from '../features/post/PostList';

function Main(props) {
    return (
        <main className='w-full p-3 md:p-5 flex flex-col gap-5 justify-between items-center max-w-screen-2xl mx-auto relative  rounded-xl'>
            <AddPost />
            <PostList />
        </main>
    );
}

export default Main;