import React from 'react';
import './KalenderStyle.css';

function KalenderMain() {
    return (
        <div>
            <header>
                <h1>CI/CD Kalender</h1>
            </header>
            <main>
                <div className="welcome-section">
                    <h2>Välkommen till CI/CD Kalender</h2>
                    {/* Här kan du lägga till välkomstsegmentet */}
                </div>
                <div className="todo-list">
                    <h2>Att göra</h2>
                    {/* Här kan du lägga till listan med todos */}
                </div>
                <div className="calendar">
                    <h2>Kalender</h2>
                    {/* Här kan du lägga till kalendervyn */}
                </div>
            </main>
            <script src="todos.jsx"></script>
            <script src="kalenderFunktion.jsx"></script>
            <script src="today.jsx"></script>
        </div>
    );
}

export default KalenderMain;
