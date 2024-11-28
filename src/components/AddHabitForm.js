import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (habitName.trim() === "") return;
    onAddHabit(habitName.trim());
    setHabitName("");
  };

  return (
    //TODO: add a form to add a new habit
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a habit name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}
