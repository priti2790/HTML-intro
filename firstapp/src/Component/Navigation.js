import React, { useState } from 'react'

export default function Navigation() {
    return (
        <div>
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <button onClick={lightmode}>Light</button>
                <button onClick={darkmode}>Dark</button>
            </div>
        </div>
    )
}
let [prec, futc] = useState({
    backgroundcolor: 'black'
})
let lightmode=()=> {
    if (prec.backgroundcolor == 'black')
    {
        futc({backgroundcolor:'aqua'})
    }
}
let darkmod=() => {
    if (prec.backgroundcolor == 'aqua')
 {
    futc({
        backgroundcolor:'black'
    })
}
}