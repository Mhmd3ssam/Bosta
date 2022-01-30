import { useEffect, useState } from "react";
export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true, error:null });
    const [error, setError] = useState(null);


    useEffect(() => {
        setState({ data: null, loading: true, error:null });

        async function init() {
            try {
                let res = await fetch(url);
                let result = await res.json();
                setState({ data: result, loading: false, error:null });
            } catch(e){
                setState({...state,error:e});
            }
              
        }
        init();

    }, [url]);
    return state;
};