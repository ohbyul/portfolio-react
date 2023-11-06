import React, { useRef } from 'react';
import usePictureInPicture from 'react-use-pip'

const Pip = () => {
    const videoRef = useRef(null)
    const {
        isPictureInPictureActive,           //PIP 모드가 활성인지 비활성인지 여부
        isPictureInPictureAvailable,        //PIP 모드가 지원되고 활성화되었는지 여부
        togglePictureInPicture,
    } = usePictureInPicture(videoRef)


    
    return (
        <div className="App">
            <video 
                ref={videoRef} 
                autoPlay 
                muted 
                controls 
                loop 
                width="100%"
                src="https://storage.googleapis.com/media-session/caminandes/short.mp4"
            />
            {
                isPictureInPictureAvailable && 
                    (
                        <button onClick={() => togglePictureInPicture(!isPictureInPictureActive)}>
                            {isPictureInPictureActive ? 'Disable' : 'Enable'} Picture in Picture
                        </button>
                    )
            }
        </div>
    );
};

export default Pip;