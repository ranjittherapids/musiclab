import React from 'react'
import FeatureHighlight from '../utilityComponent/FeatureHighlight'

export default function Feature() {
    return (
        <div id="feature" className="container-fluid text-black bg-white  m-0  ">
            <div className="row">
                <div className=" col-lg-7 col-sm-12 p-5 ">
                    <img style={{ width: "80%", height: "fitcontent" }} src="/images/feature.png" alt="#" />
                </div>
                <div className="p-4 pt-5 mt-5 col-lg-5 col-sm-12 d-flex-column  align-items-center justify-content-center ">
                    <img className="p-2" src="/images/audiowave.webp" alt="#" />
                    <h1 className="p-2" style={{ fontWeight: "bolder", fontSize: "3rem" }}>Listen to a persona lized mix of tracks</h1>
                    <FeatureHighlight count="1" title="Reduce unnecessary spend with real time insights into every penny spent." />
                    <FeatureHighlight count="2" title="Reduce unnecessary spend with real time insights into every penny spent." />
                    <FeatureHighlight count="3" title="Reduce unnecessary spend with real time insights into every penny spent." />
                </div>

            </div>
            <div style={{background:"#f2f2f2"}} className=" p-5  row">
                <div className=" col-lg-5 col-md-12 mb-5">
                    <h1>We are tender heart charity foundation.</h1>
                    <FeatureHighlight count1="/images/play.svg" title="Reduce unnecessary spend with real time insights into every penny spent."/>
                    <FeatureHighlight count1="/images/play.svg" title="Reduce unnecessary spend with real time insights into every penny spent."/>
                    <FeatureHighlight count1="/images/play.svg" title="Reduce unnecessary spend with real time insights into every penny spent."/>
                    <FeatureHighlight count1="/images/play.svg" title="Reduce unnecessary spend with real time insights into every penny spent."/>
                </div>
                <div className="col-lg-7 col-md-12  ">
                     <img style={{objectFit:"cover",width:"100%",height:"100%"}} src="/images/feature1.png" alt="@"/>
                </div>
               
            </div>

        </div>
    )
}
