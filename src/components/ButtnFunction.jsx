import React from "react";

// const ButtonFunction = ({text, color}) => {
//     return <button  
//         style={{color: color}}> 
//         {text ? text : "Default"} 
//         </button>
// }

// const ButtonFunction = ({text = "Default", color}) => {
//     return <button  
//         style={{color: color}}> 
//         {text} 
//         </button>
// }
const ButtonFunction = ({text}) => {
  const onClickHandler = () => {
    alert ('Na na na');
  }
    // secara default ini sudah ada render()
    // jadi tidak perlu dituliskan lagi
    // return <button> {text} </button>;
    return <button onClick={onClickHandler}>{text ? text : 'Default Button Functional'}</button>;
  };

export default ButtonFunction;