import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/UserSlice";
import React from 'react';

function PostAuthor({ userId }) {
    const users = useSelector(selectAllUsers)
    return (
        <span className="text-xs">By {userId?users[userId].name:"Unkonw Author"}</span>
    );
}

export default PostAuthor;