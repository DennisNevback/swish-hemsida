import React, { useState } from 'react';
import './kalenderStyle.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const handlePrevMonth = () => {
        setDate(prevDate => {
            let year = prevDate.getFullYear();
            let month = prevDate.getMonth() - 1;
            if (month < 0) {
                month = 11; // December
                year -= 1;
            }
            return new Date(year, month, 1);
        });
    };

    const handleNextMonth = () => {
        setDate(prevDate => {
            let year = prevDate.getFullYear();
            let month = prevDate.getMonth() + 1;
            if (month > 11) {
                month = 0; // January
                year += 1;
            }
            return new Date(year, month, 1);
        });
    };

    function objToString(obj) {
        var str = '';
        for (var p in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, p)) {
                str += + obj[p];
            }
        }
        return obj[p];
    }

    const dayNames = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
        'Sunday'
    ];
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentMonth = monthNames[date.getMonth()];
    const currentYear = date.getFullYear();

    const daysInMonth = new Date(currentYear, date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, date.getMonth(), 1).getDay();

    const hourNow = new Date().getHours();
    const minuteNow = new Date().getMinutes();
    const dayNow = new Date().getDay();
    const dateNow = new Date().getDate();
    const monthNow = new Date().getMonth() + 1;
    const yearNow = new Date().getFullYear();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div className="empty-day" key={`empty-${i}`}></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        var dateFull = objToString({ i }) + objToString({ currentMonth }) + objToString({ currentYear });
        days.push(<div className="day" key={`day-${i}`} id={dateFull}> {i}</div >);
    }

    return (
        <div className="calenderContainer">
            <div className='calenderTodo'>
                <h2>{dayNames[dayNow]}</h2> <br></br>
                <h2>{dateNow}/{monthNames[monthNow]}/{yearNow}</h2>
                <h2> {hourNow}:{minuteNow}</h2>
            </div>
            <div className="calendar">
                <div className="header">
                    <button onClick={handlePrevMonth}>&lt;</button>
                    <h2>{currentMonth} {currentYear}</h2>
                    <button onClick={handleNextMonth}>&gt;</button>
                </div>
                <div className="days">
                    <div className="dayWeek">Mon</div>
                    <div className="dayWeek">Tue</div>
                    <div className="dayWeek">Wed</div>
                    <div className="dayWeek">Thu</div>
                    <div className="dayWeek">Fri</div>
                    <div className="dayWeek">Sat</div>
                    <div className="dayWeek">Sun</div>
                </div>
                <div className="dates">
                    {days}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
