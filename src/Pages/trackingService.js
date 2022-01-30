import React, { useEffect, useState } from 'react';
import './style.css';
import { useFetch } from '../Hooks/useFetch';

import NavBar from '../Components/NavBar/';
import Progress from '../Components/Progress'
import Details from '../Components/Details';
import Adress from '../Components/Adress';

export default function TrackingService() {
    const [trackingNumber, setTrackingNumber] = useState('')
    const { data, loading, error } = useFetch(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);

    console.log(loading)
    useEffect(() => {
        document.title = 'Bosta | Fastest Courier Service in Egypt';
    }, []);


    return (
        <>
            {loading ?
                <NavBar setTrackingNumber={setTrackingNumber} />
                :
                <>
                    <NavBar  setTrackingNumber={setTrackingNumber} />
                    <section className='progressSectionContainer'>
                        <Progress data={data} />
                    </section>
                    <section className='detailsContainer'>
                        <Adress data={data} />
                        <Details data={data} />
                    </section>
                </>
            }
        </>

    )
}
