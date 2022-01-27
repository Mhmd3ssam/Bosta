import { useEffect, useState } from "react";
export const useFetch = (url)=>{
    const[state, setState] = useState({data:null, loading:true});
    useEffect(()=>{
        setState({data:null, loading:true});
        (async ()=>{
                let res = await  fetch(url);
                let result = await res.json();
                setState({data:result, loading:false});
            }
        )();    
    },[url]);
    return state;
};