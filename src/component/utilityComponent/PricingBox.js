import React from 'react'
import Buttom from './Buttom'
import Planlimitation from './Planlimitation'

export default function PricingBox({plan,prices,duration}) {
    return (
        <div style={{width:"fitcontent",height:"fitcontent",
        boxShadow:"1px 1px 5px 3px gray"}} className="pricing d-flex  flex-column  align-items-center justify-containt-center bg-white p-3 m-3">
            <h2>{plan}</h2>
            <h1 className="text-primary fw-bold">${prices}<small>{duration}</small></h1>
            <hr style={{width:"50%"}}/>
            <Planlimitation  title="online listening"/>
            <Planlimitation  title="regular audio"/>
            <Planlimitation  title="with advertising"/>
            <Planlimitation  title="30 skip per day"/>
            <Buttom style={{width:"300px"}} title="GET FREE"/>
        </div>
    )
}
