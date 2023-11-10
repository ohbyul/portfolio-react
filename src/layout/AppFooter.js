import React, { useEffect, useState } from 'react';

import { Footer ,Tooltip  } from 'flowbite-react';
import { BsGithub, BsFillEnvelopeFill , BsInfoCircleFill} from 'react-icons/bs';
import { SiTistory } from "react-icons/si";
import ModalProfile from '../views/about/ModalProfile';


const AppFooter = (props) => {
    const [ showModal , setShowModal ] = useState(false);
    const [ modalPlacement, setModalPlacement ] = useState('bottom-right')
  
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <div className="mx-auto w-full p-2 py-6 lg:py-8">

                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright by="byeol.oh" year={2023} />
                    <div className="mt-1 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Tooltip content="Profile" style="light" className='m-0'>
                            <Footer.Icon href="#" icon={BsInfoCircleFill} onClick={() => setShowModal(true)}/>
                        </Tooltip>
                        <Tooltip content="Tistory" style="light" className='m-0'>
                            <Footer.Icon href="https://byul91oh.tistory.com/" icon={SiTistory} />
                        </Tooltip>
                        <Tooltip content="Github" style="light" className='m-0'>
                            <Footer.Icon href="https://github.com/ohbyul" icon={BsGithub} />
                        </Tooltip>
                        <Tooltip content="Email" style="light" className='m-0'>
                            <Footer.Icon href="#" icon={BsFillEnvelopeFill} onClick={()=>props.history.push('/contact')}/>
                        </Tooltip>
                    </div>
                </div>

            </div>
            {
                showModal && <ModalProfile showModal={showModal} setShowModal={setShowModal} modalPlacement={modalPlacement} />
            }
        </footer>
    )
}

export default React.memo(AppFooter)
