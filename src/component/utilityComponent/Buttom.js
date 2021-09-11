import React from 'react'

export default function Buttom({title}) {

    return (
       <button style={
           {borderRadius:"20px",
           border:"none",
           margin:"7px",
           padding:"10px 20px",
           background:" linear-gradient(to left,#33ccff  0%, #ff66ff 100%)",
        textTransform:"uppercase",
    color:"white",
fontWeight:"500"}

        }>{title}</button>
    )
}
