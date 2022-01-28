import React, {useEffect}from 'react';
import './style.css';
import {useFetch} from '../Hooks/useFetch';

import NavBar from '../Components/NavBar/';
import Progress from '../Components/Progress'
import Details from '../Components/Details';
import Adress from '../Components/Adress';

export default function TrackingService() {
    const{data,loading}= useFetch('https://tracking.bosta.co/shipments/track/1094442');

    useEffect(()=>{
        document.title = 'Bosta | Fastest Courier Service in Egypt';
    },[]);
    
    return(
        <>
           <NavBar/> 
           <section className='progressContainer'>
               <Progress data={data}/>
           </section>
           <section className='detailsContainer'>
                <Adress data={data}/>    
                <Details data={data}/>
           </section>  
        </>
    )
}
