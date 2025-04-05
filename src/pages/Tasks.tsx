import React, { useEffect, useState } from "react";
import { cardProps } from "../types/cardType";
import axios from "axios";
import TaskCard from "../components/TaskCard/TaskCard";
import Layout from "../components/layout/Layout";

import "./Tasks.scss";

const Tasks: React.FC = () => {
  const [tasks, setTask] = useState<cardProps[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTask(res.data));
  }, []);

  const handleComplete = (id: number) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <Layout>
      <div className="tasks-container">
        {tasks.map((value, index) => (
          <TaskCard
            title={value.title}
            completed={value.completed}
            key={index}
            id={value.id}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Tasks;
