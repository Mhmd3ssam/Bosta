import React from 'react';
import './style.css'
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
                {data?.TransitEvents.map(({state,timestamp}) => {
                    return (
                        <tr>
                            <td >{state}</td>
                            <td>{timestamp.split('T')[1].split(".")[0]}</td>
                            <td>{timestamp.split('T')[0]}</td>
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}
