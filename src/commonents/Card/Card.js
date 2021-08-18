import React, { useState } from 'react'
import "./card.css"
import { BsTextLeft, BsTextCenter, BsTextRight } from "react-icons/bs"

function Card() {
    const [text, setText] = useState("")

    function handleBtn() {
        const icon1 = document.querySelector('.icon1');
        const icon2 = document.querySelector('.icon2');
        const icon3 = document.querySelector('.icon3');
        const card = document.querySelector('.card');
        if (text == "icon1") {
            icon1.style.display = "block";
            icon2.style.display = "none";
            icon3.style.display = "none";
            card.style.justifyContent = "flex-start";
            setText("icon2")
        } else if (text === "icon2") {
            icon1.style.display = "none";
            icon2.style.display = "block";
            icon3.style.display = "none";
            card.style.justifyContent = "center";

            setText("icon3")
        }
        else {
            icon1.style.display = "none";
            icon2.style.display = "none";
            icon3.style.display = "block";
            card.style.justifyContent = "flex-end";

            setText("icon1")
        }

    }
    return (
        <div className="card__conatiner">
            <div className="card">
                <div className="card__text">salom</div>
            </div>
            <div className="card__textSet">
                <button onClick={handleBtn}>
                    <div className="icon1"><BsTextLeft /></div>
                    <div className="icon2"><BsTextCenter /></div>
                    <div className="icon3"><BsTextRight /></div>
                </button>
            </div>

        </div >
    )
}

export default Card
