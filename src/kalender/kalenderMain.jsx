import React, { useState, useEffect } from 'react';
import './kalenderStyle.css';
import todo from "./todo.json";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState();
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");


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

    const handleDateClick = (day) => {
        setSelectedDate(day);
        document.getElementById("addTasks").style.display = "None";
    };

    const addTodo = (date, taskList) => {
        setTasks(prevTasks => [...prevTasks, { date, tasks: taskList }]);
        document.getElementById("addTasks").style.display = "inline-block";
    };

    const getTasksForDate = (date) => {
        const task = tasks.find(task => task.date === date);
        return task ? task.tasks : [];
    };

    const addTask = () => {
        if (taskInput.trim() !== "" && selectedDate) {
            const dateFull = selectedDate;
            const taskList = getTasksForDate(dateFull);
            const updatedTaskList = [...taskList, taskInput];

            const updatedTasks = tasks.map(task => {
                if (task.date === dateFull) {
                    return { date: dateFull, tasks: updatedTaskList };
                }
                return task;
            });

            setTasks(updatedTasks);
            setTaskInput("");
        }
    };

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
        const dateFull = `${i}${currentMonth}${currentYear}`;
        const taskList = getTasksForDate(dateFull);

        days.push(
            <div
                className={`day ${selectedDate === dateFull ? 'selected' : ''}`}
                key={`day-${i}`}
                onClick={() => handleDateClick(dateFull)}
            >
                <div className="day-number">{i}</div>
                <div className="task-count">{taskList.length}</div>
                <button onClick={() => addTodo(dateFull, [])}>A</button>
            </div>
        );
    }

    return (
        <div className="calendar-container">
            <div className="calendar-todo">
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
                <div className="dates">{days}</div>
            </div>
            {selectedDate && (
                <div className="todo-list">
                    <h3>{selectedDate}</h3>
                    <ul>
                        {getTasksForDate(selectedDate).map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                    <div className="add-task" id='addTasks'>
                        <input
                            type="text"
                            value={taskInput}
                            onChange={e => setTaskInput(e.target.value)}
                        />
                        <button onClick={addTask}>Add Task</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
