// todos.js
// Här kan du lägga till JavaScript-kod för att hantera todos
import todo from "./todo.json"
import React, { useState } from 'react';

// Exempel på en funktion för att lägga till en todo



export function addTodo(id, array) {
    var list = [];
    for (var i = 0; i < array.length; i++) {
        list.push(array[i]);
    }
    var testObj = {
        id,
        list
    }
    todo.push(testObj);

    return console.log("Todo added!" + todo)
    // Kod för att hantera tillägg av en todo
}

// Exempel på en funktion för att ta bort en todo
function removeTodo() {
    // Kod för att hantera borttagning av en todo
}

// Exempel på en funktion för att ändra en todo
function updateTodo() {
    // Kod för att hantera uppdatering av en todo
}

// Annan kod och funktioner för att hantera todos kan läggas till här
