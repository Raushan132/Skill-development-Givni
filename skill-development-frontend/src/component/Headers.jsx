import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Header = () => {

    const [Records, setData] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.19:8083/api/header')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);
    console.log(Records.map(data1 => {
        return data1;
    }));






    return (
        <>
            <header>

                <div id="header-sticky" className="tp-header-area header-space header-border-2">
                    <div className="container-fluid">
                        <div className="row g-0 align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="tp-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo-black.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-7 col-lg-8 d-none d-lg-block">
                                <div className="tp-main-menu tp-black-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            {Records.map((record) => {
                                                return (
                                                    <li className={`${(record.submenu.length)>0 ? "hasdropdown" : ""}`}>
                                                        <a href="index.html">{record.nav}</a>
                                                        <ul className={`${(record.submenu.length)>0 ? "submenu" : ""}`} >
                                                            {record.submenu && record.submenu.map(data => {
                                                                return (
                                                                    <li><a href={data.href}>{data.subnav}</a></li>
                                                                );
                                                            })}
                                                        </ul>

                                                    </li>
                                                );
                                            })}
                                            
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-6 col-6">
                                <div className="tp-header-right d-flex align-items-center justify-content-end">
                                    <div className="tp-header-info tp-header-black-info d-none d-xxl-block">
                                        <a className="header-icon" href="#"><img src="assets/img/svg/header-icon.svg" alt="" /></a>
                                        <a href="tel:0091590088">Call us : <span>+00 91 590 088 </span></a>
                                    </div>
                                    <div className="tp-header-button">
                                        <div className="button-bg-shape d-none d-md-block">
                                            <a className="tp-btn-border" href="about-us.html">Get Started</a>
                                        </div>
                                    </div>
                                    <div className="tp-toggle-bar d-lg-none">
                                        <a className="tp-menu-bar" href="javascript:void(0)"><i className="fas fa-bars"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
        </>
    );
};


export default Header;
