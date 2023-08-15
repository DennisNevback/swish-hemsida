import React, { useState, useEffect } from 'react';
import './kalenderStyle.css';
import todo from "./todo.json";
//import { addTodo } from "./todos.jsx";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [todoJSON, addTodoFunc] = useState(todo);

    useEffect(() => { console.log("useEffect working") }, [todoJSON]);

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

<<<<<<< HEAD
    function objToString(obj) {
        var str = '';
        for (var p in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, p)) {
                str += + obj[p];
            }
        }
        return obj[p];
    }
=======
    const handleDateClick = (day) => {
        setSelectedDate(day);
    };

    const addTodo = (date, taskList) => {
        let newTaskList = []
        let newTask = prompt("Please enter your task", "Do Dishes");
        newTaskList.push(newTask)
        setTasks(prevTasks => [...prevTasks, { date, tasks: newTaskList }]);
    };
    const addTasks = () => {
>>>>>>> parent of e641c34 (Fixed add task)

    function jsonToNrOfTask(id) {
        var data = todoJSON;
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == id) {

                return data[i].list.length;
            }
        }

    }

    function addTodo(id, array) {
        console.log("Todo start!" + todoJSON);
        var list = [];
        for (var i = 0; i < array.length; i++) {
            list.push(array[i]);
        }
        var testObj = {
            id,
            list
        }
        var test = todoJSON;
        test.push(testObj);
        console.log("Todo added!" + test);
        addTodoFunc(test);
    }

<<<<<<< HEAD
=======
    const getTasksForDate = (date) => {
        const task = tasks.find(task => task.date === date);
        console.log(tasks)
        return task ? task.tasks : [];
    };
>>>>>>> parent of e641c34 (Fixed add task)

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
        days.push(<div className="day" key={`day-${i}`} id={dateFull}>
            {i}
            {jsonToNrOfTask(dateFull)}
            <button onClick={() => addTodo("29June2023", ["fiska", "städa", "Tvätta", "Stuff"])}>A</button>
        </div >);
    }
    console.log(todoJSON);

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
