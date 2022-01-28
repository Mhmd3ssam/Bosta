import React from 'react';
import './style.css';
import QImage from '../../assets/question.png';

export default function Adress() {
    // Api does not provide an address for the tracking shipment so i made it static for now
    return (
        <div>
            <p>{'عنوان التسليم'}</p>
            <div className="adress">
                <p>{'امبابه شارع طلعت حرب مدينه العمال بجوار البرنس منزل 17 بلوك 22 '}</p>
            </div>
            <div className='QSectionContainer'>
                <div >
                    <p>
                        {'هل يوجد مشكلة في شحنتك؟'}
                    </p>

                    <button className="brimaryBtn">
                        {'ابلاغ عن مشكلة'}
                    </button>
                </div>
                <div className="imageContainer">
                    <img src={QImage} className="" />
                </div>
            </div>
        </div>

    )
}
