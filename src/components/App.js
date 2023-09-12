import React from "react"
import "../styles/App.css"
import Cart from "./Cart"


const App =()=>{

    return(
        <div>
            <h1>Our Menu</h1>
            <div className="btn">
            <button id="">All</button>
            <button id="filter-btn-1">Breakfast</button>
            <button id="filter-btn-2">Lunch</button>
            <button id="filter-btn-3">Shakes</button> 
            </div>
            <Cart/>
        </div>
    )
}

export default App;



