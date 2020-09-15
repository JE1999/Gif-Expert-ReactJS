import { useState, useEffect } from "react"
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = (category) =>{
    const [ state, setState ] = useState({
        data: [],
        loading: true,
        error: false
    });

    useEffect(() =>{
        
        getGift(category)
            .then( imgs => {
                setState({
                    data : imgs,
                    loading : false
                })
            })
            .catch( error => {
                console.log('error JE', error)
                setState({error : true});
            })
    
    }, [category])

    return state;
}