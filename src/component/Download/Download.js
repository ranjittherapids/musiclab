import React from 'react'
import DownloadOption from '../utilityComponent/DownloadOption'

export default function Download() {
    return (
        <div id="download" className="bg-white d-flex flex-column justify-content-center align-items-center p-5">
           <h2 style={{fontSize:"3rem"}} className="fw-bold">Get ready for seamless online music </h2>
           <p>Utrust is a seamless integration that gives e-commerce businesses the power to accept digital currencies - and get all the benefits you can’t with just traditional payment methods.</p>
           <div className="d-flex justify-content-center align-items-center flex-wrap">
               <DownloadOption img="/images/offlineMode.webp" title="Offline mode" discription="save and listen anywhere"/>
               <DownloadOption img="/images/hq.webp" title="High quality audio" discription="Enjoy the full range of sound"/>
               <DownloadOption img="/images/na.webp" title="No ads" discription="Enjoy nonstop music"/>
               <DownloadOption img="/images/us.webp" title="Unlimited skips" discription="just tap skipt"/>
           </div>
        </div>
    )
}
