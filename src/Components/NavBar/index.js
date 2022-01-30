import React,{useState} from 'react';
import  './style.css';
export default function NavBar({trackingNumber,setTrackingNumber}) {
    const[visibility,setVisibility] = useState(false);
    
    const handleTrackingNumber = (e)=>{
        setTrackingNumber(e.target.value);
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
                            onClick={()=>{setVisibility(!visibility)}}
                        >
                            تتبع شحنتك
                        </a>
                        <div className='searchBox' style={{
                            visibility:(visibility&& "hidden")
                        }}> 
                            <input 
                                className="searchInput"
                                placeholder="ادخل رقم الشحنة" 
                                value={trackingNumber}
                                onChange={handleTrackingNumber}
                            />
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
