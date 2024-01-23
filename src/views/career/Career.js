import React from 'react';
import TimeLine from './TimeLine';

const Career = () => {
    const data = [
        {
            index: 0,
            time: 'March 2021',
            title: '2021.03.22 ~ 2022.07.31 (주)씨이랩 비즈니스개발본부 개발팀',
            contents: ['x-labeller', 'x-aiva', '대구 AI 국민안전', 'AI 3호전 detecting']
        },
        {
            index: 1,
            time: 'August 2022',
            title: '2022.08.01 ~~ (주)어반데이터랩 플랫폼본부 개발1팀',
            contents: ['Codipai', '자폐플랫폼', 'Dtverse']
        }
    ]
    return (
        <div className='container-wrap'>
            <TimeLine data={data} />
        </div>
    );
};

export default Career;