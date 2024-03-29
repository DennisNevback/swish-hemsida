import React, { useState, useEffect } from 'react';
import './kalenderStyle.css';
import todo from "./todo.json";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [tasks, setTasks] = useState(todo);

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
    };

    const addTodo = (date) => {
        let newTask = prompt("Please enter your task", "Do Dishes");
        setTasks(prevTasks => {
            let dateDoesNotExist = true
            const updatedTasks = prevTasks.map(task => {
                if (task.date == date) {
                    dateDoesNotExist = false
                    return { date, tasks: [...task.tasks, newTask] }
                }
                return task
            })
            if (dateDoesNotExist) {
                updatedTasks.push({ date, tasks: [newTask] })
            }

            return updatedTasks
        });
    };

    const deleteTodo = (date, index) => {
        setTasks(prevTasks => {
            let updatedTasks = prevTasks.map(task => {
                if (task.date == date) {
                    let updatedTaskList = [...task.tasks];
                    updatedTaskList.splice(index, 1)
                    return { date, tasks: updatedTaskList };
                }
                return task;
            });
            return updatedTasks;
        });
    };

    const changeTodo = (date, index, task) => {
        let newTask = prompt("Please enter your task", task);
        setTasks(prevTasks => {
            let updatedTasks = prevTasks.map(task => {
                if (task.date == date) {
                    let updatedTaskList = [...task.tasks];
                    updatedTaskList.splice(index, 1, newTask)
                    return { date, tasks: updatedTaskList };
                }
                return task;
            });
            return updatedTasks;
        });
    };

    const getTasksForDate = (date) => {
        const task = tasks.find(task => task.date === date);
        return task ? task.tasks : [];
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
    const monthNow = new Date().getMonth();
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
                <button onClick={() => addTodo(dateFull)}>Add Task</button>
            </div>
        );
    }

    return (
        <div className="calendar-container">
            <div className='calendar-todo'>
                <br></br>
                <h2> {hourNow}:{minuteNow}</h2><br></br>
                <h2>{dayNames[dayNow]}</h2>
                <h2>{dateNow} {monthNames[monthNow]} - {yearNow}</h2>
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
                            <li key={index}>{task}
                                <button onClick={() => deleteTodo(selectedDate, index)}>Delete</button>
                                <button onClick={() => changeTodo(selectedDate, index, task)}>Edit</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Calendar;
