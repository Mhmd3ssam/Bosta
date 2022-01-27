import React from 'react';
import './style.css';
import {useFetch} from '../Hooks/useFetch';

import NavBar from '../Components/NavBar/NavBar';
import Details from '../Components/Details/Details'
export default function TrackingService() {
    const{data,loading}= useFetch('https://tracking.bosta.co/shipments/track/9442984');
    return(
        <>
           <NavBar/> 
           <section className='container'>
                <Details data={data}/>
           </section>  
        </>
    )
}
