import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
    // let jsonData="";

const [Records, setData] = useState([]);

useEffect(() => {
    fetch('http://localhost:8081/api/home2')
    .then(res => res.json())
    .then(json => setData(json));
},[]);
    console.log(Records.map(data1=>{
        return data1;
    }));


    return (

        <div className="tphero__area hero-area-space" data-background="assets/img/hero/hero-bg-shape.png">
            <div className="container">
                <div className="row align-items-center hero-bottom-space">
                    <h1>
                      
                    </h1>
                    
                
                </div>
            </div>
        </div>
    );

}

export default Dashboard;