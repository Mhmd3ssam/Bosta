import React from 'react';
import './style.css'
import { generateDate, generateTime, translateState } from '../../Service';

export default function Details({ data }) {
    console.log(data);
    return (
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
                {data?.TransitEvents.map(({state,timestamp,reason}) => {
                    return (
                        <tr>
                            <td >
                                <>
                                    <p>{translateState(state)}</p>
                                    {reason?reason:null}
                                </>
                             </td>
                            <td>{generateTime(timestamp)}</td>
                            <td>{generateDate(timestamp)}</td>
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}
