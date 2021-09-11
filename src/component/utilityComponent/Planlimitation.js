import React from 'react'

export default function Planlimitation({title}) {
    return (
        <div className="d-flex align-items-center ">
         <span style={{paddingLeft:"10px"}} className="material-icons ">check</span>
            <p style={{paddingLeft:"10px"}} >{title}</p>
        </div>
    )
}
