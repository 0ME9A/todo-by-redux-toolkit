import React from 'react';
import { FiGithub } from 'react-icons/fi'


function Header(props) {
    return (
        <header className='w-full sticky top-0 backdrop-blur-md z-10 '>
            <nav className='w-full p-3 md:p-5 flex justify-between items-center max-w-screen-2xl mx-auto'>
                <h1 className="text-center font-bold text-xl text-white">Redux ToDo</h1>
                <a href="https://github.com/0ME9A/todo-by-redux-toolkit" target="_blank" rel="noopener noreferrer" className='p-2 px-4 hover:bg-violet-800 text-white border-2 border-transparent hover:border-violet-700 transition-all rounded-lg flex items-center justify-center gap-2'><FiGithub /> Github</a>
            </nav>
            <hr className='border-violet-800 max-w-screen-2xl mx-auto' />
        </header>
    );
}

export default Header;