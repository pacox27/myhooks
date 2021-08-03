import React, {useState,useEffect, useRef} from 'react';

const useFetch = (url) => {
    const [state,setState] = useState({
        data:null,
        loading:true,
        error:null
    });

    const isMounted = useRef(true);

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    },[]);

    useEffect( () => {
        setState({
            data:null,
            loading:true,
            error:null
        });

        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setTimeout(() => {
                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        data
                    })
                }else{
                    console.log('no se llamo');
                }
            },1000);
        });
    },[url]);

    
    console.log(state);
    return state;
}


export default useFetch;