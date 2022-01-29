import React, {useState}from "react";
import "./style.css";
import { getRecevingDate, getLastUpdate, getLastState } from '../../Service';
import approval from '../../assets/approval.png';
import van from '../../assets/van.png';
import delivered from '../../assets/delivered.png';
import correct from '../../assets/correct.png';
import check from "../../assets/check.png";

export default function Progress({ data }) {
    const[currentState,setCurrentState] = useState("OUT_FOR_DELIVERY" );
    return (
        <>
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
                    <p className='title textEnd'>{'اخر تحديث'}</p>
                    <p className="titleValue textEnd">
                        {getLastUpdate(data?.CurrentStatus.timestamp)}
                    </p>
                </div>
                <div>
                    <p className='title textEnd'>{`${data?.TrackingNumber} رقم الشحنة`}</p>
                    <p className="titleValue textEnd">
                        {getLastState(data?.CurrentStatus.state)}
                    </p>
                </div>
            </div>
            <div className="progressContainer">
                <div>
                    <div className="progressBar">
                        <div className="leftIconContainer" >
                            <img src={currentState ==="DELIVERED" ?correct:delivered} 
                            style={{ backgroundColor: "transparent" }
                            } 
                            />
                        </div>
                    </div>
                    <p className="textStart">{'تم التسليم'}</p>
                </div>
                <div>
                    <div className="progressBar">
                        <div className="middleIconContainer" >
                            <img src={currentState ==="DELIVERED" ?correct
                               :currentState ==="OUT_FOR_DELIVERY"?check:van
                            } 
                            style={{ backgroundColor: "transparent" }
                            } 
                            />
                        </div>
                    </div>
                    <p className="textCenter">{'الشحنة خرجت للتسليم'}</p>
                </div>
                <div>
                    <div className="progressBar">
                        <div className="middleIconContainer" >
                            <img src={
                                currentState ==="DELIVERED" ?correct
                               :currentState ==="TICKET_CREATED"?van:check
                            } 
                               style={{ backgroundColor: "transparent" }
                            } 
                            />
                        </div>
                    </div>
                    <p className="textCenter">{'تم استلام الشحنة من التاجر'}</p>
                </div>
                <div>
                    <div className="progressBar" style={{ backgroundColor: "" }}>
                        <div className="rightIconContainer" >
                            <img 
                            src={
                                currentState==="DELIVERED" ?correct:check
                            } 
                            style={{ backgroundColor: "transparent" }
                            
                            } />
                        </div>

                    </div>
                    <p>{'تم انشاء الشحنة'}</p>
                </div>

            </div >
        </>
    );
}
// "TICKET_CREATED" "PACKAGE_RECEIVED" "OUT_FOR_DELIVERY" "DELIVERED"