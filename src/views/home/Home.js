import React, { useEffect, useRef, useState } from 'react'

import { actionGetHello } from '../../modules/action/CommonAction';
import ComponentSection from './components/ComponentSection';

const Home = (props) => {
    const [hello, setHello] = useState()

    useEffect(() => {
        const server = process.env.SERVER
        actionGetHello().then(res => {
            setHello(res)
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className='dark:bg-gray-800 w-100 h-100'>
            <ComponentSection hello={hello}/>
        </div>
    )
}

export default Home;
