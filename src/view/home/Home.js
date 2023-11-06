import React, { useEffect, useState } from 'react';

import has from "has";
import { camelCase } from "change-case";
import { useParams } from 'react-router-dom';

const Home = () => {

    const params = useParams()

    const originalSnake = {
        HELLO_WORLD: "hello value",
        HI_THERE: "hi value",
    };
    const [ convertResult , setConvertResult] = useState()

    useEffect(()=>{
        camelToSnake(originalSnake)
        console.log(params);
    },[])

    const camelToSnake = (str) => {
        let converted = {}
        Object.keys(str).map(item =>{
            if(has(originalSnake,item)){
                converted[camelCase(item)] = originalSnake[item];
            }
        })
        setConvertResult(converted)
    }
    
    useEffect( () => {
        if(convertResult){
            // console.log(originalSnake);
            // console.log(convertResult);
        }
    },[convertResult])


    return (
        <div>
            home
        </div>
    );
};

export default Home;