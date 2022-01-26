import { useEffect, useState } from "react";
export const useFetch = (url)=>{
    const[state, setState] = useState({data:null, loading:true});
    useEffect(()=>{
        setState({data:null, loading:true});
        fetch(url)
        .then((res)=>{
            let result = res.json(); 
            setState({data:result, loading:false});
            localStorage.setItem('item',JSON.stringify(result));
        });
    },[url]);
    return state;
};