import React , { useState } from 'react';
import { Button, Modal, Select } from 'flowbite-react';
import ModalProfile from './ModalProfile';


const About = (props) => {
    const [ showModal , setShowModal ] = useState(false);
    const [ modalPlacement, setModalPlacement ] = useState('bottom-right')
  
    return (
        <div className='container-wrap'>
            About
            {
                showModal && <ModalProfile showModal={showModal} setShowModal={setShowModal} modalPlacement={modalPlacement} />
            }
        </div>
    );
};

export default About;
