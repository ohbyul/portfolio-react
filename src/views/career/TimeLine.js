import React from 'react';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const TimeLine = ({ data }) => {
    return (
        <Timeline>
            {
                data.map((item) => {
                    return (
                        <div key={item.index}>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                    <Timeline.Time>{item.time}</Timeline.Time>
                                    <Timeline.Title>{item.title}</Timeline.Title>
                                    <Timeline.Body>
                                        <ul style={{ listStyle: 'inside' }}>
                                            {
                                                item?.contents?.map((data, index) => {
                                                    return (
                                                        <li key={index}>{data}</li>
                                                    )
                                                })
                                            }
                                        </ul>

                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                        </div>
                    )
                })
            }

        </Timeline>
    );
};

export default TimeLine;