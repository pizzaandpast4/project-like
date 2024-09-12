import React, { useState } from "react";
import { GiSharpSmile } from "react-icons/gi";
import dog from './dog.jpg';
import { FaHeart } from "react-icons/fa";

function Card() {
    const [heart, setHeart] = useState(false);
    const [count, setCount] = useState(0);


    const handleHeart = () => {
        if (!heart) {
            setHeart(true)
            setCount(count + 1)
        } else {
            setHeart(false)
            setCount(count - 1)
        }
    }

    return (
        <div className="card">
            <span>Likes: {count}</span>
            <div className="cardHeader"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30 }}>
                <GiSharpSmile />
                <p style={{ marginTop: 15 }}>Please like my Dog</p>
            </div>
            <img onDoubleClick={handleHeart} src={dog} alt="" style={{width: 500}} />
            <div className="cardFooter" style={{ marginTop: 15, fontSize: 50 }}>
                {heart ? <FaHeart style={{ color: "red" }} onClick={handleHeart} />
                    : <FaHeart onClick={handleHeart} />}
            </div>
        </div>
    )
}

export default Card;