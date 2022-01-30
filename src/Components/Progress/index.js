import React, { useState } from "react";
import "./style.css";
import { getRecevingDate, getLastUpdate, getLastState } from '../../Service';
import van from '../../assets/van.png';
import delivered from '../../assets/delivered.png';
import correct from '../../assets/correct.png';
import check from "../../assets/check.png";

export default function Progress({ data }) {
    const [currentState, setCurrentState] = useState(data?.CurrentStatus.state);
    console.log(data?.CurrentStatus.state)
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
                    <p className='title '>{'اخر تحديث'}</p>
                    <p className="titleValue ">
                        {getLastUpdate(data?.CurrentStatus.timestamp)}
                    </p>
                </div>
                <div>
                    <p className='title '>{`${data?.TrackingNumber} رقم الشحنة`}</p>
                    <p className="titleValue"
                        style={{
                            color:data?.CurrentStatus.state === "DELIVERED"?"#4cac4c":"#ffd200"
                        }}
                    >
                        {getLastState(data?.CurrentStatus.state)}
                    </p>
                </div>
            </div>
            <div className="progressContainer">
                <div>
                    <div className="progressBar"
                        style={{
                            backgroundColor: 
                            data?.CurrentStatus.state === "DELIVERED" ? "#4cac4c":""
                        }}
                    >
                        <div className="leftIconContainer" >
                            <img src={data?.CurrentStatus.state === "DELIVERED" ? correct : delivered}
                                style={{ backgroundColor: "transparent" }
                                }
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="progressBar"
                        style={{
                            backgroundColor: 
                            data?.CurrentStatus.state === "DELIVERED" ? "#4cac4c":
                            data?.CurrentStatus.state === "OUT_FOR_DELIVERY" ?"#ffd200":""
                         }}
                    >
                        <div className="middleIconContainer" >
                            <img src={data?.CurrentStatus.state === "DELIVERED" ? correct
                                : data?.CurrentStatus.state === "OUT_FOR_DELIVERY" ? check : van
                            }
                                style={{ backgroundColor: "transparent" }
                                }
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="progressBar"
                        style={{
                           backgroundColor: 
                           data?.CurrentStatus.state === "DELIVERED" ? "#4cac4c":
                           data?.CurrentStatus.state === "TICKET_CREATED" ?"":
                           data?.CurrentStatus.state === ""?"":"#ffd200"
                        }}
                    >
                        <div className="middleIconContainer" >
                            <img src={
                                data?.CurrentStatus.state === "DELIVERED" ? correct
                                    : data?.CurrentStatus.state === "TICKET_CREATED" ? van :
                                    data?.CurrentStatus.state === "" ? van: check
                            }
                                style={{ backgroundColor: "transparent" }
                                }
                            />
                        </div>
                        <div className="rightIconContainer">
                            <img
                                src={
                                    data?.CurrentStatus.state === "DELIVERED" ? correct : check
                                }
                                style={{ backgroundColor: "transparent" }} />
                        </div>
                    </div>
                </div>
            </div >
            <div className="textProgressContainer">
                <div>
                    <p className="text-start">{'تم التسليم'}</p>
                </div>
                <div>
                    <p className="text-center">{'الشحنة خرجت للتسليم'}</p>
                </div>
                <div>
                    <p >{'تم استلام الشحنة من التاجر'}</p>
                </div>
                <div>
                    <p >{'تم انشاء الشحنة'}</p>
                </div>
            </div>
        </>
    );
}
// "TICKET_CREATED" "PACKAGE_RECEIVED" "OUT_FOR_DELIVERY" "DELIVERED" "CANCELED" DELIVERED 
// green #4cac4c yellow #ffd200

//style={{
//     backgroundColor:currentState==="DELIVERED"?"#4cac4c":currentState==="PACKAGE_RECEIVED"?"#ffd200":"",
// }}