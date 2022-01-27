import React from 'react';
import {useFetch} from '../Hooks/useFetch';

import NavBar from '../Components/NavBar/NavBar';
export default function TrackingService() {
    const{data,loading}= useFetch('https://tracking.bosta.co/shipments/track/9442984');

    return(
        <>
           <NavBar/> 
        </>
    )
}
