import React from "react";
import "./style.css";
import { getRecevingDate, getLastUpdate, getLastState } from '../../Service';
import approval from '../../assets/approval.png';
import correct from '../../assets/correct.png';
import van from '../../assets/van.png';
import delivered from '../../assets/delivered.png';


export default function Progress({ data }) {

    return (
        <div>
            <div className="detailContainer">
                <div>
                    <p className='title'>{'موعد التسليم خلال'}</p>
                    <p className="titleValue">
                        {getRecevingDate(data?.PromisedDate)}
                    </p>
                </div>
                <div>
                    <p className='title'>{'اسم التاجر'}</p>
                    <p className="titleValue">{'SOUQ.COM'}</p>
                </div>
                <div>
                    <p className='title'>{'اخر تحديث'}</p>
                    <p className="titleValue">
                        {getLastUpdate(data?.CurrentStatus.timestamp)}
                    </p>
                </div>
                <div>
                    <p className='title'>{`${data?.TrackingNumber} رقم الشحنة`}</p>
                    <p className="titleValue">
                        {getLastState(data?.CurrentStatus.state)}
                    </p>
                </div>
            </div>
            <div className="progressContainer">
                <div>
                    <div className="progressBar">
                        <div className="leftIconContainer" >
                            <img src={delivered} style={{ backgroundColor: "transparent" }} />
                        </div>
                    </div>
                    <p className="barText">{'تم التسليم'}</p>
                </div>
                <div>
                    <div className="progressBar">
                        <div className="middleIconContainer" >
                            <img src={van} style={{ backgroundColor: "transparent" }} />
                        </div>
                    </div>
                    <p className="barText">{'الشحنة خرجت للتسليم'}</p>
                </div>
                <div>
                    <div className="progressBar">
                        <div className="middleIconContainer" >
                            <img src={van} style={{ backgroundColor: "transparent" }} />
                        </div>
                    </div>
                    <p className="barText">{'تم استلام الشحنة من التاجر'}</p>
                </div>
                <div>
                    <div className="progressBar" style={{ backgroundColor: "#f9ba02" }}>
                        <div className="rightIconContainer" >
                            <img src={approval} style={{ backgroundColor: "transparent" }} />
                        </div>

                    </div>
                    <p className="barText">{'تم انشاء الشحنة'}</p>
                </div>

            </div >
        </div>

    );
}
