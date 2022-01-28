import React from 'react';
import './style.css'
import { generateDate, generateTime, translateState, translateHup } from '../../Service';

export default function Details({ data }) {
    return (
        <div>
             <p>{'تفاصيل الشحنة'}</p>
            <table className="table table-bordered tableContainer">
            <thead>
                <tr>
                    <th scope="col" className="tapleHeader">تفاصيل</th>
                    <th scope="col" className="tapleHeader">الوقت</th>
                    <th scope="col" className="tapleHeader">التاريخ</th>
                    <th scope="col" className="tapleHeader">الفرع</th>
                </tr>
            </thead>
            <tbody>
                {data?.TransitEvents.map(({state,timestamp,reason,hub}) => {
                    return (
                        <tr>
                            <td>
                                <>
                                    <p>{translateState(state)}</p>
                                    {reason?<span style={{color:'#fbbe0d'}}>{reason}</span>:null}
                                </>
                            </td>
                            <td>{generateTime(timestamp)}</td>
                            <td>{generateDate(timestamp).replaceAll('-','/')}</td>
                            <td>{hub?translateHup(hub):'ـ ـ'}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
        
    );
}
