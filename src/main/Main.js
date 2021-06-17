import React  from 'react'
import { omdbApi } from '../consts'
import { fetchData } from '../fetchData'
import {useState, useEffect} from 'react'

const Main = () => {
    
    const [state, setState] = useState({
        result: {},
        loading: true
    })

    useEffect(() => {
        (async () => {
            const searchingWord = 'the'
            const data = await fetchData( `${omdbApi}&t=${searchingWord}`)
            setState({result: data, loading:false})
        })()// IIFE
    }, [])

   
    return (
        <div>
            {state.loading ? 
                <p>loading...</p>
                :
                JSON.stringify(state.result)
            }
  
        </div>
    )

}

export default Main
