import React, { useState , useEffect} from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { CALENDAR_DATE } from '../../../modules/action/actionTypes';

const Toolbar = (props) => {
    const { date } = props;
    const path = window.location.pathname;
    const dispatch = useDispatch();

    const [click, setClick] = useState(false);
    const month = moment(date).format("MM");
    const year = moment(date).format("YYYY");
    const YYMM = { month: month, year: year };
    
    const navigate = (action) => {
        props.onNavigate(action);
        if (!click) setClick(true);
        else setClick(false);
    };

    useEffect(() => {
        dispatch({ type: CALENDAR_DATE, calendarDate: YYMM })          //redux 세팅
      }, [click]);

    return (
        <div className="rbc-toolbar">
            <span className="rbc-btn-group">
                <button type="button" onClick={navigate.bind(null, 'TODAY')}>
                    이번달
                </button>
                <span className="flex gap5x calendar">
                    <button type="button" onClick={navigate.bind(null, 'PREV')}>
                        이전
                    </button>
                    <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
                    <button type="button" onClick={navigate.bind(null, 'NEXT')}>
                        다음
                    </button>
                </span>
            </span>
        </div>
    );
};

export default Toolbar;