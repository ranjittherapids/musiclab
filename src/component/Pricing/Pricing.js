import React from 'react'
import PricingBox from '../utilityComponent/PricingBox'

export default function Pricing() {
    return (
        <div style={{background:"#f2f2f2"}} className=" p-5">
            <h1>Listen free or subscribe to
                MusicLab Premium. </h1>
            <p>Utrust is a seamless integration that gives e-commerce businesses the power to accept digital currencies - and get all the benefits you can’t with just traditional payment methods.</p>
            <div className="d-flex flex-wrap align-items-center justify-content-center">
                <PricingBox plan="MusicBox primium" prices="30.00" duration="6 mount"/>
                <PricingBox plan="MusicBox primium" prices="30.00" duration="6 mount"/>
            </div>
        </div>
    )
}
