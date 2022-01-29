import React, { useState } from 'react';

const colors = ['purple','blue','green','yellow','orange','red']

const LikeButton = (props) => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('');


    const handleclick = () => {
        setCount((prevCount) => prevCount + 1)
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }

    return (
        <div className='button-container'>
            <button className='likeBtn' onClick={() => handleclick()} style={{backgroundColor: color}}>{count} {count === 1 || count === 0 ? 'Like' : 'Likes'}</button>
            {/* <button onClick={() => handleclick()} style={{backgroundColor: color}}>{count} Likes</button> */}
        </div>
    )
}

export default LikeButton;