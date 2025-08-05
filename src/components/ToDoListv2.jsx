import { useRef, useState } from "react";

export function ToDoListv2() {
  const nextId = useRef(0);
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState();
  const [selectedId, setSelectedId] = useState(null);

  function handleActivityClick(id) {
    if (selectedId != id) setSelectedId(id);
  }

  function handleSelectClick(e, activity) {
    if (e.target.value === "Edit") {
      const newName = prompt("Enter new name:", activity.name);
      setActivities((act) =>
        act.map((a) => (a.id == activity.id ? { ...a, name: newName } : a))
      );
    }
    if (e.target.value === "Delete") {
      setActivities(activities.filter((a) => a.id !== activity.id));
    }
    setSelectedId(null);
  }

  const list = activities.map((activity) => (
    <div key={activity.id}>
      <button
        onClick={() => handleActivityClick(activity.id)}
        style={{ textAlign: "center", listStylePosition: "inside" }}
      >
        {activity.name}
      </button>
      {activity.id == selectedId && (
        <select
          name=""
          id=""
          defaultValue=""
          onChange={(e) => handleSelectClick(e, activity)            
          }
        >
          <option value="" disabled hidden></option>
          <option value="Edit">Edit</option>
          <option value="Delete">Delete</option>
        </select>
      )}
    </div>
  ));

  function addItem() {
    const newactivity = prompt("New Activity Name: ");
    if (newactivity !== "")
      setActivities([
        ...activities,
        { id: nextId.current++, name: newactivity },
      ]);
    setNewActivity("");
  }

  function removeItem() {
    setActivities(activities.filter((activity) => activity != newActivity));
    setNewActivity("");
  }

  return (
    <>
      <h1>My First To Do</h1>
      <ul>
        {list}
        <button
          style={{ fontSize: "15px", padding: "2px 20px" }}
          onClick={() => addItem()}
        >
          +
        </button>
      </ul>

      {/* <textarea
        value={newActivity}
        onChange={(e) => setNewActivity(e.target.value)}
      />
      <br />
      <button style={{ textAlign: "center" }} onClick={addItem}>
        Add ToDo
      </button> */}
    </>
    
  );
}
