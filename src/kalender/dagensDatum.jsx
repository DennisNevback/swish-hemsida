// today.js
// Här kan du lägga till JavaScript-kod för att hantera dagens datum och tid

import React, { useEffect } from 'react';

function DagensDatum() {
    useEffect(() => {
        showCurrentDateTime();
    }, []);

    function showCurrentDateTime() {
        const today = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

        const dateElement = document.getElementById('current-date');
        const timeElement = document.getElementById('current-time');

        dateElement.textContent = today.toLocaleDateString('sv-SE', dateOptions);
        timeElement.textContent = today.toLocaleTimeString('sv-SE', timeOptions);
    }

    return (
        <div>
            {/* Här kan du lägga till JSX-element för att visa dagens datum och tid */}
            <p id="current-date"></p>
            <p id="current-time"></p>
        </div>
    );
}

export default DagensDatum