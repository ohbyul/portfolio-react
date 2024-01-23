import { Tooltip } from 'flowbite-react';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';

const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const timeText = moment().format('YYYY-MM-DD HH:mm')

function CurrentWeatherCondition({ timeZone, conditionText, conditionIcon, }) {
    // const time = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,)
    // console.log(time);
    // const timeText = `${time.hour}시 ${time.minute}분 ${time.seconds}초`
    return (
        <>
            {/* <span>{timeText} </span>
            <span>{conditionText}</span> */}
            <img
                src={`https:${conditionIcon}`}
                alt={conditionText}
                width={30}
                height={30}
            />
        </>
    )
}


const Weather = () => {
    const cityCode = 'Seoul'
    const cityName = '서울'
    const [current, setCurrent] = useState();
    const [location, setLocation] = useState();
    const path = `/${cityCode}?name=${cityName}`

    useEffect(() => {
        getCurrentWeather(cityCode).then((res) => {
            console.log(res);
            setCurrent(res?.current)
            setLocation(res?.location)
        })
    }, [])


    const getCurrentWeather = async (location) => {
        const url = `${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`;
        const res = await fetch(url)
        if (!res.ok) throw new Error('날씨 정보를 가져올수 없습니다.')

        return res.json()
    }


    return (
        <>
            <Tooltip content={`${timeText} [${cityName}] ${current?.temp_c}℃  ${current?.condition.text}`} style="light" className='m-0'>
                {location &&
                    <CurrentWeatherCondition timeZone={location?.tz_id} conditionText={current?.condition.text} conditionIcon={current?.condition.icon} />
                }
            </Tooltip>
        </>
    );
};

export default Weather;