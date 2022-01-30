import React, { useState } from 'react';
import './style.css';


export default function NavBar({ setTrackingNumber }) {
    const [visibility, setVisibility] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleInputNumber = (e) => {
        setInputValue(e.target.value);
    }
    const handleTrackingNumber = () =>{
        setTrackingNumber(inputValue);
        setVisibility(!visibility);
    }

    
    return (
        
        <nav className="navContainer">
            <div>
                <ul className="listContainer ">
                    <li className="listItem">
                        <a className="listLink" >
                            <span className='language'>ENG</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a className="listLink" >تسجيل الدخول</a>
                    </li>
                    <li className="splitLine"></li>
                    <li className="listItem"
                    >
                        <a className="listLink"
                            onClick={() => { setVisibility(!visibility) }}
                        >
                            تتبع شحنتك
                        </a>
                        <div className='searchBox' style={{
                            visibility: (visibility && "hidden")
                        }}>
                            <h2 className="searchHead">{'تتبع شحنتك'}</h2>
                            <p className='searchLable'>{'اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة'}</p>
                            <div className='searchForm'>
                                <button className="searchIconContainer"
                                    onClick={handleTrackingNumber}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search searchIcon" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                                <input
                                    className="searchInput"
                                    placeholder=" رقم الشحنة"
                                    value={inputValue}
                                    onChange={handleInputNumber}
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="listContainer">
                    <li className="listItem">
                        <a className="listLink">كلم المبيعات</a>
                    </li>
                    <li className="listItem">
                        <a className="listLink">الاسعار</a>
                    </li>
                    <li className="listItem">
                        <a className="listLink" >الرئيسية</a>
                    </li>
                </ul>
            </div>
            <div>
                <a className='listLink'>
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
