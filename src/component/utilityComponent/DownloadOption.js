import React from 'react'

export default function DownloadOption({img,title,discription}) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center  m-3 ">
            <img  src={img} alt="ok"/>
            <h3>{title}</h3>
            <p className="pr-md-3 pl-md-3" >{discription}</p>
        </div>
    )
}
