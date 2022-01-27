import React from 'react';
import  './style.css';
export default function NavBar() {
    return (
        <nav className="navContainer">
            <div>
                <ul className="listContainer">
                    <li className="listItem">
                        <a className="listLink" href="/">
                           <span className='language'>ENG</span>  
                        </a>
                    </li>
                    <li className="listItem">
                        <a className="listLink" href="/">تسجيل الدخول</a>
                    </li>
                    <li className="splitLine"></li>
                    <li className="listItem">
                        <a className="listLink" href="/">تتبع شحنتك</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="listContainer">
                    <li className="listItem">
                        <a className="listLink" href="/">كلم المبيعات</a>
                    </li>
                    <li className="listItem">
                        <a className="listLink" href="/">الاسعار</a>
                    </li>
                    <li className="listItem">
                        <a className="listLink" href="/">الرئيسية</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="/" className='listLink'>
                    <img src="https://bosta.co/wp-content/uploads/2019/08/Component.svg"
                        alt="bosta.co"
                        id="logo" 
                        data-height-percentage="23"
                        data-actual-width="100"
                        data-actual-height="20"
                    />
                </a>
            </div>

        </nav>
    )
}
