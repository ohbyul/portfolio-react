import React, { useRef } from 'react';
import { Button } from 'flowbite-react';

const TabRecord = () => {

    const downloadButtonRef = useRef(null)

    const previewRef = useRef(null)
    const recordingRef = useRef(null)

    let recorder;
    let recordedChunks;

    //functions
    function videoStart() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                previewRef.current.srcObject = stream;
                previewRef.current.onloadedmetadata = function () { previewRef.current.play(); };
                startRecording(previewRef.current.captureStream())
            })

    }

    function startRecording(stream) {
        recordedChunks = [];
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => { recordedChunks.push(e.data) }
        recorder.start();
    }

    function stopRecording() {
        previewRef.current.srcObject.getTracks().forEach(track => track.stop());
        recorder.stop();
    }

    function playRecording() {
        const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
        recordingRef.current.src = URL.createObjectURL(recordedBlob);
        recordingRef.current.play();
        downloadButtonRef.current.href = recordingRef.current.src;
        downloadButtonRef.current.download = `recording_${new Date()}.webm`;
        console.log(recordingRef.current.src);
    }

    return (
        <div>
            <div className="record-wrapper">
                <div className="button-container">
                    <button className="video-btn record-button" onClick={videoStart}>녹화</button>
                    <button className="video-btn stop-button" onClick={stopRecording}>중지</button>
                    <button className="video-btn play-button" onClick={playRecording}>녹화보기</button>
                    <a className="download-button" ref={downloadButtonRef}>다운로드</a>
                </div>
                <div className="video-container">
                    <div className="video-item">
                        <h2>녹화중</h2>
                        <video autoplay muted ref={previewRef}></video>
                    </div>
                    <div className="video-item">
                        <h2>미리보기</h2>
                        <video ref={recordingRef}></video>
                    </div>
                </div>

                <div className='video-info'>
                    <span >녹화 및 비디오 테스트 화면입니다. 어디에도 저장되지않습니다.</span>
                    <p>This is test page for record , video. No saved anywhere.</p>
                </div>
            </div>

        </div>
    );
};

export default TabRecord;