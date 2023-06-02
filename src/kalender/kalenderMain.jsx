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


    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentMonth = monthNames[date.getMonth()];
    const currentYear = date.getFullYear();

    const daysInMonth = new Date(currentYear, date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, date.getMonth(), 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div className="empty-day" key={`empty-${i}`}></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(<div className="day" key={`day-${i}`}>{i}</div>);
    }

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={handlePrevMonth}>&lt;</button>
                <h2>{currentMonth} {currentYear}</h2>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className="days">

                <div className="day">Mon</div>
                <div className="day">Tue</div>
                <div className="day">Wed</div>
                <div className="day">Thu</div>
                <div className="day">Fri</div>
                <div className="day">Sat</div>
                <div className="day">Sun</div>
            </div>
            <div className="dates">
                {days}
            </div>
        </div>
    );
};

export default Calendar;
