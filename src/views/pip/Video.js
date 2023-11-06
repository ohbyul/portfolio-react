import React, {useEffect, useState} from "react";
import ReactPlayer from 'react-player/lazy';

const Video = ({title, vodPlaylistId}) => {
    const [playIndex, setPlayIndex] = useState(0);
    const playList = [
        {index:1, url: 'https://https://www.youtube.com/watch?v=UVRUKtHuZh0'},
        {index:2, url: 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8'},
        {index:3, url: 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'}
    ];

    const handleNextVideo = (video, playIndex) => {
        if(playIndex === video.length - 1){
            setPlayIndex(0);
        }else{
            setPlayIndex(playIndex + 1);
        }
    }

    const selectVideo = (index) => {
        setPlayIndex(index);
    }

    if(playList === null) return <p>Loading...</p>;

    return (
        <>
            <h2>Player Test</h2>
            <div className='player-wrapper'>
                <ReactPlayer
                    url={playList[playIndex].url}
                    playing
                    controls
                    muted
                    progressInterval={1000}
                    pip={true}
                    onEnded={() => {handleNextVideo(playList, playIndex)}}
                    width={'800px'}
                    height={'500px'}
                />
            </div>
        </>
    );
};

export default Video;