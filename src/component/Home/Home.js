import React from 'react'
import Button from '../utilityComponent/Buttom'

export default function Home() {
    return (
        <div id="home" className="text-white  d-flex flex-column align-items-center justify-content-center pt-5 pb-5">
            <p className="fs-4 ">intuitive.powerful. run everywhere</p>
            <h1 style={{fontSize:"3rem",fontWeight:"bolder",padding:"0 30px"}} className=" mb-5 ">Open the world of music .it's all here</h1>
            <div   className="d-flex-row flex-sm-column align-items-center justify-content-center pb-4">
                <Button   title="download for desktop" />
                <Button   title="download for mobile" />
            </div>
            <div style={{width:"80%",height:"fitcontent"}} className="d-inline  p-2" >
                 <img style={{width:"100%",height:"100%",objectFit:"contain"}} src="https://preview.colorlib.com/theme/musiclab/assets/img/hero/xhero-desktop.png.pagespeed.ic.xxQqC5O0F5.webp" alt="err"/>
            </div>
           
        </div>
    )
}
