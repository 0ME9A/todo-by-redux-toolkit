import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectAllUsers } from '../users/UserSlice';


function AddPost(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');


  const users = useSelector(selectAllUsers)

  const handleSubmit = (e) => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId)
      )
    }
    setTitle('')
    setContent('')
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))


  return (
    <article className="w-full max-w-3xl gap-2 p-3 flex justify-between items-center bg-violet-800 rounded-lg">
      <div className="flex flex-col w-full gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded-lg px-3" name="title" placeholder="Title" />
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="w-full p-2 rounded-lg px-3" name="desc" placeholder="Description" />
        <label
          htmlFor='postAuthor'>
          Author:
        </label>
        <select
          id='postAuthor'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 rounded-lg px-3">
          <option
            value={""}>
            Select Author
          </option>
          {userOptions}
        </select>
        <button
          type="button"
          disabled={!canSave}
          onClick={handleSubmit}
          className="px-3 py-2 bg-black rounded-lg text-white outline-2 outline-offset-2 outline-transparent disabled:bg-gray-800 focus:outline-white outline transition-all" >
          Create
        </button>
      </div>
    </article>
  );
}

export default AddPost;