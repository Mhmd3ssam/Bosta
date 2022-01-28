import React,{useState} from "react";
import "./style.css";

export default function Progress({data}) {
 
    return (
    <div className="detailContainer">
      <div>
        <p className='title'>{'موعد التسليم خلال'}</p>
        <p></p>
      </div>
      <div>
        <p className='title'>{'اسم التاجر'}</p>
        <p>{'SOUQ.COM'}</p>
      </div>
      <div>
        <p className='title'>{'اخر تحديث'}</p>
        <p></p>
      </div>
      <div>
        <p className='title'>{`${data?.TrackingNumber} رقم الشحنة`}</p>
        <p></p>
      </div>
    </div>
  );
}
