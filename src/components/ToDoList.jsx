import { useState } from "react";

export function ToDoList() {
  let nextId = 0;
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");

  const list = activities.map((activity) => (
    <li style={{ textAlign: "center", listStylePosition: "inside" }}>
      {activity}
    </li>
  ));

  function addItem() {
    if (newActivity !== "") setActivities([...activities, newActivity]);
    setNewActivity("");
  }

  function removeItem() {
    setActivities(activities.filter((activity) => activity != newActivity));
    setNewActivity("");
  }

  return (
    <>
      <h1>My First To Do</h1>
      <ul>{list}</ul>
      <textarea
        value={newActivity}
        onChange={(e) => setNewActivity(e.target.value)}
      />
      <br />
      <button style={{ textAlign: "center" }} onClick={addItem}>
        Add ToDo
      </button>
      <button style={{ textAlign: "center" }} onClick={removeItem}>
        Delete ToDo
      </button>
    </>
  );
}
//Imbunatatire: fiecare element din lista sa fie un component care poate fi sters sau editat
//Sub toata lista sa ai un buton de adaugare care baga un element nou

// export function ToDoList() {
//   // Added export here
//   const ToDo = ["one", "two", "three"];
//   const list = ToDo.map(
//     (
//       activity,
//       index // Added index for key
//     ) => (
//       <li key={index}>
//         {" "}
//         {/* Added key prop */}
//         <p>{activity}</p>
//       </li>
//     )
//   );
//   return <ul>{list}</ul>;
// }
