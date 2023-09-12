import React from "react";



const Cart =({state})=>{

   


    return (
        <div id="main">
            {
                state.map((state)=>(
                    <div className="cart">
                    <div className="left">
                        <img alt="images are view " src={state.img}/>
                    </div>
                    <div className="right">
                        <div>
                            <h5>{state.title}</h5>
                            <small>$ {state.price}</small>
                        </div>
                        <p>{state.desc}</p>
                    </div>
                </div>
                ))
            }  
        </div>
    )
}
export default Cart