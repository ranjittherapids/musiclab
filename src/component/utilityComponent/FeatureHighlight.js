import React from 'react'
import Buttom from './Buttom'
import "./featureHighlight.css"
export default function FeatureHighlight({count,count1,title}) {
    return (
        <div className={`${count1?"featureBox":"d-flex align-items-center"  }`}>
            {count?<Buttom title={count}/>:<img src={count1} alt="#"/>}
            <p style={{paddingLeft:"10px"}}>{title} </p>
        </div>
    )
}
