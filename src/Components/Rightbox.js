import React from "react";
import MainSection from './Section/Mainsection';
import SortSection from "./Section/SortSection";
import Accordination from './Section/Accordination';
import '../assets/styles.css'


export default function Rightbox() {
    return (
        <>
            <div className="rightbox">
                <div></div>
                <MainSection />
                <section className="banner_sec">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                    </div>
                </section>
                <SortSection />
            </div>
        </>
    );
}