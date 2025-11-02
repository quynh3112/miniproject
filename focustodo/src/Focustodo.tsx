import { useState } from "react";
import Timer from "./Timer";

interface Task {
  name: string;
  minutes: number;
}

export default function FocusTodo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [newMinutes, setNewMinutes] = useState(25);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const addTask = () => {
    if (!newTask) return;
    setTasks([...tasks, { name: newTask, minutes: newMinutes }]);
    setNewTask("");
    setNewMinutes(1);
  };

  const startAll = () => {
    if (tasks.length === 0) return;
    setActiveTask(tasks[0]); 
  };

  const handleFinish = () => {
    
    const [, ...remaining] = tasks;
    setTasks(remaining);
    setActiveTask(null);
  };

  if (activeTask) {
    return (
      <Timer
        task={activeTask.name}
        minutes={activeTask.minutes}
        onfinish={handleFinish}
      />
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Focus-Todo</h1>

      <input
        placeholder="Nhập công việc..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input
        type="number"
        min={25}
        value={newMinutes}
        onChange={(e) => setNewMinutes(Number(e.target.value))}
        style={{ width: 60, marginLeft: 5 }}
      />
      <button onClick={addTask} style={{ marginLeft: 5 }}>
        ➕ Thêm
      </button>

      <ul style={{ listStyle: "none", marginTop: 20 }}>
        {tasks.map((t, i) => (
          <li key={i}>
            {t.name} — {t.minutes} phút
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <button
          onClick={startAll}
          style={{
            marginTop: 10,
            padding: "8px 16px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: 5,
          }}
        >
          ▶ Bắt đầu
        </button>
      )}
    </div>
  );
}
