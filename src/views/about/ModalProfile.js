import React, { useState } from 'react';
import { Modal, Button } from 'flowbite-react';

const ModalProfile = (props) => {
    let { showModal, setShowModal, modalPlacement } = props
    
    return (
        <>
            <Modal show={showModal} position={modalPlacement} onClose={() => setShowModal(false)}>
                <Modal.Header className='p-3'>Hi </Modal.Header>
                <Modal.Body>
                    {/* <div className="space-y-6 p-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                        companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                        to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                        soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                    </div> */}
                    <div className="flex flex-col items-center pb-10">
                        <img height="96" src="/images/people/profile-picture-3.jpg" width="96" className="mb-3 rounded-full shadow-lg" alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Byeol Oh</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Developer</span>
                        <div className="space-y-6 p-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                        companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                        to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                        soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                    </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setShowModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
};

export default ModalProfile;
