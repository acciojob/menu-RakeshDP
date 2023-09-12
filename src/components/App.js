import React from "react"
import "../styles/App.css"
import Cart from "./Cart"


const App =()=>{

    return(
        <div>
            <h1>Our Menu</h1>
            <div className="btn">
            <button>All</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Shakes</button> 
            </div>
            <Cart/>
        </div>
    )
}

export default App;



