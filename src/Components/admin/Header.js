import React from "react";



export default function Header (props){
    const {countCartItems} = props;
    return (
        <header className="row block center">
        <div>
            <a href="#">
                <h1>
                    Christie Beauty
                </h1>
                <marquee>A scrolling text created with HTML Marquee element.</marquee>
            </a>
        </div>
        <div>
            <a href="#cart">


                cart { ' '}
                {countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                ) : ('')}


                </a> <a href="#signin">singin</a>
        </div>
    </header>
    )
}