import React from "react";
// import HomeData from "./HomeData.json";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {

   const [HomeData, setData] = useState([]);

   useEffect(() => {
       fetch('http://192.168.1.21:8081/api/home2')
       .then(res => res.json())
       .then(json => setData(json));
   },[]);
       



   return (
      <>
         {/* main component */}

         <main>
            {/* <!-- tp-slider-area-start --> */}
            <div className="tphero__area hero-area-space" data-background="assets/img/hero/hero-bg-shape.png">
               <div className="container">
                  <div className="row align-items-center hero-bottom-space">

                     {HomeData.map((tabs) => {
                        return (
                           <>
                              {tabs.tab1 && tabs.tab1.map(data => {
                                 return (
                                    <>
                                       <div className="col-xl-6 col-lg-6 col-md-6">

                                          <div className="tphero__info">
                                             <h4 className="tp-hero-title">

                                                {data.title}

                                             </h4>
                                             <div className="tphero__info-list">
                                                <ul>
                                                   {data["info-list"].map(element => {
                                                      return (
                                                         <li><i className="far fa-check"></i>{element}</li>
                                                      );
                                                   })}
                                                </ul>
                                             </div>
                                          </div>
                                          <div className="tphero__wrapper d-flex align-items-center">
                                             <div className="tphero__wrapper-button">
                                                <a className="tp-btn-border tp-yellow-shape" href={data.btn[0]}>{data.btn[1]}</a>
                                             </div>
                                             <div className="tphero__wrapper-playbtn">
                                                <a className="popup-video" href="https://www.youtube.com/watch?v=0UtqIJ3OV7o"><i
                                                   className="fas fa-play"></i></a>
                                                <span className="d-md-none">Play Video</span>
                                             </div>
                                          </div>

                                       </div>
                                       <div className="col-xl-6 col-lg-6 col-md-6">
                                          <div className="tphero__thumb">
                                             <img src={`assets/img/hero/${data.image}`} alt="" />
                                          </div>
                                       </div>

                                    </>
                                 );
                              })}

                           </>
                        );
                     })}
                  </div>

                  {/* <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tphero__info">
                     <h4 className="tp-hero-title">Insurance make your life better</h4>
                     <div className="tphero__info-list">
                        <ul>
                           <li><i className="far fa-check"></i>Get all claims at anytime</li>
                           <li><i className="far fa-check"></i>Trusted by more then 800 companies</li>
                           <li><i className="far fa-check"></i>Payment at Contingency</li>
                        </ul>
                     </div>
                  </div>
                  <div className="tphero__wrapper d-flex align-items-center">
                     <div className="tphero__wrapper-button">
                        <a className="tp-btn-border tp-yellow-shape" href="contact.html">Contact us today</a>
                     </div>
                     <div className="tphero__wrapper-playbtn">
                        <a className="popup-video" href="https://www.youtube.com/watch?v=0UtqIJ3OV7o"><i
                              className="fas fa-play"></i></a>
                        <span className="d-md-none">Play Video</span>
                     </div>
                  </div>
               </div> 
                     <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="tphero__thumb">
                           <img src="../../../../assets/img/hero/hero-img-1.png" alt="" />
                        </div>
                     </div>
                  
                  </div>
                  */}
                  <div className="tp-Service-area">
                     <div className="row g-0">
                        <div className="col-xl-4 col-lg-4">
                           <div className="financial-service financial-theme-color">
                              <h4 className="ff-service-title"><a href="service-details.html">Professional Liability</a></h4>
                              <p className="mb-0">Exerci tation ullamcorper suscipit lobortis nisle </p>
                              <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M28.042 8.70711C28.4325 8.31658 28.4325 7.68342 28.042 7.29289L21.678 0.928932C21.2875 0.538408 20.6543 0.538408 20.2638 0.928932C19.8733 1.31946 19.8733 1.95262 20.2638 2.34315L25.9206 8L20.2638 13.6569C19.8733 14.0474 19.8733 14.6805 20.2638 15.0711C20.6543 15.4616 21.2875 15.4616 21.678 15.0711L28.042 8.70711ZM0.528809 9L27.3348 9V7L0.528809 7V9Z"
                                    fill="currentColor" />
                              </svg>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                           <div className="financial-service financial-theme-yellow">
                              <h4 className="ff-service-title"><a href="service-details.html">Financial Services</a></h4>
                              <p className="mb-0">Exerci tation ullamcorper suscipit lobortis nisle </p>
                              <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M28.042 8.70711C28.4325 8.31658 28.4325 7.68342 28.042 7.29289L21.678 0.928932C21.2875 0.538408 20.6543 0.538408 20.2638 0.928932C19.8733 1.31946 19.8733 1.95262 20.2638 2.34315L25.9206 8L20.2638 13.6569C19.8733 14.0474 19.8733 14.6805 20.2638 15.0711C20.6543 15.4616 21.2875 15.4616 21.678 15.0711L28.042 8.70711ZM0.528809 9L27.3348 9V7L0.528809 7V9Z"
                                    fill="currentColor" />
                              </svg>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                           <div className="financial-service financial-common-red">
                              <h4 className="ff-service-title"><a href="service-details.html">Preferred Cash Rewards</a></h4>
                              <p className="mb-0">Exerci tation ullamcorper suscipit lobortis nisle </p>
                              <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M28.042 8.70711C28.4325 8.31658 28.4325 7.68342 28.042 7.29289L21.678 0.928932C21.2875 0.538408 20.6543 0.538408 20.2638 0.928932C19.8733 1.31946 19.8733 1.95262 20.2638 2.34315L25.9206 8L20.2638 13.6569C19.8733 14.0474 19.8733 14.6805 20.2638 15.0711C20.6543 15.4616 21.2875 15.4616 21.678 15.0711L28.042 8.70711ZM0.528809 9L27.3348 9V7L0.528809 7V9Z"
                                    fill="currentColor" />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- tp-slider-area-end -->

      <!-- tp-about-area-start --> */}
            <div className="tpabout__area pt-130 pb-100 black-bg">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6">
                        <div className="tpabout__thumb2">
                           <img src="../../assets/img/about/about-2-1.png" alt="" />
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6">
                        <div className="tpabout__section-title-box">
                           <h4 className="tp-section-subtitle">About us</h4>
                           <h3 className="tp-section-title pb-20 text-white">Change the way but <br /> life Insurance</h3>
                           <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse
                              quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse
                              quat.Exerci tationlobortis nisl aliquip ex ea commodo
                              n ullamcorper suscipit loborti excommodo</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- tp-about-area-end -->

      <!-- tp-mission-area-start --> */}
            <div className="tp-mission-area grey-bg pb-120 p-relative">
               <div className="misssion-black-bg"></div>
               <div className="container">
                  <div className="tp-mission-wrapper z-index-3">
                     <div className="row">
                        <div className="col-xl-10">
                           <div className="tp-mission-tab-section">
                              <nav>
                                 <div className="nav tp-mission-tab " id="nav-tab" role="tablist">
                                    <button className="nav-links active" id="nav-Mission-tab" data-bs-toggle="tab"
                                       data-bs-target="#Mission" type="button" role="tab" aria-controls="nav-Mission-tab"
                                       aria-selected="true"><span>Our Mission</span>
                                    </button>
                                    <button className="nav-links" id="nav-Vission-tab" data-bs-toggle="tab"
                                       data-bs-target="#Vission" type="button" role="tab" aria-controls="nav-Vission-tab"
                                       aria-selected="true"><span>Our
                                          Vission</span>
                                    </button>
                                    <button className="nav-links" id="nav-History-tab" data-bs-toggle="tab"
                                       data-bs-target="#History" type="button" role="tab" aria-controls="nav-History-tab"
                                       aria-selected="true"><span>Our
                                          History</span>
                                    </button>
                                    <button className="nav-links" id="nav-Goal-tab" data-bs-toggle="tab" data-bs-target="#Goal"
                                       type="button" role="tab" aria-controls="nav-Goal-tab" aria-selected="true"><span>Our
                                          Goal</span>
                                    </button>
                                 </div>
                              </nav>
                           </div>
                        </div>
                     </div>
                     <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="Mission" role="tabpanel" aria-labelledby="nav-Mission-tab"
                           tabindex="0">
                           <div className="row align-items-center">
                              <div className="col-xl-6 col-lg-6">
                                 <div className="tpmission">
                                    <div className="tpmission__info">
                                       <h4 className="tp-mission-title">Creating a better future <br /> for your loved once</h4>
                                       <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                                          insitamconse quat.Exerci tation ullamcorper suscipit lobort</p>
                                    </div>
                                    <div className="tpmission__list">
                                       <ul>
                                          <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                          <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                 <div className="tpmission__thumb">
                                    <img src="../../assets/img/mission/mission-1.jpg" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade " id="Vission" role="tabpanel" aria-labelledby="nav-Vission-tab"
                           tabindex="0">
                           <div className="row align-items-center">
                              <div className="col-xl-6">
                                 <div className="tpmission">
                                    <div className="tpmission__info">
                                       <h4 className="tp-mission-title">It is a long established <br /> fact that a reader</h4>
                                       <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                                          insitamconse quat.Exerci tation ullamcorper suscipit lobort</p>
                                    </div>
                                    <div className="tpmission__list">
                                       <ul>
                                          <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                          <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tpmission__thumb">
                                    <img src="../../assets/img/mission/mission-2.jpg" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade " id="History" role="tabpanel" aria-labelledby="nav-History-tab"
                           tabindex="0">
                           <div className="row align-items-center">
                              <div className="col-xl-6">
                                 <div className="tpmission">
                                    <div className="tpmission__info">
                                       <h4 className="tp-mission-title">We provide the best insurance policy</h4>
                                       <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                                          insitamconse quat.Exerci tation ullamcorper suscipit lobort</p>
                                    </div>
                                    <div className="tpmission__list">
                                       <ul>
                                          <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                          <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tpmission__thumb">
                                    <img src="../../assets/img/mission/mission-3.jpg" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade " id="Goal" role="tabpanel" aria-labelledby="nav-Goal-tab" tabindex="0">
                           <div className="row align-items-center">
                              <div className="col-xl-6">
                                 <div className="tpmission">
                                    <div className="tpmission__info">
                                       <h4 className="tp-mission-title">We inspire and help our customers</h4>
                                       <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                                          insitamconse quat.Exerci tation ullamcorper suscipit lobort</p>
                                    </div>
                                    <div className="tpmission__list">
                                       <ul>
                                          <li><i className="fal fa-check"></i>We are Award Winning Company</li>
                                          <li><i className="fal fa-check"></i>Always Work With Energetic Team</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tpmission__thumb">
                                    <img src="../../assets/img/mission/mission-4.jpg" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- tp-mission-area-end -->


      <!-- tp-service-area-start --> */}
            <div className="tp-sercvice-insurance pb-90 grey-bg z-index">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="sercviceinsurance__wrapper d-flex justify-content-between align-items-end mb-50">
                           <div className="sercviceinsurance__title sercviceinsurance__title2">
                              <h4 className="tp-section-subtitle">Our Services</h4>
                              <h3 className="tp-section-title">Covering all insurance fields</h3>
                           </div>
                           <div className="sercviceinsurance__button">
                              <a className="tp-btn-border tp-yellow-shape" href="service-details.html">See all services</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="sercviceinsurance mb-30">
                           <div className="sercviceinsurance__item">
                              <div className="sercviceinsurance__thumb">
                                 <div className="fix">
                                    <img src="../../assets/img/service/sv-img-1.png" alt="" />
                                 </div>
                              </div>
                              <div className="sercviceinsurance__content z-index-4">
                                 <div className="sercviceinsurance__content-circle">
                                    <i className="flaticon-family"></i>
                                 </div>
                                 <h4 className="tp-sv-insurance-title"><a href="service-details.html">Life Insurance</a></h4>
                                 <p>Insurance whenan unknow printer took a gallery of type and scrambled it to make <br /> a
                                    type specim...</p>
                              </div>
                              <a href="service-details.html">
                                 <div className="sercviceinsurance__svbtn d-flex justify-content-between align-items-center">
                                    <span>Read Details</span>
                                    <i className="fal fa-angle-right"></i>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="sercviceinsurance mb-30">
                           <div className="sercviceinsurance__item">
                              <div className="sercviceinsurance__thumb">
                                 <div className="fix">
                                    <img src="../../assets/img/service/sv-img-2.png" alt="" />
                                 </div>
                              </div>
                              <div className="sercviceinsurance__content z-index-4">
                                 <div className="sercviceinsurance__content-circle">
                                    <i className="flaticon-healthy-life"></i>
                                 </div>
                                 <h4 className="tp-sv-insurance-title"><a href="service-details.html">Home Insurance</a></h4>
                                 <p>Insurance whenan unknow printer took a gallery of type and scrambled it to make <br /> a
                                    type specim...</p>
                              </div>
                              <a href="service-details.html">
                                 <div className="sercviceinsurance__svbtn d-flex justify-content-between align-items-center">
                                    <span>Read Details</span>
                                    <i className="fal fa-angle-right"></i>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="sercviceinsurance mb-30">
                           <div className="sercviceinsurance__item">
                              <div className="sercviceinsurance__thumb">
                                 <div className="fix">
                                    <img src="../../assets/img/service/sv-img-3.png" alt="" />
                                 </div>
                              </div>
                              <div className="sercviceinsurance__content z-index-4">
                                 <div className="sercviceinsurance__content-circle">
                                    <i className="flaticon-protection"></i>
                                 </div>
                                 <h4 className="tp-sv-insurance-title"><a href="service-details.html">Car Insurance</a></h4>
                                 <p>Insurance whenan unknow printer took a gallery of type and scrambled it to make <br /> a
                                    type specim...</p>
                              </div>
                              <a href="service-details.html">
                                 <div className="sercviceinsurance__svbtn d-flex justify-content-between align-items-center">
                                    <span>Read Details</span>
                                    <i className="fal fa-angle-right"></i>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="sercviceinsurance mb-30">
                           <div className="sercviceinsurance__item">
                              <div className="sercviceinsurance__thumb">
                                 <div className="fix">
                                    <img src="../../assets/img/service/sv-img-4.png" alt="" />
                                 </div>
                              </div>
                              <div className="sercviceinsurance__content z-index-4">
                                 <div className="sercviceinsurance__content-circle">
                                    <i className="flaticon-health-insurance"></i>
                                 </div>
                                 <h4 className="tp-sv-insurance-title"><a href="service-details.html">Medical Insurance</a></h4>
                                 <p>Insurance whenan unknow printer took a gallery of type and scrambled it to make <br /> a
                                    type specim...</p>
                              </div>
                              <a href="service-details.html">
                                 <div className="sercviceinsurance__svbtn d-flex justify-content-between align-items-center">
                                    <span>Read Details</span>
                                    <i className="fal fa-angle-right"></i>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="sercviceinsurance mb-30">
                           <div className="sercviceinsurance__item">
                              <div className="sercviceinsurance__thumb">
                                 <div className="fix">
                                    <img src="../../assets/img/service/sv-img-5.png" alt="" />
                                 </div>
                              </div>
                              <div className="sercviceinsurance__content z-index-4">
                                 <div className="sercviceinsurance__content-circle">
                                    <i className="flaticon-healthy-life"></i>
                                 </div>
                                 <h4 className="tp-sv-insurance-title"><a href="service-details.html">Marriage insurance</a></h4>
                                 <p>Insurance whenan unknow printer took a gallery of type and scrambled it to make <br /> a
                                    type specim...</p>
                              </div>
                              <a href="service-details.html">
                                 <div className="sercviceinsurance__svbtn d-flex justify-content-between align-items-center">
                                    <span>Read Details</span>
                                    <i className="fal fa-angle-right"></i>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="sercviceinsurance mb-30">
                           <div className="sercviceinsurance__item">
                              <div className="sercviceinsurance__thumb">
                                 <div className="fix">
                                    <img src="../../assets/img/service/sv-img-6.png" alt="" />
                                 </div>
                              </div>
                              <div className="sercviceinsurance__content z-index-4">
                                 <div className="sercviceinsurance__content-circle">
                                    <i className="flaticon-risk-management"></i>
                                 </div>
                                 <h4 className="tp-sv-insurance-title"><a href="service-details.html">Travel Insurance</a></h4>
                                 <p>Insurance whenan unknow printer took a gallery of type and scrambled it to make <br /> a
                                    type specim...</p>
                              </div>
                              <a href="service-details.html">
                                 <div className="sercviceinsurance__svbtn d-flex justify-content-between align-items-center">
                                    <span>Read Details</span>
                                    <i className="fal fa-angle-right"></i>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- tp-service-area-end -->

      <!-- tp-insurance-area-start --> */}
            <div className="tp-insurance-area pt-120 pb-120 black-bg">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6">
                        <div className="tp-insurance-section-box mb-50">
                           <h3 className="tp-section-title text-white">Get an Insurance Quote <span>to get started!</span></h3>
                        </div>
                        <div className="tp-inurance-tab-section">
                           <nav>
                              <div className="nav tp-Insurance-tab " id="nav-tab1" role="tablist">
                                 <button className="nav-links button-bg-color-1 active" id="nav-Home-tab" data-bs-toggle="tab"
                                    data-bs-target="#Home" type="button" role="tab" aria-controls="nav-Home-tab"
                                    aria-selected="true">
                                    <span className="tpfeature">
                                       <span
                                          className="tpfeature__item tpfeature__item2 feature-color-one mb-15 d-flex justify-content-between align-items-center">
                                          <span className="tpfeature__item-info d-flex align-items-center">
                                             <i className="flaticon-property"></i>
                                             <span className="tp-feature-title m-0">Home Insurance</span>
                                          </span>
                                          <span className="tpfeature__item-icon">
                                             <i className="far fa-angle-right"></i>
                                          </span>
                                       </span>
                                    </span>
                                 </button>
                                 <button className="nav-links button-bg-color-2" id="nav-Car-tab" data-bs-toggle="tab"
                                    data-bs-target="#Car" type="button" role="tab" aria-controls="nav-Car-tab"
                                    aria-selected="true">
                                    <span className="tpfeature">
                                       <span
                                          className="tpfeature__item tpfeature__item2 feature-color-two  mb-15 d-flex justify-content-between align-items-center">
                                          <span className="tpfeature__item-info d-flex align-items-center">
                                             <i className="flaticon-protection"></i>
                                             <span className="tp-feature-title m-0">Car Insurance</span>
                                          </span>
                                          <span className="tpfeature__item-icon">
                                             <i className="far fa-angle-right"></i>
                                          </span>
                                       </span>
                                    </span>
                                 </button>
                                 <button className="nav-links button-bg-color-3" id="nav-Health-tab" data-bs-toggle="tab"
                                    data-bs-target="#Health" type="button" role="tab" aria-controls="nav-Health-tab"
                                    aria-selected="true">
                                    <span className="tpfeature">
                                       <span
                                          className="tpfeature__item tpfeature__item2 feature-color-three mb-15 d-flex justify-content-between align-items-center">
                                          <span className="tpfeature__item-info d-flex align-items-center">
                                             <i className="flaticon-health-insurance"></i>
                                             <span className="tp-feature-title m-0">Health Insurance</span>
                                          </span>
                                          <span className="tpfeature__item-icon">
                                             <i className="far fa-angle-right"></i>
                                          </span>
                                       </span>
                                    </span>
                                 </button>
                                 <button className="nav-links button-bg-color-4" id="nav-Education-tab" data-bs-toggle="tab"
                                    data-bs-target="#Education" type="button" role="tab" aria-controls="nav-Education-tab"
                                    aria-selected="true">
                                    <span className="tpfeature">
                                       <span
                                          className="tpfeature__item tpfeature__item2 feature-color-four mb-15 d-flex justify-content-between align-items-center">
                                          <span className="tpfeature__item-info d-flex align-items-center">
                                             <i className="flaticon-study"></i>
                                             <span className="tp-feature-title m-0">Education Insurance</span>
                                          </span>
                                          <span className="tpfeature__item-icon">
                                             <i className="far fa-angle-right"></i>
                                          </span>
                                       </span>
                                    </span>
                                 </button>
                              </div>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6">
                        <div className="tab-content" id="nav-tabContent1">
                           <div className="tab-pane fade show active" id="Home" role="tabpanel" aria-labelledby="nav-Home-tab"
                              tabindex="0">
                              <div className="tp-contact-form-wrapper  tp-contact-form-wrapper2">
                                 <div className="contact-section-title-box">
                                    <h4 className="tp-contact-sm-title text-white">Home Insurance</h4>
                                 </div>
                                 <div className="contactform contactform2">
                                    <form action="#">
                                       <div className="contactform__input">
                                          <input type="text" placeholder="Enter Name" />
                                       </div>
                                       <div className="contactform__input">
                                          <input type="text" placeholder="Enter Mail" />
                                       </div>
                                       <div className="contactform__select">
                                          <div className="tp-sp-icon">
                                             <select>
                                                <option>Property Type</option>
                                                <option>Home Insurance</option>
                                                <option>Car Insurance</option>
                                                <option>Health Insurance</option>
                                             </select>
                                          </div>
                                       </div>
                                       <div className="contactform__textarea">
                                          <textarea placeholder="Enter Message"></textarea>
                                       </div>
                                       <div className="contactform__button">
                                          <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div className="tab-pane fade" id="Car" role="tabpanel" aria-labelledby="nav-Car-tab" tabindex="0">
                              <div className="tp-contact-form-wrapper  tp-contact-form-wrapper2">
                                 <div className="contact-section-title-box">
                                    <h4 className="tp-contact-sm-title text-white">Car Insurance</h4>
                                 </div>
                                 <div className="contactform contactform2">
                                    <form action="#">
                                       <div className="contactform__input">
                                          <input type="text" placeholder="Enter Name" />
                                       </div>
                                       <div className="contactform__input">
                                          <input type="text" placeholder="Enter Mail" />
                                       </div>
                                       <div className="contactform__select">
                                          <div className="tp-sp-icon">
                                             <select>
                                                <option>Property Type</option>
                                                <option>Home Insurance</option>
                                                <option>Car Insurance</option>
                                                <option>Health Insurance</option>
                                             </select>
                                          </div>
                                       </div>
                                       <div className="contactform__textarea">
                                          <textarea placeholder="Enter Message"></textarea>
                                       </div>
                                       <div className="contactform__button">
                                          <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div className="tab-pane fade" id="Health" role="tabpanel" aria-labelledby="nav-Health-tab"
                              tabindex="0">
                              <div className="tp-contact-form-wrapper  tp-contact-form-wrapper2">
                                 <div className="contact-section-title-box">
                                    <h4 className="tp-contact-sm-title text-white">Health Insurance</h4>
                                 </div>
                                 <div className="contactform contactform2">
                                    <form action="#">
                                       <div className="contactform__input">
                                          <input type="text" placeholder="Enter Name" />
                                       </div>
                                       <div className="contactform__input">
                                          <input type="text" placeholder="Enter Mail" />
                                       </div>
                                       <div className="contactform__select">
                                          <div className="tp-sp-icon">
                                             <select>
                                                <option>Property Type</option>
                                                <option>Home Insurance</option>
                                                <option>Car Insurance</option>
                                                <option>Health Insurance</option>
                                             </select>
                                          </div>
                                       </div>
                                       <div className="contactform__textarea">
                                          <textarea placeholder="Enter Message"></textarea>
                                       </div>
                                       <div className="contactform__button">
                                          <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div className="tab-pane fade" id="Education" role="tabpanel" aria-labelledby="nav-Education-tab"
                              tabindex="0">
                              <div className="tp-contact-form-wrapper  tp-contact-form-wrapper2">
                                 <div className="contact-section-title-box">
                                    <h4 className="tp-contact-sm-title text-white">Education Insurance</h4>
                                 </div>
                                 <div className="contactform contactform2">
                                    <form action="#">
                                       <div className="contactform__input">
                                          <input type="text" placeholder="Enter Name" />
                                       </div>
                                       <div className="contactform__input">
                                          <input type="text" placeholder="Enter Mail" />
                                       </div>
                                       <div className="contactform__select">
                                          <div className="tp-sp-icon">
                                             <select>
                                                <option>Property Type</option>
                                                <option>Home Insurance</option>
                                                <option>Car Insurance</option>
                                                <option>Health Insurance</option>
                                             </select>
                                          </div>
                                       </div>
                                       <div className="contactform__textarea">
                                          <textarea placeholder="Enter Message"></textarea>
                                       </div>
                                       <div className="contactform__button">
                                          <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- tp-insurance-area-end -->


      <!-- tp-testimonial-area-start --> */}
            <div className="p-relative">
               <div className="testimonial-black-bg"></div>
               <div className="tp-testimonial-area pt-125 pb-125 testimonial-space z-index-6 white-bg"
                  data-background="assets/img/hero/hero-bg-shape-2.png">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="tp-testimonial-section-box text-center mb-10 z-index-6">
                              <h4 className="tp-section-subtitle">Client Testimonial</h4>
                              <h3 className="tp-section-title">Customers Feedback</h3>
                           </div>
                        </div>
                     </div>
                     <div className="testimonial-slider-active yellow-dots">
                        <div className="tptestimonial tptestimonial-2 ">
                           <div className="tptestimonial__rating">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented
                                 copywriter. yesterday I got his first Email that was amazing...
                                 experience with him</p>
                           </div>
                           <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                              <div className="tptestimonial__icon d-flex align-items-center">
                                 <img className="mr-25" src="assets/img/testimonial/testi-1.png" alt="" />
                                 <div className="tptestimonial__title">
                                    <h4 className="tp-testi-heading text-black">Esther Howard</h4>
                                    <span>P. Desiger of (Amazon)</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tptestimonial tptestimonial-2">
                           <div className="tptestimonial__rating">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented
                                 copywriter. yesterday I got his first Email that was amazing...
                                 experience with him</p>
                           </div>
                           <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                              <div className="tptestimonial__icon d-flex align-items-center">
                                 <img className="mr-25" src="assets/img/testimonial/testi-2.png" alt="" />
                                 <div className="tptestimonial__title">
                                    <h4 className="tp-testi-heading text-black">Esther Howard</h4>
                                    <span>P. Desiger of (Amazon)</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tptestimonial tptestimonial-2">
                           <div className="tptestimonial__rating">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented
                                 copywriter. yesterday I got his first Email that was amazing...
                                 experience with him</p>
                           </div>
                           <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                              <div className="tptestimonial__icon d-flex align-items-center">
                                 <img className="mr-25" src="assets/img/testimonial/testi-3.png" alt="" />
                                 <div className="tptestimonial__title">
                                    <h4 className="tp-testi-heading text-black">Esther Howard</h4>
                                    <span>P. Desiger of (Amazon)</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tptestimonial tptestimonial-2">
                           <div className="tptestimonial__rating">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented
                                 copywriter. yesterday I got his first Email that was amazing...
                                 experience with him</p>
                           </div>
                           <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                              <div className="tptestimonial__icon d-flex align-items-center">
                                 <img className="mr-25" src="assets/img/testimonial/testi-3.png" alt="" />
                                 <div className="tptestimonial__title">
                                    <h4 className="tp-testi-heading text-black">Esther Howard</h4>
                                    <span>P. Desiger of (Amazon)</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="tp-cta-area pb-130 cta-space-area">
               <div className="container-fluid">
                  <div className="tp-cta-bg-2" data-background="assets/img/cta/Cta-bg-2.jpg">
                     <div className="tp-cta-wrapper2 z-index-4 d-flex justify-content-between align-items-center">
                        <div className="row align-items-center">
                           <div className="col-xl-7 col-lg-7 col-md-12">
                              <div className="tp-cta-content">
                                 <h4 className="tp-cta-title text-black pb-10">Find a local insurance agent</h4>
                                 <p className="mb-0">It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout. The point of using Lorem Ipsum The
                                    man, </p>
                              </div>
                           </div>
                           <div className="col-xl-5 col-lg-5  col-md-12">
                              <div className="tp-cta-button cta-button-space text-lg-end">
                                 <a className="tp-btn-border tp-yellow-shape" href="contact.html">Get a quote now</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="tp-blog-area pb-90">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="sercviceinsurance__wrapper d-flex justify-content-between align-items-end mb-50">
                           <div className="sercviceinsurance__title blog-section-title-space">
                              <h4 className="tp-section-subtitle">Our Blog & Article</h4>
                              <h3 className="tp-section-title">Latest news & articles</h3>
                           </div>
                           <div className="sercviceinsurance__button">
                              <a className="tp-btn-border" href="blog-details.html">See all blog</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-6 col-12">
                        <div className="latestnews d-flex align-items-center mb-30">
                           <div className="latestnews__thumb fix">
                              <a href="blog-details.html"><img src="../../assets/img/blog/blog-2-1.jpg" alt="" /></a>
                           </div>
                           <div className="latestnews__content">
                              <div className="latestnews__content-meta d-flex align-items-center pb-20">
                                 <h5 className="mb-0">Medical Isurance</h5>
                                 <span><i className="far fa-clock"></i> 3 days ago</span>
                              </div>
                              <div className="latestnews__heading">
                                 <h4 className="tp-news-title"><a href="blog-details.html">The 8 best things about insurance</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-12">
                        <div className="latestnews latest-border-color-2 d-flex align-items-center mb-30">
                           <div className="latestnews__thumb fix">
                              <a href="blog-details.html"><img src="../../assets/img/blog/blog-2-2.jpg" alt="" /></a>
                           </div>
                           <div className="latestnews__content">
                              <div className="latestnews__content-meta d-flex align-items-center pb-20">
                                 <h5 className="mb-0">Health Insurance</h5>
                                 <span><i className="far fa-clock"></i> 3 days ago</span>
                              </div>
                              <div className="latestnews__heading">
                                 <h4 className="tp-news-title"><a href="blog-details.html">How to make a contrary to popular</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-12">
                        <div className="latestnews latest-border-color-3 d-flex align-items-center mb-30">
                           <div className="latestnews__thumb fix">
                              <a href="blog-details.html"><img src="../../assets/img/blog/blog-2-3.jpg" alt="" /></a>
                           </div>
                           <div className="latestnews__content">
                              <div className="latestnews__content-meta d-flex align-items-center pb-20">
                                 <h5 className="mb-0">Car Insurance</h5>
                                 <span><i className="far fa-clock"></i> 3 days ago</span>
                              </div>
                              <div className="latestnews__heading">
                                 <h4 className="tp-news-title"><a href="blog-details.html">The 8 best things about medical
                                    insurance</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-12">
                        <div className="latestnews latest-border-color-4 d-flex align-items-center mb-30">
                           <div className="latestnews__thumb fix">
                              <a href="blog-details.html"><img src="../../assets/img/blog/blog-2-4.jpg" alt="" /></a>
                           </div>
                           <div className="latestnews__content">
                              <div className="latestnews__content-meta d-flex align-items-center pb-20">
                                 <h5 className="mb-0">LIfe Insurance</h5>
                                 <span><i className="far fa-clock"></i> 3 days ago</span>
                              </div>
                              <div className="latestnews__heading">
                                 <h4 className="tp-news-title"><a href="blog-details.html">20 ways you can Fundraise for old
                                    care</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div>
                     </div>
                  </div>
               </div>
            </div>



         </main>


      </>
   );
};

export default Home;