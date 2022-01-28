import React,{useState} from "react";
import "./style.css";
import { getRecevingDate, getLastUpdate, getLastState } from '../../Service';


export default function Progress({data}) {
 
    return (
    <div className="detailContainer">
      <div>
        <p className='title'>{'موعد التسليم خلال'}</p>
        <p>
            {getRecevingDate(data?.PromisedDate)}
        </p>
      </div>
      <div>
        <p className='title'>{'اسم التاجر'}</p>
        <p>{'SOUQ.COM'}</p>
      </div>
      <div>
        <p className='title'>{'اخر تحديث'}</p>
        <p>
            {getLastUpdate(data?.CurrentStatus.timestamp)}
        </p>
      </div>
      <div>
        <p className='title'>{`${data?.TrackingNumber} رقم الشحنة`}</p>
        <p>
            {getLastState(data?.CurrentStatus.state)}
        </p>
      </div>
    </div>
  );
}
