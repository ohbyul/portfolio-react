import React, { useRef } from 'react';
import usePictureInPicture from 'react-use-pip'
import { Button } from 'flowbite-react';
const TabPip = () => {
    const videoRef = useRef(null)
    const {
        isPictureInPictureActive,           //PIP 모드가 활성인지 비활성인지 여부
        isPictureInPictureAvailable,        //PIP 모드가 지원되고 활성화되었는지 여부
        togglePictureInPicture,
    } = usePictureInPicture(videoRef)


    return (
        <div className="">
            <div className='tab-title'>
                <div className='dark:text-white'>Picture in Picture</div>
                <div>
                    {isPictureInPictureAvailable && (
                        <Button color="warning" onClick={() => togglePictureInPicture(!isPictureInPictureActive)} className={isPictureInPictureActive ? 'Disable' : 'Enable'}>
                            PIP 모드 전환
                        </Button>
                    )}
                </div>
            </div>
            <div className='tab-content'>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    controls
                    loop
                    width="100%"
                    src="https://storage.googleapis.com/media-session/caminandes/short.mp4"
                />
            </div>

        </div>
    );
};

export default TabPip;