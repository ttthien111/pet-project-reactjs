import React, {useEffect,useState} from 'react'
export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    if (liked) 
        return (
            <button onClick={setLiked(false)}></button>
        );

    return (
        <button onClick={setLiked(true)}></button>
    );
}

const domContainer = document.querySelector('#like_button_container');
