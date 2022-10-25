import React from 'react';

function Footer(props) {
    return (
        <div className='w-full flex justify-center items-center py-3 text-gray-500'>
            <h2>
                made by <a
                    href="http://github.com/0me9a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='font-bold'>
                     OMEGA 
                </a> from 
                <span
                    className='animate-pulse'> ❤️
                </span>
            </h2>
        </div>
    );
}

export default Footer;