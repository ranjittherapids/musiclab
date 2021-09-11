
import React, { useState } from 'react'
import Button from '../utilityComponent/Buttom'
import './header.css'
export default function Header() {
    const [menu, setmenu] = useState(false)
    return (
        <div className=" container-fluid bg-black d-flex align-items-center justify-content-between pt-4 pb-4 position-sticky top-0 start-0 end-0">
            <div className="header_logo ">
                <img src="/images/logo.webp" alt="network problems" />
            </div>
            <div className={`${menu ? "menu" : "header_middle  d-none d-lg-inline "} `}>
                <a className={`${menu?"menusectionlink":"sectionlink"}`} href="#home" >home</a>
                <a className={`${menu?"menusectionlink":"sectionlink"}`} href="#feature">feature</a>
                <a className={`${menu?"menusectionlink":"sectionlink"}`} href="#pricing">pricing</a>
                <a className={`${menu?"menusectionlink":"sectionlink"}`} href="#download">download</a>
                <a className={`${menu?"menusectionlink":"sectionlink"}`} href="#blog">blog</a>
                <a className={`${menu?"menusectionlink":"sectionlink"}`} href="#contact">contact</a>
            </div>
            <div className="d-flex align-items-center">
                <Button title="sign in" />
                <i onClick={() => {
                    if (menu === true) {
                        setmenu(false)
                    }
                    else {
                        setmenu(true)
                    }
                }} className=" d-lg-none d-inline more fas fa-bars"></i>
            </div>
        </div>

    )
}
