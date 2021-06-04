import React from 'react';
import '../css/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillArchiveFill} from 'react-icons/bs'
import logo from '../assets/images/logo.jpeg'

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row menuBar">
                <div className="col-lg-2">
                    <img className="logo"  alt="logo"  />
                </div>
                Menu Bar</div>
            <div className="row">
                <div className="col-lg-2 dashboardButtonSection">
                    <div className="row profileSection">
                        <div>
                            profile Image
                        </div>
                        <div>
                            welcome, Adams
                        </div>
                    </div>
                    <div className="row"><button className="dashboardButtons"><BsFillArchiveFill style={{marginRight:10}} /> Product</button></div>
                    <div className="row"><button className="dashboardButtons">Payment</button></div>
                    <div className="row"><button className="dashboardButtons">Delivery</button></div>
                    <div className="row"><button className="dashboardButtons">Logout</button></div>

                </div>
                <div className="col-lg-10">
                    <h1>Work Space</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
